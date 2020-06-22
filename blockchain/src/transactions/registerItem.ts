import { validator } from '@liskhq/lisk-validator';
import BigNum from '@liskhq/bignum';
import { BaseTransaction, utils } from '@liskhq/lisk-transactions';
import * as transactions from '@liskhq/lisk-transactions';

import { ItemAccount, UserAccount, RegisterItemTransactionAsset } from './types';
import { FEES } from './constants';

const {
  TransactionError,
  convertToAssetError,
  utils: { verifyAmountBalance }
} = transactions;

export const registerItemFormatSchema = {
  type: 'object',
  required: ['identifier', 'numOfOwners', 'originalValue', 'lastValue', 'state'],
  properties: {
    identifier: {
      format: 'uuid'
    },
    numOfOwners: {
      type: 'number',
      minimum: 1
    },
    originalValue: {
      type: 'number',
      minimum: 1
    },
    lastValue: {
      type: 'number',
      minimum: 1
    },
    state: {
      type: 'number',
      minimum: 0,
      maximum: 5
    },
    coordinates: {
      type: 'string',
      maxLength: 256
    }
  }
};

export class RegisterItemTransaction extends BaseTransaction {
  public readonly asset: Readonly<RegisterItemTransactionAsset>;

  static get TYPE() {
    return 12001;
  }

  static get FEE() {
    return utils.convertLSKToBeddows(FEES.registerItem);
  }

  validateAsset(): ReadonlyArray<transactions.TransactionError> {
    const schemaErrors = validator.validate(registerItemFormatSchema, this.asset.registrationData);

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
      }
    ]);
  }

  applyAsset(store: transactions.StateStore): ReadonlyArray<transactions.TransactionError> {
    const errors: transactions.TransactionError[] = [];

    const sender = store.account.get(this.senderId) as UserAccount;
    const item = store.account.getOrDefault(this.asset.recipientId) as ItemAccount;

    const balanceError = verifyAmountBalance(this.id, sender, new BigNum('0'), this.fee);

    if (balanceError) {
      errors.push(balanceError);
    }

    if (item.asset != undefined && Object.keys(item.asset).length > 0) {
      errors.push(new TransactionError('An item is already registered to this address'));
    }

    item.asset.itemProperties = { ...this.asset.registrationData };
    item.asset.owner = this.senderId;

    store.account.set(this.senderId, sender);
    store.account.set(this.asset.recipientId, item);

    return errors;
  }

  undoAsset(store: transactions.StateStore): ReadonlyArray<transactions.TransactionError> {
    const errors: transactions.TransactionError[] = [];

    const sender = store.account.get(this.senderId) as UserAccount;
    const item = store.account.get(this.asset.recipientId) as ItemAccount;

    //@ts-ignore
    item.asset = {};

    store.account.set(this.senderId, sender);
    store.account.set(this.asset.recipientId, item);

    return errors;
  }
}
