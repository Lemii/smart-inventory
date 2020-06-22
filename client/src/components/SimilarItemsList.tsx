import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Avatar, Button } from 'antd';

import { CatalogContext } from '../contexts';
import { searchByItemId } from '../services';
import { ItemAccount } from '../types';

type Props = {
  itemId: string;
  itemAddress?: string;
};

function SimilarItemsList(props: Props) {
  const catalog = React.useContext(CatalogContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ItemAccount[]>([]);

  useEffect(() => {
    const fetchSimilarItems = async () => {
      const items = await searchByItemId(props.itemId);

      setItems(items);
      setIsLoading(false);
    };

    fetchSimilarItems();
  }, [props.itemId]);

  return (
    <List
      loading={isLoading}
      style={{ background: '#fff' }}
      itemLayout="horizontal"
      dataSource={items.filter((item) => item.address !== props.itemAddress)}
      renderItem={(item) => {
        const { identifier } = item.asset.itemProperties;
        const catalogItem = catalog.find((i) => i.id === identifier);

        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={catalogItem?.img} />}
              title={
                <Link to={`/item/${item.address}`}>
                  {catalogItem?.manufacturer} {catalogItem?.name} ({catalogItem?.year}){' '}
                  <small>id: {item.address}</small>
                </Link>
              }
              description={
                <div>
                  Owned by user <Link to={`/user/${item.asset.owner}`}>{item.asset.owner}</Link>{' '}
                </div>
              }
            />

            <Link to={`/item/${item.address}`}>
              <Button type="primary">View Item</Button>
            </Link>
          </List.Item>
        );
      }}
    />
  );
}

export default SimilarItemsList;
