import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header.component';
import Homepage from './pages/homepage.component';
import SignupAndLogin from './pages/signup-and-login.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/signin' component={SignupAndLogin}></Route>
    </Switch>
  </div>
);

export default App;
