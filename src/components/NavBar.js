import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import navIcon1 from '../assets/img/nav-icon1.png';
import React from "react";
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    
    return (
        <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><MDBIcon icon="home" className="me-2" />Home</Nav.Link>
                  <Nav.Link href="#values" className={activeLink === 'values' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('values')}><MDBIcon icon="gem" className="me-2" />Values</Nav.Link>
                  <Nav.Link href="#industries" className={activeLink === 'industries' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('industries')}><MDBIcon icon="toolbox" className="me-2" />Industries</Nav.Link>
                  <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}><MDBIcon icon="cogs" className="me-2" />Services</Nav.Link>
                  <Nav.Link href="#lifecycle" className={activeLink === 'lifecycle' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('lifecycle')}><MDBIcon icon="recycle" className="me-2" />Lifecycle</Nav.Link>
                  <Nav.Link href="#model" className={activeLink === 'model' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('model')}><MDBIcon icon="hands-helping" className="me-2" />Model</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  {/* <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>handshake
                    <a href="#"><img src={navIcon3} alt="" /></a>
                  </div> */}
                  {/* <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                  </HashLink> */}
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )
    }
