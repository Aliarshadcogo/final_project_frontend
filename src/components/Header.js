import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap"
import{Link} from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <Link to="/">
        <Navbar.Brand>Blogger</Navbar.Brand>
        
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>
                Sign-up
              </Nav.Link>
            </LinkContainer>
            
        </Nav>

         </Navbar.Collapse> 
        </Container>
       
      </Navbar>
    </header>
  );
};

export default Header;
