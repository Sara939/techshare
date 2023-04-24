import React from "react";
import {signOut} from 'firebase/auth';
import { auth} from '../../../context/usercontext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../featurs/Logo/Logo";


function Header(){
    const handleClickOut= () => {
        signOut(auth)
        .then(() => {
            console.log("the user sign out", auth);
        })
    }

    return(
        <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TechShare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Aboutus">About Us</Nav.Link>
            <NavDropdown title="Channels" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Channels">All Channels</NavDropdown.Item>
              <NavDropdown.Item href="/Addchannel">
                Add Channel
              </NavDropdown.Item>
              <NavDropdown.Item href="/Topchart">Deletion table</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleClickOut} href="/">
             Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    ) 
}

export default Header;