import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    //bg="dark" variant="dark" expand="lg" className="mb-4"
    <Navbar expand="lg" className="custom-navbar mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            //"d-inline-block align-top me-2"
            className="logo-header"
          />
          <span> Feria americana San Vicente</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/Hombre" className="me-3">Hombre</Nav.Link>
          <Nav.Link as={Link} to="/Mujer" className="me-3">Mujer</Nav.Link>
          <Nav.Link as={Link} to="/Login" className="me-3">Login</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Administración
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
