import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Scheduler = ({ doctor, user }) => {
  const list = 'list';
  const history = useHistory();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [failedMessage, setFailedMessage] = useState({ display: 'none' });
  const [error, setError] = useState('');

  const displayMessage = {
    display: 'block',
    textAlign: 'center',
    marginTop: 10,
  };

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  const requestAppointment = () => {
    const url = '/add_appointment';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          id: user.id,
        },
        appt: {
          doc_name: doctor,
          date,
          time,
          notes,
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
        throw new Error('Network Response Failed.');
      }).then(history.replace(`/doctors/${list}`)).catch(err => {
        setError(err.message);
        setFailedMessage(displayMessage);
      });
  };

  const changeDate = e => {
    setDate(e.target.value);
  };

  const changeTime = e => {
    setTime(e.target.value);
  };

  const addToNote = e => {
    setNotes(e.target.value);
  };

  return (
    <>
      <h3 style={failedMessage}>{error}</h3>
      <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
        <h1 style={{ textAlign: 'center' }}>{`Schedule an appointment with ${doctor}`}</h1>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date requested</Form.Label>
          <Form.Control type="date" onChange={changeDate} />
          <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicTime">
          <Form.Label>Time requested</Form.Label>
          <Form.Control type="time" onChange={changeTime} />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Questions and Concerns</Form.Label>
          <Form.Control as="textarea" onChange={addToNote} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={requestAppointment}>
          Request Appointment
        </Button>
      </Form>

    </>
  );
};

Scheduler.propTypes = {
  doctor: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};
Scheduler.defaultProps = {
  doctor: '',
  user: {
    id: 0,
  },
};

export default connect(state => ({
  doctor: state.appointmentReducer.doctor,
  user: state.userReducer.user,
}))(Scheduler);
