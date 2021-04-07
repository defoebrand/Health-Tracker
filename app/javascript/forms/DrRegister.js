import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createDoctor } from '../redux/thunks/users';

import { updateUser } from '../redux/actions';

const DrRegister = ({ dispatch }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');
  const [memory, setMemory] = useState(true);

  const changeMemory = () => {
    setMemory(!memory);
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
    setConfirm(e.target.value);
  };

  const gotToSignIn = () => {
    history.push('/signin');
  };

  const submitRegister = e => {
    if (password !== confirm) {
      setError('Passwords Do Not Match');
      setFailedMessage('displayMessage');
    } else {
      e.preventDefault();
      dispatch(createDoctor(name, email, password)).then(({ token, user }) => {
        if (memory === true) {
          localStorage.token = token;
        } else {
          sessionStorage.token = token;
        }
        try {
          dispatch(updateUser(user));
        } catch {
          throw new Error('Failed to Register. Please try again.');
        }
        history.replace('/');
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
    }
  };

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Form className="formBox">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="UserName" onChange={changeName} />
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
          className="mar-L-15"
        >
          Sign In
        </Button>
      </Form>
    </>
  );
};

DrRegister.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(DrRegister);
