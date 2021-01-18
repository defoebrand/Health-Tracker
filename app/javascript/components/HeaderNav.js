import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useHistory } from 'react-router-dom';

import { runSearch } from '../redux/actions';

const HeaderNav = ({ dispatch, user }) => {
  const doctor = 'Dr. Defoe';
  const history = useHistory();
  useEffect(() => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
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
        dispatch(runSearch(data.name));
      }).catch(err => console.log(err));
  }, []);
  useEffect(() => {
    if (user === '') {
      history.push('/home');
    } else {
      history.push(`/users/${user}`);
    }
  }, [user]);

  const signedIn = (user !== ''
    ? (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav.Link onClick={() => history.push(`/users/${user}`)}>{user}</Nav.Link>
        <Nav.Link className="signOutBtn" onClick={() => { dispatch(runSearch('')); localStorage.token = ''; }}>Sign out</Nav.Link>
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
        <Navbar.Brand onClick={() => history.replace('/home')} style={{ cursor: 'pointer' }}>
          <h2>Health Tracker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {signedIn}
            <Nav.Link onClick={() => history.replace('/sick-call')}>Sick Call</Nav.Link>
            <Nav.Link onClick={() => history.replace('/learning')}>Learning</Nav.Link>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <div style={{
                display: 'flex', justifyContent: 'space-around', minWidth: 300, maxWidth: '85vw', margin: '0 auto',
              }}
              >

                <NavDropdown.Item style={{ textAlign: 'center', padding: '5px 0' }} onClick={() => history.replace(`/doctors/${doctor}`)}>Doctors</NavDropdown.Item>
                <NavDropdown.Item style={{ textAlign: 'center', padding: '5px 0' }} onClick={() => history.replace('/friends')}>Friends</NavDropdown.Item>
                <NavDropdown.Item style={{ borderLeft: '1px solid gray', textAlign: 'center' }} onClick={() => history.replace('/settings')}>My Account</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="bigScreenSignOutBtn" onClick={() => { dispatch(runSearch('')); localStorage.token = ''; }}>Sign out</Nav.Link>
      </Navbar>
    </div>
  );
};

HeaderNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string,
};

HeaderNav.defaultProps = {
  user: '',
};

export default connect(state => ({
  user: state.searchReducer.user,
}))(HeaderNav);
