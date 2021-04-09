import React from 'react';
import { Route } from 'react-router-dom';

import HeaderNav from '../components/HeaderNav';
import PatientData from '../components/PatientData';

import Community from './Community';
import Doctors from './Doctors';
import Friends from './Friends';
import HomePage from './HomePage';
import Resources from './Resources';
import SickCall from './SickCall';
import User from './User';

import AddStats from '../forms/AddStats';
import Register from '../forms/Register';
import DrRegister from '../forms/DrRegister';
import Scheduler from '../forms/Scheduler';
import Settings from '../forms/Settings';
import SignIn from '../forms/SignIn';

const App = () => (
  <div className="App">
    <Route path="/" component={HeaderNav} />
    <Route path="/home" component={HomePage} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/doctor_registration" component={DrRegister} />
    <Route path="/users/:user" component={User} />
    <Route path="/new-stats" component={AddStats} />
    <Route path="/doctors/:doctor" component={Doctors} />
    <Route path="/patient-data" component={PatientData} />
    <Route path="/resources" component={Resources} />
    <Route path="/friends" component={Friends} />
    <Route path="/settings" component={Settings} />
    <Route path="/sick-call" component={SickCall} />
    <Route path="/communities/:community" component={Community} />
    <Route path="/:doctor/schedule-an-appointment" component={Scheduler} />
  </div>
);

export default App;
