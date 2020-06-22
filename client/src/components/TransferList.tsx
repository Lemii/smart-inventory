import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Skeleton, Avatar, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { CatalogContext } from '../contexts';
import { convertTs } from '../utils';
import { fetchItemByAddress } from '../services';
import { TransferItemTransaction, ItemAccount, CatalogItem } from '../types';

type ListProps = {
  data: TransferItemTransaction[];
  isLoading: boolean;
};

type ItemProps = {
  transfer: TransferItemTransaction;
};

const TransferItem = (props: ItemProps) => {
  const catalog = React.useContext(CatalogContext);
  const [catalogItem, setCatalogItem] = useState<CatalogItem | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    const update = async () => {
      const data: ItemAccount = await fetchItemByAddress(props.transfer.asset.recipientId);

      const item = catalog.find((i) => i.id === data.asset.itemProperties.identifier);
      setCatalogItem(item || null);
      setIsloading(!isLoading);
    };

    update();
  }, []);

  return (
    <List.Item>
      <Skeleton avatar title={false} loading={isLoading} active>
        <List.Item.Meta
          avatar={<Avatar src={catalogItem ? catalogItem.img : ''} />}
          title={
            <Link to={`/item/${props.transfer.asset.recipientId}`}>
              {catalogItem?.manufacturer} {catalogItem?.name} ({catalogItem?.year})
            </Link>
          }
          description={
            <div>
              <Link to={`/user/${props.transfer.senderId}`}>{props.transfer.senderId}</Link>{' '}
              <ArrowRightOutlined className="ml-2 mr-2" />
              <Link to={`/user/${props.transfer.asset.transferData.newOwner}`}>
                {props.transfer.asset.transferData.newOwner}
              </Link>{' '}
              on {convertTs(props.transfer.timestamp)}
            </div>
          }
        />

        <Link to={`/item/${props.transfer.asset.recipientId}`}>
          <Button type="primary">View Item</Button>
        </Link>
      </Skeleton>
    </List.Item>
  );
};

function TransferList(props: ListProps) {
  return (
    <List
      loading={props.isLoading}
      style={{ background: '#fff' }}
      itemLayout="horizontal"
      dataSource={props.data}
      bordered
      renderItem={(transfer: TransferItemTransaction) => <TransferItem transfer={transfer} />}
    />
  );
}

export default TransferList;
