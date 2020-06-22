import { APIClient, transactions } from 'lisk-elements';
import axios from 'axios';

import { createNetworkTs, createRandomAccount } from '../utils';
import { TransferItemTransaction as TransferItemTransactionType, RegistrationTransaction, ItemAccount } from '../types';
import { BASE_URL, EXTENDED_URL, NETWORK_IDENTIFIER, FUNDING_PASSPHRASE, TRANSACTION_TYPES } from '../constants';

const { TransferItemTransaction, RegisterItemTransaction } = require('smart-inventory-blockchain');

const client = new APIClient([BASE_URL]);

export const fetchRegistrations = (limit: number = 100) =>
  client.transactions.get({ type: TRANSACTION_TYPES.register, sort: 'timestamp:desc', limit }).then((res) => res.data);

export const fetchRegistrationsByUser = (address: string, limit: number = 100): Promise<any> =>
  client.transactions
    .get({ senderId: address, type: TRANSACTION_TYPES.register, sort: 'timestamp:desc', limit })
    .then((res) => res.data);

export const fetchTransfers = (limit: number = 100) =>
  client.transactions.get({ type: TRANSACTION_TYPES.transfer, sort: 'timestamp:desc', limit }).then((res) => res.data);

export const fetchTransfersByUser = (address: string, limit: number = 100) =>
  client.transactions
    .get({ senderId: address, type: TRANSACTION_TYPES.transfer, sort: 'timestamp:desc', limit })
    .then((res) => res.data)
    .catch(() => []);

export const registerItem = (registration: any, passphrase: string): Promise<string> => {
  const account = createRandomAccount();

  const tx = new RegisterItemTransaction({
    asset: {
      recipientId: account.address,
      registrationData: registration
    },
    networkIdentifier: NETWORK_IDENTIFIER,
    timestamp: createNetworkTs()
  });

  tx.sign(passphrase);

  return client.transactions.broadcast(tx.toJSON()).then(() => account.address);
};

export const fetchItemByAddress = (address: string): Promise<ItemAccount> =>
  client.accounts.get({ address }).then((res: any) => res.data[0]);

export const transferItem = (transfer: any, passphrase: string) => {
  const tx = new TransferItemTransaction({
    asset: {
      recipientId: transfer.address,
      transferData: transfer
    },
    networkIdentifier: NETWORK_IDENTIFIER,
    timestamp: createNetworkTs()
  });

  tx.sign(passphrase);

  return client.transactions.broadcast(tx.toJSON());
};

export const fundAccount = (address: string) => {
  const tx = new transactions.TransferTransaction({
    asset: { recipientId: address, amount: transactions.utils.convertLSKToBeddows('50000') },
    networkIdentifier: NETWORK_IDENTIFIER,
    timestamp: createNetworkTs()
  });

  tx.sign(FUNDING_PASSPHRASE);

  return client.transactions.broadcast(tx.toJSON());
};

/*
The services below make use of an extended API module created by the Moosty team.
This API enables the app to search for fields in the asset object -- something
that was previously not natively possible.

https://github.com/Moosty/lisk-extended-api
*/

export const fetchItemTransactions = async (item: string) => {
  const url = `${EXTENDED_URL}/extended-api/transactions`;
  const query = `?asset=recipientId&contains=${item}`;

  const res = await axios
    .get(url + query)
    .then((res) => res.data.data)
    .catch((err) => []);

  let registration: Partial<RegistrationTransaction> = {};
  const transfers: TransferItemTransactionType[] = [];

  for (const tx of res) {
    if (tx.type === TRANSACTION_TYPES.register) {
      registration = tx;
    }
    if (tx.type === TRANSACTION_TYPES.transfer) {
      transfers.push(tx);
    }
  }

  return { registration, transfers };
};

export const searchByItemId = async (id: string) => {
  const url = `${EXTENDED_URL}/extended-api/accounts`;
  const query = `?asset=itemProperties.identifier&contains=${id}`;

  const res: ItemAccount[] = await axios
    .get(url + query)
    .then((res) => res.data.data)
    .catch((err) => []);

  return res;
};

export const fetchOwnedItems = async (address: string): Promise<ItemAccount[]> => {
  const url = `${EXTENDED_URL}/extended-api/accounts`;
  const query = `?asset=owner&contains=${address}`;

  const res = await axios
    .get(url + query)
    .then((res) => res.data.data)
    .catch((err) => []);

  return res;
};

export const fetchUser = async (address: string): Promise<Account> => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/accounts`;
  const query = `?address=${address}`;

  const res = await axios
    .get(url + query)
    .then((res) => res.data.data[0])
    .catch((err) => null);

  return res;
};
