import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

import { CatalogItem } from '../types';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: CatalogItem, b: CatalogItem) => a.name.localeCompare(b.name),
    render: (text: string, record: CatalogItem) => <Link to={`/catalog/${record.id}`}>{text}</Link>
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
    sorter: (a: CatalogItem, b: CatalogItem) => a.manufacturer.localeCompare(b.manufacturer)
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    sorter: (a: CatalogItem, b: CatalogItem) => a.year - b.year
  },
  {
    title: 'Original value',
    dataIndex: 'originalValue',
    key: 'originalValue',
    sorter: (a: CatalogItem, b: CatalogItem) => a.originalValue - b.originalValue,
    render: (text: number) => (text ? `$ ${text.toLocaleString()}` : 'Unknown')
  }
];

type Props = {
  data: CatalogItem[];
};

const CatalogTable = (props: Props) => <Table columns={columns} dataSource={props.data} />;

export default CatalogTable;
