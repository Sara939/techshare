import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';


function Navheader() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fix>
            <Navbar.Brand href="/"><Logo size="130px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link className="h5 mb-4" style={{ fontWeight: '600' , color: 'white'}} href="/">HOME</Nav.Link>
                  <Nav.Link  className="h5 mb-4" style={{ fontWeight: '600' , color: 'white'}} href="/Aboutus">ABOUT US</Nav.Link>
                  <Nav.Link className="h5 mb-4" style={{ fontWeight: '600' , color: 'white'}} href="/Channels">CHANNELS</Nav.Link>
                  <Nav.Link className="h5 mb-4" style={{ fontWeight: '600' , color: 'white'}} href="/TopChart">INFO TABLE</Nav.Link>
                  <Nav.Link className="h5 mb-4" style={{ fontWeight: '600' , color: 'white'}} href="/Addchannel">ADD CHANNEL</Nav.Link>
                  <NavDropdown
                    title="Users Info"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ fontWeight: '600'}}
                  >
                    <NavDropdown.Item style={{ fontWeight: '600'}} href="/Myprofile">PROFILE</NavDropdown.Item>
                    <NavDropdown.Item style={{ fontWeight: '600'}}  href="/Login">
                      LOGIN
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item style={{ fontWeight: '600'}} href="/Signup">
                      SIGN UP
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="BY NAME OR SUBJECT"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  {/* <Button variant="outline-success">SEARCH  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

    

export default Navheader;