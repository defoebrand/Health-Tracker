import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddStats = ({ user }) => {
  const history = useHistory();
  const [temp, setTemp] = useState('');
  const [pulse, setPulse] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [weight, setWeight] = useState('');

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

  const submitRegister = e => {
    e.preventDefault();
    console.log(history);
    console.log('user', user);
    const { token } = localStorage;
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const formattedDate = `${months[date.getMonth()]}${date.getDate()}`;
    let time;
    if (date.getHours() > 12) {
      time = `${date.getHours() - 12}p`;
    } else {
      time = `${date.getHours()}a`;
    }
    // console.log('time', time);
    const dateTime = `${months[date.getMonth()]}${date.getDate()}-${time}`;
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const newPulse = user.pulse === null
      ? {}
      : JSON.parse(user.pulse);
    if (pulse !== '') {
      if (newPulse[dateTime] !== undefined) {
        newPulse[dateTime] = { ...newPulse[dateTime], [time]: Number(pulse) };
      } else {
        newPulse[dateTime] = { [time]: Number(pulse) };
      }
    }
    const newWeight = user.weight === null
      ? {}
      : JSON.parse(user.weight);
    if (pulse !== '') {
      if (newWeight[dateTime] !== undefined) {
        newWeight[dateTime] = { ...newWeight[dateTime], [time]: Number(weight) };
      } else {
        newWeight[dateTime] = { [time]: Number(weight) };
      }
    }
    const newTemp = user.temperature === null
      ? {}
      : JSON.parse(user.temperature);
    if (temp !== '') {
      if (newTemp[dateTime] !== undefined) {
        newTemp[dateTime] = { ...newTemp[dateTime], [time]: Number(temp) };
      } else {
        newTemp[dateTime] = { [time]: Number(temp) };
      }
    }
    const newbloodSugar = user.blood_sugar === null
      ? {}
      : JSON.parse(user.blood_sugar);
    if (bloodSugar !== '') {
      if (newbloodSugar[dateTime] !== undefined) {
        newbloodSugar[dateTime] = {
          ...newbloodSugar[dateTime],
          [time]: Number(bloodSugar),
        };
      } else {
        newbloodSugar[dateTime] = { [time]: Number(bloodSugar) };
      }
    }
    const newSystolic = user.systolic === null
      ? {}
      : JSON.parse(user.systolic);
    if (systolic !== '') {
      if (newSystolic[dateTime] !== undefined) {
        newSystolic[dateTime] = {
          ...newSystolic[dateTime],
          [time]: Number(systolic),
        };
      } else {
        newSystolic[dateTime] = { [time]: Number(systolic) };
      }
    }
    const newDiastolic = user.diastolic === null
      ? {}
      : JSON.parse(user.diastolic);
    if (diastolic !== '') {
      if (newDiastolic[dateTime] !== undefined) {
        newDiastolic[dateTime] = {
          ...newDiastolic[dateTime],
          [time]: Number(diastolic),
        };
      } else {
        newDiastolic[dateTime] = { [time]: Number(diastolic) };
      }
    }

    const url = `/user/${user.id}`;
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        user: {
          temp: JSON.stringify(newTemp),
          weight: JSON.stringify(newWeight),
          pulse: JSON.stringify(newPulse),
          blood_sugar: JSON.stringify(newbloodSugar),
          systolic: JSON.stringify(newSystolic),
          diastolic: JSON.stringify(newDiastolic),
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
        throw new Error('Network response was not ok.');
      }).then(data => {
        console.log(data);
        history.push(`/users/${history.location.state.user.name}`);
      }).catch(err => console.log(err));
  };
  return (
    <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
      <Form.Group controlId="formBasicWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Weight" onChange={changeWeight} />
      </Form.Group>
      <Form.Group controlId="formBasicBloodPressure">
        <Form.Label>Blood Pressure</Form.Label>
        <div style={{ display: 'flex' }}>
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
  );
};

AddStats.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    weight: PropTypes.string,
    pulse: PropTypes.string,
    temperature: PropTypes.string,
    blood_sugar: PropTypes.string,
    systolic: PropTypes.string,
    diastolic: PropTypes.string,
  }),
};

AddStats.defaultProps = {
  user: {
    name: '',
    id: 0,
    weight: '',
    pulse: '',
    temperature: '',
    blood_sugar: '',
    systolic: '',
    diastolic: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(AddStats);
