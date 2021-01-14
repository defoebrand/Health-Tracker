import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const HeaderNav = () => (
  <div className="HeaderNav">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <h1>Hello</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Learning</Nav.Link>
        <NavDropdown title="Community" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Charity</NavDropdown.Item>
          {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sign in / Register</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" >Search</Button>
      </Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default HeaderNav;
