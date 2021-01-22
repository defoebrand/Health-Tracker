import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { myDoctors } from '../redux/actions';

const Scheduler = ({ doctor, user, dispatch }) => {
  const history = useHistory();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const requestAppointment = () => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user/appointment';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        appt: {
          user_id: user.id,
          doc_name: doctor,
          date,
          time,
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
        throw new Error('Network response was not ok.');
      }).then(data => {
        dispatch(myDoctors(data.myDocs));
        history.replace('/doctors/list');
      }).catch(err => console.log(err));
  };
  const changeDate = e => {
    setDate(e.target.value);
  };
  const changeTime = e => {
    setTime(e.target.value);
  };

  return (
    <>
      <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
        <h1 style={{ textAlign: 'center' }}>{`Schedule an appointment with ${doctor}`}</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Date requested</Form.Label>
          <Form.Control type="date" onChange={changeDate} />
          <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Time requested</Form.Label>
          <Form.Control type="time" onChange={changeTime} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={requestAppointment}>
          Request Appointment
        </Button>
      </Form>

    </>
  );
};

Scheduler.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
