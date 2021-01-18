import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const gotToSignIn = () => {
    history.replace('/signin');
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
    setAge(years);
  };
  const submitRegister = e => {
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
        localStorage.token = data.auth_token;
        history.replace('/');
      }).catch(err => console.log(err));
  };
  return (
    <Form className="SignInForm" style={{ margin: '25px 0' }}>
      <Form.Group controlId="formBasicPassword">
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
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{ marginRight: 5 }}>D.O.B.</Form.Label>
        <input type="date" onChange={changeDate} />
        <br />
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Age" onChange={changeAge} value={age} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Height</Form.Label>
        <Form.Control type="height" placeholder="Height" onChange={changeHeight} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="weight" placeholder="Weight" onChange={changeWeight} />
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
