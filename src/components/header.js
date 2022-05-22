import React from 'react'
import { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap'
import { NavDropdown} from 'react-bootstrap' //, Button , Container, 
import Scrollspy from 'react-scrollspy';

const Header = () => {
    const [show, setShow] = useState(false);
          
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
              <>
              <div style = {{position: "sticky", Width: "100vw", display:"flex", alignItems: "center", justifyContent:"right", backgroundColor:"#333C49"}}>
                <Button style = {{fontSize: "35px", padding: "5px 20px"}} variant="bg-transparent" onClick={handleShow}>
                    <i style = {{color:"#B55400"}} className='bi bi-list'></i>
                </Button>
                </div>
                <Offcanvas placement = {'end'} show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton style = {{backgroundColor: "#EEEEEE"}}>
                    <Offcanvas.Title style = {{backgroundColor: "#EEEEEE"}}>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body style = {{backgroundColor: "#EEEEEE"}}>
                  <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
                <li><a href="#section-1">section 1</a></li>
                <li><a href="#section-2">section 2</a></li>
                <li><a href="#section-3">section 3</a></li>
                </Scrollspy>
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            );
}

export default Header