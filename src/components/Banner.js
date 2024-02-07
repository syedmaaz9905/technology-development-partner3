import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import headerImg from "../assets/img/header-imgg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Technology Development Partner", "Technology Development Partner", "Technology Development Partner" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router>
      <section className="banner" id="home">
          <Container>
              <Row className="aligh-items-center">
                  <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                      {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                              {/* <span className="tagline">Welcome To Your Technology Development Partner</span> */}
                              <h1>{'Your '} <span className="txt-rotate" dataPeriod="250" data-rotate='[ "Technology Development Partner", "Technology Development Partner", "Technology Development Partner" ]'><span className="wrap">{text}</span></span></h1>
                              <p>We Help Our Customers To Succeed In Digital Transformation Initiatives With Solutions Deigned To Increase Efficieny & Optimize The Value Of Technology Investments.</p>
                              <HashLink to='#form'>
                                <button onClick={() => console.log('form')}>Let's Connect<ArrowRightCircle size={27}/></button>
                              </HashLink>
                          </div>}
                      </TrackVisibility>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <TrackVisibility>
                          {({ isVisible }) =>
                              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                  <img src={headerImg} alt="Header Img" />
                              </div>}
                      </TrackVisibility>
                  </Col>
              </Row>
          </Container>
      </section>
    </Router>
  )
}