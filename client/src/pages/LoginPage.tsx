import React from 'react';
import { Typography, Card } from 'antd';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const { Title } = Typography;

function LoginPage() {
  return (
    <div>
      <Title level={2}>Log in</Title>
      <Card className="mb-20">
        <LoginForm />
      </Card>

      <Title level={2}>Sign up</Title>
      <Card>
        <SignUpForm />
      </Card>
    </div>
  );
}

export default LoginPage;
