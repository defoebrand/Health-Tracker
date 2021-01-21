import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useHistory } from 'react-router-dom';
import { updateUser } from '../redux/actions';

const Settings = ({ user, dispatch }) => {
  const history = useHistory();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

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
  const updateSettings = e => {
    if (password !== confirm) {
      alert("passwords don't match");
    } else {
      e.preventDefault();
      // const url = 'http://localhost:3000/user';
      // const url = 'https://obscure-island-28750.herokuapp.com/user';
      const url = '/user/settings/';
      fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
          user: {
            id: user.id,
            name,
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
          dispatch(updateUser(data.user));
          history.push('/');
        }).catch(err => console.log(err));
    }
  };
  return (
    <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
      <Form.Group controlId="formBasicName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="UserName" onChange={changeName} value={name} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={changeEmail} value={user.email} />
        <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={changePassword} value="" />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={confirmPassword} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={updateSettings}>
        Update Settings
      </Button>
    </Form>
  );
};

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

Settings.defaultProps = {
  user: {
    id: '',
    name: '',
    email: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(Settings);
