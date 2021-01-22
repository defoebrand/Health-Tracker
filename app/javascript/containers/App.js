import React from 'react';
import { Route } from 'react-router-dom';

import HeaderNav from '../components/HeaderNav';

import Community from './Community';
import Doctor from './Doctor';
import Friends from './Friends';
import HomePage from './HomePage';
import Resources from './Resources';
import SickCall from './SickCall';
import User from './User';

import AddStats from '../forms/AddStats';
import Register from '../forms/Register';
import Scheduler from '../forms/Scheduler';
import Settings from '../forms/Settings';
import SignIn from '../forms/SignIn';

const App = () => (
  <div className="App">
    <Route path="/" component={HeaderNav} />
    <Route path="/home" component={HomePage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/users/:user" component={User} />
    <Route path="/doctors/:doctor" component={Doctor} />
    <Route path="/new-stats" component={AddStats} />
    <Route path="/sick-call" component={SickCall} />
    <Route path="/resources" component={Resources} />
    <Route path="/friends" component={Friends} />
    <Route path="/settings" component={Settings} />
    <Route path="/communities/:community" component={Community} />
    <Route path="/:doctor/schedule-an-appointment" component={Scheduler} />
  </div>
);

export default App;
