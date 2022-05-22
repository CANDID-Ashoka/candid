import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#C6D8D3"}}>
      <Container>
  <Navbar.Brand style={{fontFamily:"Raleway, sans-serif", fontSize: "25px", fontWeight:600, color: "#0d1b2e"}} href="/">CANDID</Navbar.Brand>
<Navbar.Toggle style={{color: "#0d1b2e"}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse style={{color: "#0d1b2e"}} id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link style={{color: "#0d1b2e"}} href="/research">Research</Nav.Link>
      <Nav.Link style={{color: "#0d1b2e"}}href="/publications">Publications</Nav.Link>
      <Nav.Link style={{color: "#0d1b2e"}} href="/team">Team</Nav.Link>
      <Nav.Link style={{color: "#0d1b2e"}} href="/blog">Blog</Nav.Link>
    </Nav>
  </Navbar.Collapse> 
  </Container>
</Navbar>
</>
  )
}

export default Header