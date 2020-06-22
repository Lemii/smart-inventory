import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import RegisterItemPage from '../pages/RegisterItemPage';
import TransferItemPage from '../pages/TransferItemPage';
import CatalogItemPage from '../pages/CatalogItemPage';
import ItemPage from '../pages/ItemPage';
import UserPage from '../pages/UserPage';
import NotFound from '../pages/404';
import LoginPage from '../pages/LoginPage';

type IProps = {
  component: any;
  exact?: boolean;
  path: string;
};

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  const context = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (context.account.passphrase ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/catalog" component={CatalogPage} />
      <Route exact path="/catalog/:id" component={CatalogItemPage} />
      <Route path="/item/:id" component={ItemPage} />
      <PrivateRoute exact path="/register" component={RegisterItemPage} />
      <PrivateRoute exact path="/transfer" component={TransferItemPage} />
      <Route path="/user/:address" component={UserPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
