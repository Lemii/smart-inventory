import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Card, Typography, Empty, Button } from 'antd';
import { Account, utils } from '@liskhq/lisk-transactions';

import { TICKER } from '../constants';
import { fetchUser, fetchOwnedItems, fetchRegistrationsByUser, fetchTransfersByUser } from '../services';
import { CatalogContext, AuthContext } from '../contexts';
import { ItemAccount, RegistrationTransaction, TransferItemTransaction } from '../types';

import RegistrationList from '../components/RegistrationList';
import TransferList from '../components/TransferList';

type RegistrationHook = {
  data: RegistrationTransaction[];
  isLoading: boolean;
};

type TransferHook = {
  data: TransferItemTransaction[];
  isLoading: boolean;
};

function UserPage() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const catalog = useContext(CatalogContext);
  const [user, setUser] = useState<Account | null>(null);
  const [ownedItems, setOwnedItems] = useState<ItemAccount[]>([]);
  const [userRegistrations, setUserRegistrations] = useState<RegistrationHook>({ data: [], isLoading: true });
  const [userTransfers, setUserTransfers] = useState<TransferHook>({ data: [], isLoading: true });

  const { address } = useParams();

  useEffect(() => {
    const fetchUserAccount = async () => {
      const data = await fetchUser(address);
      // @ts-ignore
      setUser(data);
    };

    const updateRegistrations = async () => {
      const data = await fetchRegistrationsByUser(address);

      setUserRegistrations({ data, isLoading: false });
    };

    const updateLatestTransfers = async () => {
      const data = await fetchTransfersByUser(address);
      //@ts-ignore
      setUserTransfers({ data, isLoading: false });
    };

    const fetchItemsOwned = async () => {
      const data = await fetchOwnedItems(address);
      setOwnedItems(data);
    };

    fetchUserAccount();
    updateRegistrations();
    updateLatestTransfers();
    fetchItemsOwned();

    const interval = setInterval(() => {
      fetchUserAccount();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [address]);

  return (
    <div>
      <Typography.Title level={2}>User Overview</Typography.Title>

      <Card title="Account Info" className="mb-20">
        {user ? (
          <div>
            <Typography.Text className="block">
              <strong>Address:</strong> {user.address}
            </Typography.Text>

            <Typography.Text className="block">
              <strong>Balance:</strong> {utils.convertBeddowsToLSK(user.balance)} {TICKER}
            </Typography.Text>

            <Typography.Text>
              <strong>Items currently owned: </strong>
            </Typography.Text>
            {ownedItems.length ? (
              <ul>
                {ownedItems.map((item) => {
                  const catalogItem = catalog.find((i) => i.id === item.asset.itemProperties.identifier);

                  return (
                    <li key={item.address}>
                      <Link to={`/item/${item.address}`}>
                        {catalogItem?.manufacturer} {catalogItem?.name} ({catalogItem?.year})
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              'None'
            )}
          </div>
        ) : (
          <Empty description="Uninitialized Account" />
        )}
      </Card>

      <Typography.Title level={2}>Registrations by user</Typography.Title>
      <RegistrationList data={userRegistrations.data} isLoading={userRegistrations.isLoading} />
      {auth.account.address === address && (
        <Button type="primary" className="mt-5" onClick={() => history.push('/register')}>
          Register Item
        </Button>
      )}

      <Typography.Title level={2} className="mt-20">
        Transfers by user
      </Typography.Title>
      <TransferList data={userTransfers.data} isLoading={userTransfers.isLoading} />
      {auth.account.address === address && (
        <Button type="primary" className="mt-5" onClick={() => history.push('/transfer')}>
          Transfer Item
        </Button>
      )}
    </div>
  );
}

export default UserPage;
