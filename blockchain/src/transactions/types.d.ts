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

export interface TransferItemTransactionAsset {
  recipientId: string;
  transferData: {
    newOwner: string;
    newValue: number;
    newState: number;
  };
}

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
