import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppointmentCard from '../components/AppointmentCard';

import { cancelMyAppointment } from '../redux/thunks/appointments';
import { getMyData } from '../redux/thunks/users';

const Appointments = ({ user, dispatch }) => {
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');
  const [myAppointments, setMyAppointments] = useState([]);

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    if (token !== undefined) {
      dispatch(getMyData(user, token)).then(data => {
        try {
          setMyAppointments(data.appointments);
        } catch {
          throw new Error('Failed to Retrieve Your Appointments.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
    }
  }, []);

  const cancelAppointment = appt => {
    dispatch(cancelMyAppointment(appt, token)).then(data => {
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
  dispatch: PropTypes.func.isRequired,
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
