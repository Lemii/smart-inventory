import React from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Button } from 'antd';

import { CatalogContext } from '../contexts';
import { convertTs } from '../utils';
import { RegistrationTransaction } from '../types';

type Props = {
  data: RegistrationTransaction[];
  isLoading: boolean;
};

function RegistrationList(props: Props) {
  const catalog = React.useContext(CatalogContext);

  return (
    <List
      loading={props.isLoading}
      style={{ background: '#fff' }}
      itemLayout="horizontal"
      dataSource={props.data}
      bordered
      renderItem={(registration: RegistrationTransaction) => {
        const { identifier } = registration.asset.registrationData;
        const catalogItem = catalog.find((i) => i.id === identifier);

        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={catalogItem?.img} />}
              title={
                <Link to={`/item/${registration.asset.recipientId}`}>
                  {catalogItem?.manufacturer} {catalogItem?.name} ({catalogItem?.year})
                </Link>
              }
              description={
                <div>
                  Registered by user <Link to={`/user/${registration.senderId}`}>{registration.senderId}</Link> on{' '}
                  {convertTs(registration.timestamp)}
                </div>
              }
            />

            <Link to={`/item/${registration.asset.recipientId}`}>
              <Button type="primary">View Item</Button>
            </Link>
          </List.Item>
        );
      }}
    />
  );
}

export default RegistrationList;
