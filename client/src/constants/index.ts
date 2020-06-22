const { BLOCKCHAIN_FEES } = require('smart-inventory-blockchain');

export const TRANSACTION_TYPES = {
  register: 12001,
  transfer: 12002
};

export const ACCOUNT_INIT = {
  address: '',
  passphrase: '',
  publicKey: ''
};

export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:1200';

export const EXTENDED_URL = process.env.REACT_APP_EXTENDED_URL || 'http://localhost:2020';

export const NETWORK_IDENTIFIER =
  process.env.REACT_APP_NETWORK_ID || '11a254dc30db5eb1ce4001acde35fd5a14d62584f886d30df161e4e883220eb7';

export const FUNDING_PASSPHRASE =
  process.env.REACT_APP_FUNDING_PASSPHRASE || 'word word word word word word word word word word word word';

export const TICKER = 'SIT';

type Fees = {
  registerItem: string;
  transferItem: string;
};

export const FEES: Fees = BLOCKCHAIN_FEES;

export const VALUE_LIMIT = 1000000;
