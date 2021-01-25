import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';

import AppointmentCard from '../components/AppointmentCard';

const fetch = require('node-fetch');

const Appointments = () => {
  const [failedMessage, setFailedMessage] = useState({ display: 'none' });
  const [error, setError] = useState('');
  const [myAppointments, setMyAppointments] = useState([]);

  const displayMessage = {
    display: 'block',
    textAlign: 'center',
    marginTop: 10,
  };

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
        setFailedMessage(displayMessage);
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
        setFailedMessage(displayMessage);
      });
  };

  return (
    <>
      <h3 style={failedMessage}>{error}</h3>
      <div style={{
        margin: '25px auto', width: '85vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
      }}
      >
        <span style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15,
        }}
        >
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
