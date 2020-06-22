import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { AuthContext } from '../contexts';

import logo from '../assets/logo.png';

function LayoutMenu() {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    auth.logout();
    history.push('/');
  };

  return (
    <Layout.Header>
      {auth.isAuthed ? (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="logo">
            <Link to="/">
              <img src={logo} className="object-contain w-10" alt="logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="catalog">
            <Link to="/catalog">Catalog</Link>
          </Menu.Item>

          <Menu.Item key="register">
            <Link to="/register">Register Item</Link>
          </Menu.Item>

          <Menu.Item key="transfer">
            <Link to="/transfer">Transfer Item</Link>
          </Menu.Item>

          <Menu.SubMenu key="sub2" title="Account">
            <Menu.Item key="profile">
              <Link to={`/user/${auth.account?.address}`}>View Profile</Link>
            </Menu.Item>

            <Menu.Item key="logout" onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      ) : (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="catalog">
            <Link to="/catalog">Catalog</Link>
          </Menu.Item>

          <Menu.Item key="login">
            <Link to="/login">Login / Sign Up</Link>
          </Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
}

export default LayoutMenu;
