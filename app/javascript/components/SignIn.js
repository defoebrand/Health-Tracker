import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const goToRegister = () => {
    history.replace('/register');
  };
  const submitSignIn = () => {
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user';
    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => console.log(data)).catch(err => console.log(err));
  };
  return (
    <Form className="SignInForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We&aposll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitSignIn}>
        Submit
      </Button>
      <Button
        variant="primary"
        type="register"
        onClick={goToRegister}
      >
        Register
      </Button>
    </Form>
  );
};

export default SignIn;
