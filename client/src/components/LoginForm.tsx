import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

import { getAccountData } from '../utils';
import { AuthContext } from '../contexts';

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const onFinish = (values: any) => {
    const { publicKey, address } = getAccountData(values.passphrase);
    const account = { passphrase: values.passphrase, publicKey, address };
    handleLogin(account, values.remember);
  };

  const handleLogin = (account: any, remember: boolean) => {
    auth.login(account, remember);
    history.push(`/user/${account.address}`);
  };

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="passphrase" rules={[{ required: true, message: 'Please enter your passphrase' }]}>
        <Input.Password placeholder="Enter your 12-word mnemonic passphrase" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
