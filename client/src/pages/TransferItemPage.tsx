import React from 'react';
import { Card, Typography } from 'antd';

import TransferForm from '../components/TransferForm';

function TransferItemPage() {
  return (
    <div>
      <Typography.Title level={2}>Transfer Item</Typography.Title>

      <Card>
        <TransferForm />
      </Card>
    </div>
  );
}

export default TransferItemPage;
