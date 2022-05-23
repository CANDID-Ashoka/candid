import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg = "transparent" variant="light" expand="lg" style = {{padding: "1vh 2vw"}}>
    <Navbar.Brand style = {{color:"#071736", fontWeight:"600"}} href="#home">candid</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style = {{color:"#071736"}} href="#home">Home</Nav.Link>
        <Nav.Link style = {{color:"#071736"}} href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
        </header>
  )
}

export default Header