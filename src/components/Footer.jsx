import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    //"bg-dark text-white text-center py-4 mt-4">
    <footer className="text-center py-4 mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">Prendas a partir de $1000</p>
            <p className="mb-0">Av. Sarmiento 39, San Vicente</p>
          </Col>
          <Col md={6}>
            <div>
              <a href="#" className="me-3"><i className="fa fa-facebook fa-2x"></i></a>
              <a href="#" className="me-3"><i className="fa fa-twitter fa-2x"></i></a>
              <a href="#"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;