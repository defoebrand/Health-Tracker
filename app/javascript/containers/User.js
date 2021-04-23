import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import StatsCard from '../components/StatsCard';

import loadUserData from '../helpers/loadUserData';

import {
  updateUser,
} from '../redux/actions';

// const User = ({ user }) => {
const User = ({ dispatch, user, doctorUser }) => {
  const history = useHistory();
  console.log('user page');
  console.log(user);
  console.log(doctorUser);

  let test = false;
  if (Object.keys(user).includes('specialty')) {
    test = true;
  } else if (Object.keys(doctorUser).includes('specialty')) {
    test = true;
  }

  const charts = Object.keys(user).length !== 0 ? loadUserData(user) : [];
  return (
    <>
      {test ? (
        <>
          <div className="welcomeBanner flex-center">
            <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
            <img
              src="/images/blank-profile-pic.png"
              alt={`${user.name} profile pic`}
              className="userImage"
            />
          </div>
          <div style={{ width: '85vw', margin: 'auto' }}>
            {user.appointments.map(appt => (
              <p key={appt.id} style={{ margin: '10px 0' }}>
                {'Appointment with '}
                <button type="button" style={{ border: 'none', background: 'none', color: 'blue' }} onClick={() => dispatch(updateUser({ user: appt.user }))}>{appt.user.name}</button>
                {/* <Link to={{
                  pathname: '/patient-data',
                  state: appt.user
                }}>{appt.user.name}</Link> */}
                {` at ${appt.time.split('T')[1].split('.')[0]} | ${appt.notes}`}
              </p>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="welcomeBanner flex-center">
            <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
            <img
              src="/images/blank-profile-pic.png"
              alt={`${user.name} profile pic`}
              className="userImage"
            />
            <Button
              variant="success"
              className="userButton"
              onClick={() => history.push({ pathname: '/new-stats', state: { user } })}
            >
              Add Stats
            </Button>
          </div>
          {charts.map(chart => (
            <StatsCard
              key={chart.title}
              title={chart.title}
              data={chart.data}
            />
          ))}
        </>
      )}
    </>
  );
};

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  doctorUser: PropTypes.shape(),
};

User.defaultProps = {
  user: {},
  doctorUser: {},
};

export default connect(state => ({
  user: state.userReducer.user,
  doctorUser: state.doctorReducer.user,
}))(User);
