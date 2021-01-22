import React from 'react';
import { Route } from 'react-router-dom';

import HeaderNav from '../components/HeaderNav';

import HomePage from './HomePage';
import Resources from './Resources';
import Doctor from './Doctor';
import Friends from './Friends';
import User from './User';

import SignIn from '../components/SignIn';
import Register from '../components/Register';
import AddStats from '../components/AddStats';
import Settings from '../components/Settings';
import Scheduler from '../components/Scheduler';

import Community from '../components/Community';

import SickCall from '../components/SickCall';

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
