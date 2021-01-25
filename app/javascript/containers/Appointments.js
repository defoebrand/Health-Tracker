import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';

import AppointmentCard from '../components/AppointmentCard';

const fetch = require('node-fetch');

const Appointments = () => {
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');
  const [myAppointments, setMyAppointments] = useState([]);

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    const url = '/user_appointments';
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
          setMyAppointments(data);
        } catch {
          throw new Error('Failed to Retrieve Your Appointments.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
  }, []);

  const cancelAppointment = appt => {
    const url = '/user/cancel_appointment';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          id: appt.user.id,
        },
        appt: {
          id: appt.id,
        },
      }),
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
      <div className="viewContainer">
        <span className="viewBox">
          { myAppointments.map(appt => (
            appt.user.name
              && <AppointmentCard key={appt.id} appt={appt} handleClick={cancelAppointment} />
          )) }
        </span>
      </div>
    </>
  );
};

export default Appointments;
