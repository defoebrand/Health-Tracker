import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { runSearch } from '../redux/actions';

const SignIn = ({ dispatch, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const goToRegister = () => {
    history.replace('/register');
  };

  const changeEmail = e => {
    setEmail(e.target.value);
  };
  const changePassword = e => {
    setPassword(e.target.value);
  };
  const submitSignIn = () => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user/login';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email,
          password,
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
        console.log('signindata', data);
        localStorage.token = data.auth_token;
        // localStorage.user = data.user;
        dispatch(runSearch(data.user.name));

        history.push('/');
      }).catch(err => console.log(err));
  };
  return (
    <Form className="SignInForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={changeEmail} />
        <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={changePassword} />
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

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string,
};

SignIn.defaultProps = {
  user: '',
};

export default connect(state => ({
  user: state.searchReducer.user,
}))(SignIn);

// export default SignIn;
