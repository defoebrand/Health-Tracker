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
  updateUser, allCommunities, allDoctors, signOutUser,
} from '../redux/actions';

const fetch = require('node-fetch');

const HeaderNav = ({ dispatch, user }) => {
  const doctor = 'list';
  const history = useHistory();
  const clickAccount = () => {
    if (user.name !== '') {
      history.push('/settings');
    } else {
      history.push('/register');
    }
  };
  useEffect(() => {
    const url = '/user';
    const { token } = localStorage;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        dispatch(updateUser(data));
      }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const url = '/user/communities';
    fetch(url, {
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
        dispatch(allCommunities(data));
      }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (user.name === '') {
      history.replace('/home');
    } else {
      history.push(`/users/${user.name}`);
    }
  }, [user]);
  useEffect(() => {
    const url = '/user/doctors';
    fetch(url, {
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
        dispatch(allDoctors(data.doctors));
      }).catch(err => console.log(err));
  }, []);

  const signedIn = (user.name !== ''
    ? (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav.Link onClick={() => history.push(`/users/${user.name}`)}>{user.name}</Nav.Link>
        <Nav.Link className="signOutBtn" onClick={() => { dispatch(signOutUser({ name: '' })); localStorage.token = ''; }}>Sign out</Nav.Link>
      </div>
    )
    : (
      <div className="signInBtn">
        <Button variant="outline-success" style={{ width: 75, whiteSpace: 'nowrap' }} onClick={() => history.push('/signin')}>Sign In</Button>
        <div style={{ display: 'flex' }}>
          <p style={{ margin: 0, alignSelf: 'center' }}>Not a member?</p>
          <Nav.Link style={{ marginLeft: 10 }} onClick={() => history.push('/register')}>Register Now!</Nav.Link>
        </div>
      </div>
    )
  );

  return (
    <div className="HeaderNav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.push('/home')} style={{ cursor: 'pointer' }}>
          <h2>Health Tracker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {signedIn}
            <Nav.Link onClick={() => history.push('/sick-call')}>Sick Call</Nav.Link>
            <Nav.Link onClick={() => history.push('/resources')}>Resources</Nav.Link>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <div style={{
                display: 'flex', justifyContent: 'space-around', minWidth: 300, maxWidth: '85vw', margin: '0 auto',
              }}
              >

                <NavDropdown.Item style={{ textAlign: 'center', padding: '5px 0' }} onClick={() => history.push(`/doctors/${doctor}`)}>Doctors</NavDropdown.Item>
                <NavDropdown.Item style={{ textAlign: 'center', padding: '5px 0' }} onClick={() => history.push('/friends')}>Friends</NavDropdown.Item>
                <NavDropdown.Item style={{ borderLeft: '1px solid gray', textAlign: 'center' }} onClick={clickAccount}>My Account</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {user.name !== ''
          ? <Nav.Link className="bigScreenSignOutBtn" onClick={() => { dispatch(signOutUser({ name: '' })); localStorage.token = ''; }}>Sign out</Nav.Link>
          : null}
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
