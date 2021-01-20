import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import { useHistory } from 'react-router-dom';

const Settings = ({ user }) => {
  // const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
      const url = '/user';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: {
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
          console.log(data);
          // localStorage.token = data.auth_token;
          // history.push('/');
        }).catch(err => console.log(err));
    }
  };
  return (
    <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="UserName" onChange={changeName} value={user.name} />
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
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

Settings.defaultProps = {
  user: {
    name: '',
    email: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(Settings);
