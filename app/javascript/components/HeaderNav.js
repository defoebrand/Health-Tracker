import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useHistory } from 'react-router-dom';

const HeaderNav = () => {
  const user = 'Brandon';
  const doctor = 'Dr. Defoe';
  const history = useHistory();
  useEffect(() => {
    history.push('/home');
  }, []);

  // useEffect(() => {
  //   // const url = 'http://localhost:3000/user';
  //   const url = 'https://obscure-island-28750.herokuapp.com/user';
  //   // const url = '/user';

  //   fetch(url, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Network response was not ok.');
  //     }).then(data => console.log(data)).catch(err => console.log(err));
  // }, []);

  return (
    <div className="HeaderNav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.replace('/home')}>
          <h2>Health Tracker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            { user !== ''
              ? <Nav.Link onClick={() => history.replace(`/users/${user}`)}>{user}</Nav.Link>
              : (
                <>
                  <Button variant="outline-success" style={{ width: 75, whiteSpace: 'nowrap' }} onClick={() => history.replace('/signin')}>Sign In</Button>
                  <Nav.Link onClick={() => history.replace('/register')}>Register Now!</Nav.Link>
                </>
              )}
            <Nav.Link onClick={() => history.replace('/sick-call')}>Sick Call</Nav.Link>
            <Nav.Link onClick={() => history.replace('/learning')}>Learning</Nav.Link>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => history.replace(`/doctors/${doctor}`)}>Doctors</NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.replace('/friends')}>Friends</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => history.replace('/settings')}>My Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
