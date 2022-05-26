import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar className="nav-bg" variant="light" expand="lg" style = {{padding: "1.5vh 2vw"}}>
    <Navbar.Brand style = {{color:"#071736", fontWeight:"600"}} href="/">candid</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style = {{color:"#071736"}} href="/candid/projects">Projects</Nav.Link>
        <Nav.Link style = {{color:"#071736"}} href="/candid/team">Team</Nav.Link>
        <Nav.Link style = {{color:"#071736"}} href="/candid/resources">Resources</Nav.Link>
        <Nav.Link style = {{color:"#071736"}} href="/candid/blog">Blog</Nav.Link>

      </Nav>
    </Navbar.Collapse>
</Navbar>
        </header>
  )
}

export default Header