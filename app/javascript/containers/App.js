import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import SignIn from '../components/SignIn';
import HomePage from './HomePage';

const App = () => (
  <div className="App">
    <Route path="/" component={HeaderNav} />
    <Route path="/home" component={HomePage} />
    <Route path="/signin" component={SignIn} />
  </div>
);

export default App;
