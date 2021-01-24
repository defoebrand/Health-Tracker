import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { updateUser } from '../redux/actions';

const SignIn = ({ dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [memory, setMemory] = useState(true);
  const [status, setStatus] = useState(false);
  const [failedMessage, setFailedMessage] = useState({ display: 'none' });
  const [error, setError] = useState('');

  const displayMessage = {
    display: 'block',
    textAlign: 'center',
    marginTop: 10,
  };

  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  const changeMemory = () => {
    setMemory(!memory);
  };

  const changeStatus = () => {
    setStatus(!status);
  };

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const submitSignIn = e => {
    e.preventDefault();
    const url = status === false ? '/user/login' : '/user/doctor';
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
        throw new Error('Network Response Failed.');
      }).then(({ token, user }) => {
        if (memory === true) {
          localStorage.token = token;
        } else {
          sessionStorage.token = token;
        }
        try {
          dispatch(updateUser(user));
        } catch {
          throw new Error('Failed Login. Please Try Again');
        }
        history.replace('/');
      }).catch(err => {
        setError(err.message);
        setFailedMessage(displayMessage);
      });
  };

  return (
    <>
      <h3 style={failedMessage}>{error}</h3>
      <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="I am a Doctor"
          onChange={changeStatus}
        />
        <br />
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
          <Form.Check type="checkbox" label="Remember Me" defaultChecked onChange={changeMemory} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitSignIn}>
          Submit
        </Button>
        <Button
          variant="primary"
          type="register"
          onClick={goToRegister}
          style={{ marginLeft: 15 }}
        >
          Register
        </Button>
      </Form>
    </>
  );
};

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  user: state.userReducer.user,
}))(SignIn);
