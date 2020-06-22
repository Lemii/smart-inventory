import React from 'react';
import { Typography } from 'antd';

import { CatalogContext } from '../contexts';

import CatalogTable from '../components/CatalogTable';

function CatalogPage() {
  const catalog = React.useContext(CatalogContext);

  return (
    <div style={{ height: '100%' }}>
      <Typography.Title level={2}>Catalog</Typography.Title>
      <CatalogTable data={catalog} />
    </div>
  );
}

export default CatalogPage;
