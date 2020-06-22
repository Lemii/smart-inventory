import React from 'react';
import { Card, Typography } from 'antd';

import RegisterForm from '../components/RegisterForm';

function RegisterItemPage() {
  return (
    <div>
      <Typography.Title level={2}>Register Item</Typography.Title>

      <Card>
        <RegisterForm />
      </Card>
    </div>
  );
}

export default RegisterItemPage;
