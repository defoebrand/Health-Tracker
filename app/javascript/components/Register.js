import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [age, setAge] = useState('');
  const [dob, setDOB] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [memory, setMemory] = useState(true);

  const changeMemory = () => {
    setMemory(!memory);
  };
  const gotToSignIn = () => {
    history.push('/signin');
  };
  const changeName = e => {
    setName(e.target.value);
  };
  const changeEmail = e => {
    setEmail(e.target.value);
  };
  const changePassword = e => {
    setPassword(e.target.value);
  };
  const confirmPassword = e => {
    if (password === e.target.value) {
      setConfirm(true);
    }
  };
  const changeAge = e => {
    setAge(e.target.value);
  };
  const changeHeight = e => {
    setHeight(e.target.value);
  };
  const changeWeight = e => {
    setWeight(e.target.value);
  };
  const changeDate = e => {
    const birthdate = new Date(e.target.value);
    const cur = new Date();
    const years = Math.floor((cur - birthdate) / 31557600000);
    setDOB(birthdate);
    setAge(years);
  };
  const submitRegister = e => {
    if (confirm !== true) {
      alert("passwords don't match");
    } else {
      e.preventDefault();
      // const url = 'http://localhost:3000/user';
      // const url = 'https://obscure-island-28750.herokuapp.com/user';
      const url = '/user';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
            dob,
            age,
            height,
            weight,
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
          if (memory === true) {
            localStorage.token = data.token;
          } else {
            sessionStorage.token = data.token;
          }
          history.replace('/');
        }).catch(err => console.log(err));
    }
  };
  return (
    <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="UserName" onChange={changeName} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={changeEmail} />
        <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={changePassword} />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={confirmPassword} />
      </Form.Group>
      <Form.Group controlId="formBasicDOB">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="dob" onChange={changeDate} />
      </Form.Group>
      <Form.Group controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Age" onChange={changeAge} value={age} />
      </Form.Group>
      <Form.Group controlId="formBasicHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control type="height" placeholder="Height" onChange={changeHeight} />
      </Form.Group>
      <Form.Group controlId="formBasicWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="weight" placeholder="Weight" onChange={changeWeight} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" defaultChecked onChange={changeMemory} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitRegister}>
        Submit
      </Button>
      <Button
        variant="primary"
        type="signin"
        onClick={gotToSignIn}
        style={{ marginLeft: 15 }}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default Register;
