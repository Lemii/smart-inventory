import React from 'react';
import { Card, Empty, Typography, Divider } from 'antd';

import { CatalogItem } from '../types';

type Props = {
  data: CatalogItem | null;
};

function ItemCard(props: Props) {
  return props.data ? (
    <Card title="Product info">
      <img alt={props.data.name} src={props.data.img} className="w-full" />

      <Divider orientation="center">{props.data.name}</Divider>

      <Typography.Text className="block">
        <strong>Manufacturer:</strong> {props.data.manufacturer}
      </Typography.Text>
      <Typography.Text className="block">
        <strong>Year:</strong> {props.data.year}
      </Typography.Text>
      <Typography.Text className="block">
        <strong>Original value</strong>: $ {props.data.originalValue.toLocaleString()}
      </Typography.Text>
    </Card>
  ) : (
    <Card title="Info">
      <Empty />
    </Card>
  );
}

export default ItemCard;
