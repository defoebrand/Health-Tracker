import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import scheduleAppointment from '../redux/thunks/scheduleAppointment';
import { viewDoctorsTab } from '../redux/actions';

const Scheduler = ({ doctor, dispatch }) => {
  const list = 'list';
  const history = useHistory();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');
  const [instructionsStyle, setInstructionsStyle] = useState('formHeader');

  const handleClick = event => {
    dispatch(viewDoctorsTab(event.target.dataset.rbEventKey));
    history.push(`/doctors/${list}`);
  };

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  const requestAppointment = () => {
    if (time === '' || date === '' || !/\S/.test(notes)) {
      setError('You Must Fill Out The Entire Form');
      setFailedMessage('displayMessage');
      setInstructionsStyle('redError');
    } else {
      dispatch(scheduleAppointment(token, doctor, date, time, notes)).then(() => {
        dispatch(viewDoctorsTab('appointments'));
        history.push(`/doctors/${list}`);
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
    }
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
      <Tabs
        defaultActiveKey=""
        transition={false}
        id="noanim-tab-example"
        onClick={handleClick}
      >
        <Tab eventKey="personal" title="My Doctors" />
        <Tab eventKey="all" title="All Doctors" />
        <Tab eventKey="appointments" title="My Appointments" />
      </Tabs>
      <h3 className={failedMessage}>{error}</h3>
      <h5 className={instructionsStyle}>All Fields Must Be Filled In</h5>
      <Form className="formBox">
        <h1 className="text-center">{`Schedule an appointment with ${doctor}`}</h1>
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
        <Button variant="primary" type="button" onClick={requestAppointment}>
          Request Appointment
        </Button>
      </Form>

    </>
  );
};

Scheduler.propTypes = {
  dispatch: PropTypes.func.isRequired,
  doctor: PropTypes.string,
};
Scheduler.defaultProps = {
  doctor: '',
};

export default connect(state => ({
  doctor: state.friendsReducer.doctor,
}))(Scheduler);
