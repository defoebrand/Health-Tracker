import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import HomePage from './HomePage';
import User from '../components/User';
import Doctor from '../components/Doctor';
import AddStats from '../components/AddStats';
import Account from '../components/Account';

const App = () => (
  <div className="App">
    <Route path="/" component={HeaderNav} />
    <Route path="/home" component={HomePage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/users/:user" component={User} />
    <Route path="/doctors/:doctor" component={Doctor} />
    <Route path="/new-stats" component={AddStats} />
    <Route path="/sick-call" component={Doctor} />
    <Route path="/resources" component={Doctor} />
    <Route path="/friends" component={Doctor} />
    <Route path="/settings" component={Account} />
  </div>
);

export default App;
