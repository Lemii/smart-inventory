import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Card, Statistic, Typography, Empty } from 'antd';

import { CatalogContext } from '../contexts';
import { CatalogItem, ItemAccount } from '../types';
import { searchByItemId } from '../services';
import { sortItemAccounts } from '../utils';

import ItemCard from '../components/ItemCard';
import SimilarItemsList from '../components/SimilarItemsList';

function CatalogItemPage() {
  const [item, setItem] = useState<CatalogItem | null>(null);
  const [items, setItems] = useState<ItemAccount[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const catalog = React.useContext(CatalogContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const data = await searchByItemId(id);

      if (data) {
        const sorted = sortItemAccounts(data, 'lastValue');
        setItems(sorted);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  useEffect(() => {
    const entity = catalog.find((i) => i.id === id);

    setItem(entity ? entity : null);
  }, [catalog, id]);

  return item ? (
    <>
      <Typography.Title level={2}>Catalog Item</Typography.Title>

      <Row gutter={20} className="mb-10">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-5">
          <ItemCard data={item} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-5">
          <Card title="Network statistics" loading={isLoading}>
            {items.length ? (
              <>
                <Row>
                  <Col span={12} className="mb-5">
                    <Statistic title={`Registered ${item.name}s`} value={items.length} />
                  </Col>

                  <Col span={12} className="mb-5">
                    <Statistic
                      title={`Average value`}
                      prefix="$"
                      value={items.reduce((a, b) => a + b.asset.itemProperties.lastValue, 0) / 1}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={12} className="mb-5">
                    <Statistic
                      title={`Most valuable ${item.name}`}
                      prefix="$"
                      value={items[items.length - 1].asset.itemProperties.lastValue}
                      suffix={<Link to={`/item/${items[items.length - 1].address}`}>View</Link>}
                    />
                  </Col>

                  <Col span={12} className="mb-5">
                    <Statistic
                      title={`Least valuable ${item.name}`}
                      prefix="$"
                      value={items[0].asset.itemProperties.lastValue}
                      suffix={<Link to={`/item/${items[0].address}`}>View</Link>}
                    />
                  </Col>
                </Row>
              </>
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
      </Row>

      <Card title="Item Registrations">
        <SimilarItemsList itemId={item.id} />
      </Card>
    </>
  ) : (
    <div>Not found</div>
  );
}

export default CatalogItemPage;
