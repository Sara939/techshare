import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderOut(){

 
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">TechShare</Navbar.Brand>
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default HeaderOut;