import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import SignIn from '../components/SignIn';
import Register from '../components/Register';
import HomePage from './HomePage';
import User from '../components/User';
import Doctor from '../components/Doctor';
import AddStats from '../components/AddStats';

const App = () => (
  <div className="App">
    <Route path="/" component={HeaderNav} />
    <Route path="/home" component={HomePage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/users/:user" component={User} />
    <Route path="/doctors/:doctor" component={Doctor} />
    <Route path="/new-stats" component={AddStats} />
  </div>
);

export default App;
