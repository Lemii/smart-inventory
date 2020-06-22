import { validator } from '@liskhq/lisk-validator';
import BigNum from '@liskhq/bignum';
import { BaseTransaction, utils } from '@liskhq/lisk-transactions';
import * as transactions from '@liskhq/lisk-transactions';

import { ItemAccount, UserAccount, TransferItemTransactionAsset } from './types';
import { FEES } from './constants';

const {
  TransactionError,
  convertToAssetError,
  utils: { verifyAmountBalance }
} = transactions;

export const TransferItemFormatSchema = {
  type: 'object',
  required: ['newOwner', 'newValue', 'newState'],
  properties: {
    newOwner: {
      type: 'string'
    },
    newValue: {
      type: 'number',
      minimum: 1
    },
    newState: {
      type: 'number',
      minimum: 0,
      maximum: 5
    },
    newCoordinates: {
      type: 'string',
      maxLength: 256
    }
  }
};

export class TransferItemTransaction extends BaseTransaction {
  public readonly asset: Readonly<TransferItemTransactionAsset>;

  static TYPE = 12002;
  static FEE = utils.convertLSKToBeddows(FEES.transferItem);

  validateAsset(): ReadonlyArray<transactions.TransactionError> {
    const schemaErrors = validator.validate(TransferItemFormatSchema, this.asset.transferData);
    const errors = convertToAssetError(this.id, schemaErrors) as transactions.TransactionError[];

    return errors;
  }

  async prepare(store: transactions.StateStorePrepare): Promise<void> {
    await store.account.cache([
      {
        address: this.asset.recipientId
      },
      {
        address: this.senderId
      },
      {
        address: this.asset.transferData.newOwner
      }
    ]);
  }

  applyAsset(store: transactions.StateStore): ReadonlyArray<transactions.TransactionError> {
    const errors: transactions.TransactionError[] = [];

    const sender = store.account.get(this.senderId) as UserAccount;
    const newOwner = store.account.getOrDefault(this.asset.transferData.newOwner) as UserAccount;
    const item = store.account.get(this.asset.recipientId) as ItemAccount;

    if (this.senderId !== item.asset.owner) {
      errors.push(new TransactionError('Sender is not owner of this item'));
    }

    const balanceError = verifyAmountBalance(this.id, sender, new BigNum('0'), this.fee);

    if (balanceError) {
      errors.push(balanceError);
    }

    item.asset.owner = this.asset.transferData.newOwner;

    const { itemProperties } = item.asset;
    const { transferData } = this.asset;

    item.asset.itemProperties = {
      ...itemProperties,
      numOfOwners: itemProperties.numOfOwners += 1,
      lastValue: transferData.newValue,
      state: transferData.newState
    };

    store.account.set(this.senderId, sender);
    store.account.set(this.asset.transferData.newOwner, newOwner);
    store.account.set(this.asset.recipientId, item);

    return errors;
  }

  undoAsset(store: transactions.StateStore): ReadonlyArray<transactions.TransactionError> {
    const errors: transactions.TransactionError[] = [];

    const sender = store.account.get(this.senderId) as UserAccount;
    const item = store.account.get(this.asset.recipientId) as ItemAccount;

    item.asset.owner = sender.address;
    sender.balance = new BigNum(sender.balance).add(this.fee).toString();

    store.account.set(this.senderId, sender);
    store.account.set(this.asset.recipientId, item);

    return errors;
  }
}
