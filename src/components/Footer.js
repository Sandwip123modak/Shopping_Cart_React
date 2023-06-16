import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              tellus sit amet dui tempus aliquet.
            </p>
          </Col>
          <Col md={4}>
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">Email: info@example.com</p>
            <p className="footer-text">Phone: +1 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons icon">
              <a href="#" className="icon">
                <i className="fab fa-facebook">facebook</i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-twitter">twitter</i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-instagram">instagram</i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="footer-text">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
