import { utils } from '@liskhq/lisk-transactions';
import { EPOCH_TIME_SECONDS } from '@liskhq/lisk-constants';
import { Mnemonic } from '@liskhq/lisk-passphrase';
import { getAddressAndPublicKeyFromPassphrase } from '@liskhq/lisk-cryptography';
import moment from 'moment';

import { marks } from '../components/QualitySlider';
import { ItemAccount } from '../types';

export const convertTs = (ts: number): string => {
  return moment((EPOCH_TIME_SECONDS + ts) * 1000).format('YYYY-MM-DD');
};

export const createNetworkTs = (): number => {
  return utils.getTimeFromBlockchainEpoch(Number(new Date()) - 10000);
};

export const getAccountData = (passphrase: string) => getAddressAndPublicKeyFromPassphrase(passphrase);

export const createRandomAccount = () => {
  const passphrase = Mnemonic.generateMnemonic();
  const { address, publicKey } = getAccountData(passphrase);

  return { passphrase, address, publicKey };
};

export const calculateIncrease = (newAmount: number = 0, oldamount: number = 0): number => {
  const increase = newAmount - oldamount;
  return (increase / oldamount) * 100;
};

export const returnStateAsText = (state: number) => {
  if (state < 1) {
    return marks[0];
  } else if (state < 2) {
    return marks[1];
  } else if (state < 3) {
    return marks[2];
  } else if (state < 4) {
    return marks[3];
  } else if (state < 5) {
    return marks[4];
  } else if (state === 5) {
    return marks[5];
  }

  return 'Invalid state';
};

type AcceptedFields = 'originalValue' | 'lastValue';

export const sortItemAccounts = (objs: ItemAccount[], field: AcceptedFields): any =>
  objs.sort((a, b) =>
    a.asset.itemProperties[field] > b.asset.itemProperties[field]
      ? 1
      : b.asset.itemProperties[field] > a.asset.itemProperties[field]
      ? -1
      : 0
  );
