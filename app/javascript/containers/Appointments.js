import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppointmentCard from '../components/AppointmentCard';

const fetch = require('node-fetch');

const Appointments = ({ user }) => {
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');
  const [myAppointments, setMyAppointments] = useState([]);

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    const url = `/users/${user.id}`;
    fetch(url, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('');
      }).then(data => {
        try {
          setMyAppointments(data.appointments);
        } catch {
          throw new Error('Failed to Retrieve Your Appointments.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
  }, []);

  const cancelAppointment = appt => {
    const url = `/appointments/${appt.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to Cancel Appointment.');
      }).then(data => {
        try {
          setMyAppointments(data);
        } catch {
          throw new Error('Failed to Retrieve Your Appointments.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
  };

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <div className="viewContainer flex-down">
        <span className="viewBox flex-down">
          { myAppointments.map(appt => (
            appt.user.name
              && <AppointmentCard key={appt.id} appt={appt} handleClick={cancelAppointment} />
          )) }
        </span>
      </div>
    </>
  );
};

Appointments.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Appointments.defaultProps = {
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(Appointments);
