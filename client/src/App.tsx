import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import { catalog } from './catalog';
import { ACCOUNT_INIT } from './constants';
import { CatalogContext, AuthContext, AccountData } from './contexts';

import LayoutHeader from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  const [userData, setUserData] = useState<AccountData>(ACCOUNT_INIT);
  const [authed, setAuthed] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem('account');
    setUserData(ACCOUNT_INIT);
    setAuthed(false);
  };

  const handleLogin = (account: any, remember: boolean = false) => {
    if (remember) {
      localStorage.setItem('account', JSON.stringify(account));
    }
    setUserData(account);
    setAuthed(true);
  };

  useEffect(() => {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      handleLogin(JSON.parse(savedAccount));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthed: authed, account: userData, logout: handleLogout, login: handleLogin }}>
      <CatalogContext.Provider value={catalog}>
        <Router>
          <Layout style={{ minHeight: '100%' }}>
            <LayoutHeader />

            <Layout.Content className="mx-auto my-10 px-5" style={{ width: '100%', maxWidth: '1024px' }}>
              <Routes />
            </Layout.Content>

            <Footer />
          </Layout>
        </Router>
      </CatalogContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
