import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/account/loginPage';

const MainRoute = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPage} />
    </Switch>
  </main>
);

export default MainRoute;
