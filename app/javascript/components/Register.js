import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const handleClick = () => {
    history.replace('/signin');
  };

  return (
    <Form className="SignInForm">
      <Form.Group controlId="formBasicPassword">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="UserName" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We&aposll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Age" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Height</Form.Label>
        <Form.Control type="height" placeholder="Height" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="weight" placeholder="Weight" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="signin" onClick={handleClick}>
        Sign In
      </Button>
    </Form>
  );
};

export default Register;
