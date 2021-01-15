import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const AddStats = () => {
  const history = useHistory();
  const [temp, setTemp] = useState('');
  const [pulse, setPulse] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');

  const changeTemp = e => {
    setTemp(e.target.value);
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
    const { token } = localStorage;
    const date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${months[date.getMonth()]}${date.getDate()}`;
    let time;
    if (date.getHours() > 12) {
      time = `${date.getHours() - 9}p`;
    } else {
      time = `${date.getHours()}a`;
    }
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const newPulse = JSON.parse(history.location.state.user.pulse);
    console.log(newPulse[formattedDate]);
    if (newPulse[formattedDate] !== undefined) {
      newPulse[formattedDate] = { ...newPulse[formattedDate], [time]: Number(pulse) };
    } else {
      newPulse[formattedDate] = { [time]: Number(pulse) };
    }

    console.log(systolic);
    console.log(diastolic);
    const url = '/user/18';
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        user: {
          temp,
          pulse: JSON.stringify(newPulse),
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
    <Form className="SignInForm">
      <Form.Group controlId="formBasicBloodPressure">
        <Form.Label>Blood Pressure</Form.Label>
        <div style={{ display: 'flex' }}>
          <Form.Control style={{ width: '50%' }} type="systolic" placeholder="Systolic" onChange={changeSystolic} />
          <Form.Control style={{ width: '50%' }} type="diastolic" placeholder="Diastolic" onChange={changeDiastolic} />
        </div>
      </Form.Group>
      <Form.Group controlId="formBasicTemp">
        <Form.Label>Temperature</Form.Label>
        <Form.Control type="temp" placeholder="Temperature" onChange={changeTemp} />
      </Form.Group>
      <Form.Group controlId="formBasicPulse">
        <Form.Label>Pulse</Form.Label>
        <Form.Control type="pulse" placeholder="Pulse" onChange={changePulse} />
      </Form.Group>
      <Form.Group controlId="formBasicBloodSugar">
        <Form.Label>Blood Sugar</Form.Label>
        <Form.Control type="bloodsugar" placeholder="BloodSugar" onChange={changeBloodSugar} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitRegister}>
        Submit
      </Button>
    </Form>
  );
};

export default AddStats;
