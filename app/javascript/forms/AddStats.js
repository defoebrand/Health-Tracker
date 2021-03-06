import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddStats = ({ user }) => {
  const {
    pulse, temperature, bloodSugar, systolic, diastolic, weight,
  } = user;

  const history = useHistory();
  const [newTemp, setTemp] = useState('');
  const [newPulse, setPulse] = useState('');
  const [newBloodSugar, setBloodSugar] = useState('');
  const [newSystolic, setSystolic] = useState('');
  const [newDiastolic, setDiastolic] = useState('');
  const [newWeight, setWeight] = useState('');
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const changeTemp = e => {
    setTemp(e.target.value);
  };
  const changeWeight = e => {
    setWeight(e.target.value);
  };
  const changePulse = e => {
    setPulse(e.target.value);
  };
  const changeBloodSugar = e => {
    setBloodSugar(e.target.value);
  };
  const changeSystolic = e => {
    setSystolic(e.target.value);
  };
  const changeDiastolic = e => {
    setDiastolic(e.target.value);
  };

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  const submitRegister = e => {
    e.preventDefault();

    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let time;
    if (date.getHours() > 12) {
      time = `${date.getHours() - 12}p`;
    } else {
      time = `${date.getHours()}a`;
    }
    const dateTime = `${months[date.getMonth()]}${date.getDate()}-${time}`;

    if (newPulse !== '') {
      if (pulse[dateTime] !== undefined) {
        pulse[dateTime] = { ...pulse[dateTime], [time]: Number(newPulse) };
      } else {
        pulse[dateTime] = { [time]: Number(newPulse) };
      }
    }

    if (newWeight !== '') {
      if (weight.measurements !== undefined) {
        weight.measurements = {
          ...weight.measurements,
          [dateTime]: Number(newWeight),
        };
      } else {
        weight.measurements = { [dateTime]: Number(newWeight) };
      }
    }
    if (newTemp !== '') {
      if (temperature[dateTime] !== undefined) {
        temperature[dateTime] = { ...temperature[dateTime], [time]: Number(newTemp) };
      } else {
        temperature[dateTime] = { [time]: Number(newTemp) };
      }
    }

    if (newBloodSugar !== '') {
      if (bloodSugar[dateTime] !== undefined) {
        bloodSugar[dateTime] = {
          ...bloodSugar[dateTime],
          [time]: Number(newBloodSugar),
        };
      } else {
        bloodSugar[dateTime] = { [time]: Number(newBloodSugar) };
      }
    }

    if (newSystolic !== '') {
      if (systolic[dateTime] !== undefined) {
        systolic[dateTime] = {
          ...systolic[dateTime],
          [time]: Number(newSystolic),
        };
      } else {
        systolic[dateTime] = { [time]: Number(newSystolic) };
      }
    }

    if (newDiastolic !== '') {
      if (diastolic[dateTime] !== undefined) {
        diastolic[dateTime] = {
          ...diastolic[dateTime],
          [time]: Number(newDiastolic),
        };
      } else {
        diastolic[dateTime] = { [time]: Number(newDiastolic) };
      }
    }

    const url = `/users/${user.id}`;
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        user: {
          temperature: JSON.stringify(temperature),
          weight: JSON.stringify(weight),
          pulse: JSON.stringify(pulse),
          blood_sugar: JSON.stringify(bloodSugar),
          systolic: JSON.stringify(systolic),
          diastolic: JSON.stringify(diastolic),
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
      }).then(({ name }) => {
        history.push(`/users/${name}`);
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
  };

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Form className="formBox">
        <Form.Group controlId="formBasicWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="Weight" onChange={changeWeight} />
        </Form.Group>
        <Form.Group controlId="formBasicBloodPressure">
          <Form.Label>Blood Pressure</Form.Label>
          <div className="flex">
            <Form.Control style={{ width: '50%' }} type="text" placeholder="Systolic" onChange={changeSystolic} />
            <Form.Control style={{ width: '50%' }} type="text" placeholder="Diastolic" onChange={changeDiastolic} />
          </div>
        </Form.Group>
        <Form.Group controlId="formBasicTemp">
          <Form.Label>Temperature</Form.Label>
          <Form.Control type="text" placeholder="Temperature" onChange={changeTemp} />
        </Form.Group>
        <Form.Group controlId="formBasicPulse">
          <Form.Label>Pulse</Form.Label>
          <Form.Control type="text" placeholder="Pulse" onChange={changePulse} />
        </Form.Group>
        <Form.Group controlId="formBasicBloodSugar">
          <Form.Label>Blood Sugar</Form.Label>
          <Form.Control type="text" placeholder="BloodSugar" onChange={changeBloodSugar} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitRegister}>
          Submit
        </Button>
      </Form>
    </>
  );
};

AddStats.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    weight: PropTypes.shape(),
    pulse: PropTypes.shape(),
    temperature: PropTypes.shape(),
    bloodSugar: PropTypes.shape(),
    systolic: PropTypes.shape(),
    diastolic: PropTypes.shape(),
  }),
};

AddStats.defaultProps = {
  user: {
    name: '',
    id: 0,
    weight: {},
    pulse: {},
    temperature: {},
    bloodSugar: {},
    systolic: {},
    diastolic: {},
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(AddStats);
