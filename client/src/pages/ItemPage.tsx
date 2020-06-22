import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Typography, Row, Col, Timeline, Statistic, Empty, Button } from 'antd';
import { ArrowRightOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import { CatalogContext } from '../contexts';
import { TRANSACTION_TYPES } from '../constants';
import { CatalogItem, ItemAccount } from '../types';
import { fetchItemByAddress, fetchItemTransactions } from '../services';
import { convertTs, calculateIncrease, returnStateAsText } from '../utils';

import ItemCard from '../components/ItemCard';
import SimilarItemsList from '../components/SimilarItemsList';

function ItemPage() {
  const [item, setItem] = useState<ItemAccount | null>(null);
  const [catalogItem, setCatalogItem] = useState<CatalogItem | null>(null);
  const [history, setHistory] = useState<any>([]);
  const [increase, setIncrease] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const catalog = React.useContext(CatalogContext);

  const { id } = useParams();

  const fetchHistory = async () => {
    const { registration, transfers } = await fetchItemTransactions(id);

    setHistory([...transfers, registration]);
  };

  const fetchItemData = async () => {
    const data = await fetchItemByAddress(id);

    if (data) {
      setItem(data);
      const entity = catalog.find((i) => i.id === data.asset.itemProperties.identifier);
      setCatalogItem(entity ? entity : null);
    }
  };

  const refresh = () => {
    Promise.all([fetchItemData(), fetchHistory()])
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    refresh();
  }, [catalog, id]);

  useEffect(() => {
    setIncrease(calculateIncrease(item?.asset.itemProperties.lastValue, catalogItem?.originalValue));
  }, [catalogItem, item]);

  return (
    <div>
      <Typography.Title level={2} className="inline mr-2">
        Item Overview
      </Typography.Title>
      {item && <Typography.Text type="secondary">(id: {item?.address})</Typography.Text>}

      {item && (
        <>
          <Row gutter={20} className="mb-10 mt-5">
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-5">
              <ItemCard data={catalogItem} />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card title={<div>Item statistics</div>} className="mb-5" loading={isLoading}>
                <Row>
                  <Col span={12} className="mb-5">
                    <Statistic
                      title="Current value"
                      value={item?.asset.itemProperties.lastValue.toLocaleString()}
                      precision={0}
                      prefix="$"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Value increase"
                      value={increase}
                      precision={2}
                      valueStyle={{ color: increase >= 0 ? '#3f8600' : '#cf1322' }}
                      prefix={increase >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                      suffix="%"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <Statistic title="Total owners" value={item?.asset.itemProperties.numOfOwners} />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Current state"
                      value={returnStateAsText(item?.asset.itemProperties.state)}
                      suffix={`(${item?.asset.itemProperties.state.toPrecision(2)}*)`}
                    />
                  </Col>
                </Row>
              </Card>

              <Card title="Item history" loading={isLoading}>
                <Timeline>
                  {history.map((tx: any) => {
                    if (tx.type === TRANSACTION_TYPES.register) {
                      return (
                        <Timeline.Item color="green">
                          {convertTs(tx.timestamp)}: Item registered by user{' '}
                          <Link to={`/user/${tx.senderId}`}>{tx.senderId}</Link>
                        </Timeline.Item>
                      );
                    }

                    if (tx.type === TRANSACTION_TYPES.transfer) {
                      const newOwner = tx.asset.transferData.newOwner;
                      return (
                        <Timeline.Item>
                          {convertTs(tx.timestamp)}: Item transferred <ArrowRightOutlined className="ml-2 mr-2" />{' '}
                          <Link to={`/user/${newOwner}`}>{newOwner}</Link>
                        </Timeline.Item>
                      );
                    }
                  })}
                </Timeline>
              </Card>
            </Col>
          </Row>

          <Card title="Similar Items" loading={isLoading}>
            <SimilarItemsList itemId={item.asset.itemProperties.identifier} itemAddress={item.address} />
          </Card>
        </>
      )}
      {!item && (
        <Card>
          <Empty
            description={
              <div>
                <Typography.Text>No item found</Typography.Text>

                <div className="flex justify-center">
                  <Button className="mt-5" onClick={refresh}>
                    Refresh
                  </Button>
                </div>
              </div>
            }
          />
        </Card>
      )}
    </div>
  );
}

export default ItemPage;
