import { Account } from '@liskhq/lisk-transactions';

export interface ItemAccountAsset {
  itemProperties: {
    identifier: string;
    numOfOwners: number;
    originalValue: number;
    lastValue: number;
    state: number;
  };
  owner: string;
}

export interface ItemAccount extends Account {
  asset: ItemAccountAsset;
}

export interface UserAccount extends Account {
  balance: string;
}

export type CatalogItem = {
  id: string;
  name: string;
  manufacturer: string;
  year: number;
  originalValue: number;
  img: any;
};

export interface RegisterItemTransactionAsset {
  recipientId: string;
  registrationData: {
    identifier: string;
    numOfOwners: number;
    originalValue: number;
    lastValue: number;
    state: number;
    coordinates?: string;
  };
}

export type RegistrationTransaction = {
  id: string;
  height: number;
  blockId: string;
  type: number;
  timestamp: number;
  senderPublicKey: string;
  senderId: string;
  fee: string;
  signature: string;
  signatures: never[];
  asset: RegisterItemTransactionAsset;
  confirmations: number;
};

export interface TransferItemTransactionAsset {
  recipientId: string;
  transferData: {
    newOwner: string;
    newValue: number;
    newState: number;
  };
}

export type TransferItemTransaction = {
  id: string;
  height: number;
  blockId: string;
  type: number;
  timestamp: number;
  senderPublicKey: string;
  senderId: string;
  fee: string;
  signature: string;
  signatures: never[];
  asset: TransferItemTransactionAsset;
  confirmations: number;
};
