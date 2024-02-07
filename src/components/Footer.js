import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import React from "react";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import footericon1 from '../assets/img/footer-icon1.png';
import footericon2 from '../assets/img/footer-icon2.png';
import footericon3 from '../assets/img/footer-icon3.png';
import footericon4 from '../assets/img/footer-icon4.png';
import footericon5 from '../assets/img/footer-icon5.png';
import footericon6 from '../assets/img/footer-icon6.png';
import { MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={3} className='footerlogo'>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={3} className='text-center'>
            <div className="social-icon linksfooter">
              <h3>Links:</h3>
              <a href="#home"><img src={footericon1} alt="Icon" /></a>
              <a href="#values"><img src={footericon2} alt="Icon" /></a>
              <a href="#industries"><img src={footericon3} alt="Icon" /></a>
              <a href="#services"><img src={footericon4} alt="Icon" /></a>
              <a href="#lifecycle"><img src={footericon5} alt="Icon" /></a>
              <a href="#model"><img src={footericon6} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={3} className="text-center">
            <div className="social-icon socialiconsfooter">
              <h3>Follow Us Here:</h3>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={3} className="text-center">
            <div className="social-icon contactusfooter">
              <h3>Contact Us At:</h3>
              <p><MDBIcon icon="home" className="me-2" />XYZ, Karachi, Pakistan</p>
              <p><MDBIcon icon="envelope" className="me-2" />xyz@gmail.com</p>
              <p><MDBIcon icon="phone" className="me-2" />+92 xxx-xxxxxxx</p>
            </div>
          </Col>
          <hr className="hrline"/>
            <div className="mt-1">
              <p className="main-hero-para text-center"><i>© Copyright 2022. All Rights Reserved</i></p>
            </div>
        </Row>
      </Container>
    </footer>
  )
}