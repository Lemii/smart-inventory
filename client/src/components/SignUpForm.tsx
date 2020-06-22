import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Popconfirm, Divider, Alert } from 'antd';

import { fundAccount } from '../services';
import { AuthContext } from '../contexts';
import { createRandomAccount } from '../utils';
import { ACCOUNT_INIT } from '../constants';

const { Text } = Typography;

const SignUpForm = () => {
  const history = useHistory();
  const [account, setAccount] = useState(ACCOUNT_INIT);
  const auth = useContext(AuthContext);

  const createNewAccount = () => {
    setAccount(createRandomAccount());
  };

  const handleLogin = () => {
    fundAccount(account.address).then(() => {
      auth.login(account, true);
      history.push(`/user/${account.address}`);
    });
  };

  useEffect(() => {
    createNewAccount();
  }, []);

  return (
    <div>
      <Text strong>Passphrase: </Text> <Text copyable>{account.passphrase}</Text>
      <br />
      <Text strong>Address: </Text> <Text copyable>{account.address}</Text>
      <br />
      <Text strong>Public Key: </Text> <Text copyable>{account.publicKey}</Text>
      <Divider />
      <Alert
        className="mt-5"
        type="warning"
        message="Your account will be automatically funded shortly after you have logged in"
      />
      <div className="block mt-5">
        <Popconfirm title="Have you stored the account data safely?" onConfirm={handleLogin}>
          <Button type="primary">Log in with account</Button>
        </Popconfirm>
        <Button className="ml-2" onClick={createNewAccount}>
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
