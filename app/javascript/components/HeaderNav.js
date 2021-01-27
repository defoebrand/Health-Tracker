import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  updateUser, signOutUser,
} from '../redux/actions';

const fetch = require('node-fetch');

const HeaderNav = ({ dispatch, user }) => {
  const doctor = 'list';
  const history = useHistory();

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    if (user.name === '') {
      history.push('/home');
    } else {
      history.push(`/users/${user.name}`);
    }
  }, [user]);

  useEffect(() => {
    const url = '/session';
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => (
        response.ok
          ? response.json()
          : null
      )).then(data => {
        dispatch(updateUser(data));
      }).catch(err => {
        if (err) {
          history.replace('/home');
        }
      });
  }, [history]);

  const clickSignOut = () => {
    dispatch(signOutUser({ name: '' }));
    localStorage.token = '';
  };

  const clickAccount = () => {
    if (user.name !== '') {
      history.push('/settings');
    } else {
      history.push('/register');
    }
  };

  const clickLink = e => {
    history.push(`/${e.target.id}`);
  };

  const signedIn = (user.name !== ''
    ? (
      <div className="userName flex">
        <Nav.Link id={`users/${user.name}`} onClick={clickLink}>{user.name}</Nav.Link>
        <Nav.Link className="signOutBtn" onClick={clickSignOut}>Sign out</Nav.Link>
      </div>
    )
    : (
      <div className="signInBtn flex-wrap">
        <Button variant="outline-success" className="userSignIn" id="signin" onClick={clickLink}>Sign In</Button>
        <div className="flex">
          <p style={{ margin: 0, alignSelf: 'center' }}>Not a member?</p>
          <Nav.Link className="mar-L-10" id="register" onClick={clickLink}>Register Now!</Nav.Link>
        </div>
      </div>
    )
  );
  return (
    <div className="HeaderNav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={clickLink} style={{ cursor: 'pointer' }}>
          <h2 id="home">Health Tracker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {signedIn}
            <Nav.Link onClick={clickLink} id="sick-call">Sick Call</Nav.Link>
            <Nav.Link onClick={clickLink} id="resources">Resources</Nav.Link>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <div className="dropdownLinks">
                <NavDropdown.Item className="text-center p-1" id={`doctors/${doctor}`} onClick={clickLink}>Doctors</NavDropdown.Item>
                <NavDropdown.Item className="text-center p-1" id="friends" onClick={clickLink}>Friends</NavDropdown.Item>
                <NavDropdown.Item className="text-center" style={{ borderLeft: '1px solid gray' }} onClick={clickAccount}>My Account</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {user.name && <Nav.Link className="bigScreenSignOutBtn" onClick={clickSignOut}>Sign out</Nav.Link>}
      </Navbar>
    </div>
  );
};

HeaderNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

HeaderNav.defaultProps = {
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(HeaderNav);
