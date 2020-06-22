import React from 'react';
import { CatalogItem } from '../types';

export const CatalogContext = React.createContext<CatalogItem[]>([]);

export type AuthData = {
  isAuthed: boolean;
  account: AccountData;
  logout: any;
  login: any;
};

export type AccountData = {
  passphrase: string;
  address: string;
  publicKey: string;
};

export const AuthContext = React.createContext<AuthData>({
  isAuthed: true,
  account: {
    passphrase: 'creek own stem final gate scrub live shallow stage host concert they',
    address: '11237980039345381032L',
    publicKey: ''
  },
  logout: () => null,
  login: () => null
});
