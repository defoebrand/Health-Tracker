import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import StatsCard from '../components/StatsCard';

import loadUserData from '../helpers/loadUserData';

const User = ({ user }) => {
  const history = useHistory();

  const charts = Object.keys(user).length !== 0 ? loadUserData(user) : [];
  return (
    <>
      {Object.keys(user).includes('specialty') ? (
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
              <p key={appt.id} style={{ margin: '10px 0' }}>{`Appointment with ${appt.user.name} at ${appt.time.split('T')[1].split('.')[0]} | ${appt.notes}`}</p>
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
  user: PropTypes.shape(),
};

User.defaultProps = {
  user: {},
};

export default connect(state => ({
  user: state.userReducer.user,
}))(User);
