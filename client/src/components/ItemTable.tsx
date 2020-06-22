import React from 'react';
import { Table } from 'antd';

import { ItemAccountAsset } from '../types';

const columns = [
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner'
  },
  {
    title: 'Number of owners',
    dataIndex: 'numOfOwners',
    key: 'numOfOwners'
  },
  {
    title: 'Last price',
    dataIndex: 'lastValue',
    key: 'lastValue'
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state'
  }
];

type Props = {
  data: ItemAccountAsset[];
};

const CatalogTable = (props: Props) => <Table columns={columns} dataSource={props.data} />;

export default CatalogTable;
