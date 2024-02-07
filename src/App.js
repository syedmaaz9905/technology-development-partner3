import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import HowItWorks from './HowItWorks';
import { Projects } from "./components/Projects";
import TrackVisibility from 'react-on-screen';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Chatbox } from './components/Chatbot'
import bgVideo from './video/bg-video2.mp4';
import { ArcherContainer, ArcherElement } from "react-archer";
import projImg1 from "./assets/img/project-img1.jpg";
import projImg2 from "./assets/img/project-img2.jpg";
import projImg3 from "./assets/img/project-img3.jpg";
import projImg4 from "./assets/img/project-img4.jpg";
import projImg5 from "./assets/img/project-img5.jpg";
import projImg6 from "./assets/img/project-img6.jpg";
import projImg7 from "./assets/img/project-img7.jpg";
import projImg8 from "./assets/img/project-img8.jpg";
import projImg9 from "./assets/img/project-img9.jpg";
import projImg10 from "./assets/img/project-img10.jpg";
import projImg11 from "./assets/img/project-img11.jpg";
import projImg12 from "./assets/img/project-img12.jpg";
import projImg13 from "./assets/img/project-img13.jpeg";
import projImg14 from "./assets/img/project-img14.jpg";
import projImg15 from "./assets/img/project-img15.jpg";
import projImg16 from "./assets/img/project-img16.jpg";
import projImg17 from "./assets/img/project-img17.jpg";
import projImg18 from "./assets/img/project-img18.jpeg";
import projImg25 from "./assets/img/project-img25.png";
import projImg26 from "./assets/img/project-img26.jpg";
import projImg27 from "./assets/img/project-img27.jpg";
import projImg28 from "./assets/img/project-img28.jpg";
import projImg29 from "./assets/img/project-img29.jpg";

// For Arrow ***********************
const rootStyle = { display: "flex", justifyContent: "center", margin: "50px" };
const boxStyle = { };

// *********************************

function App() {
  const [cards_industries] = useState([
    {
      title: 'Education',
      text: `We recognize the need for advanced solutions in higher education and help institutions become more cost competitive while leveraging technology effectively.`,
      imgUrl: projImg1,
    },
    {
      title: 'Government',
      text: `When maintaining modern infrastructures meets accelerating change, we provide government agencies with the support they need to keep costs low and citizens happy.`,
      imgUrl: projImg2,
    },
    {
      title: 'Healthcare',
      text: `Clinical care requires quality solutions. We offer healthcare organizations an integrated approach to EHR and ERP for improved efficiency and better patient care.`,
      imgUrl: projImg3,
    },
    {
      title: 'Nonprofit',
      text: `As a nonprofit partner, we understand the need to reduce administrative overhead and spend more time on your mission.`,
      imgUrl: projImg4,
    },
    {
      title: 'Transportation',
      text: `As a transportation & transit technology partner, we help government organizations modernize for greater efficiency.`,
      imgUrl: projImg5,
    },
    {
      title: 'Finance',
      text: `Whether you're focues on cost containment or customer retention, a fintech consulting service provider will align your goals with winning solutions.`,
      imgUrl: projImg6,
    }
  ])
  const [cards_services] = useState([
    {
      title: 'Application Research',
      imgUrl: projImg7,
    },
    {
      title: 'MVP Development',
      imgUrl: projImg8,
    },
    {
      title: 'Quality Assurance',
      imgUrl: projImg9,
    },
    {
      title: 'Automation',
      imgUrl: projImg10,
    },
    {
      title: 'Data Annotation',
      imgUrl: projImg11,
    },
    {
      title: 'Data Analytics',
      imgUrl: projImg12,
    },
    {
      title: 'Mobile Application',
      imgUrl: projImg13,
    },
    {
      title: 'Full Stack Development',
      imgUrl: projImg14,
    },
    {
      title: 'ERP Services',
      imgUrl: projImg15,
    },
    {
      title: 'Business Intelligence',
      imgUrl: projImg16,
    },
    {
      title: 'Business Risk Management',
      imgUrl: projImg17,
    },
    {
      title: 'Executive Trainings',
      imgUrl: projImg18,
    }
  ])
  const [cards_partnershipmodel] = useState([
    {
      title: 'Staff Augmentation',
      text: `Clients Expand Their In-House Staff By Engaging Engineers From Xxx. Xxx Team Is 100% Dedicated, And Managed By Clients.`,
      imgUrl: projImg25,
    },
    {
      title: 'Project Based Economical Solutions',
      text: `Xxx Team Engage With Customers On Projects Based Agreed Timelines And KPIs.`,
      imgUrl: projImg26,
    },
    {
      title: 'Continous Improvement And Support',
      text: `We Provide Uniterrupted Support To Our End Customers On Shift Basis, Hourly Basis And Monthly BASIS Depending On Need.`,
      imgUrl: projImg27,
    },
    {
      title: 'Team Recruitment',
      text: `Alongwith Providing Solutions, Our Team Will Help In Recruiting Highly Skilled HR.`,
      imgUrl: projImg28,
    },
    {
      title: 'Consultancy Services',
      text: `Experts Engagement For Consultancy Services And Capacity Building.`,
      imgUrl: projImg29,
    }
  ])
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Technology Development Partner</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="your technology development partner" />
      </Helmet>
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <NavBar />
      <Banner />
      <HowItWorks />
      <section className='imagecards' id='industries'>
        <div className='cardboxes'>
          <h1 className='cardsh1'>Industries</h1>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className='cards'>
                  {
                    cards_industries.map((card, i) => (
                      <div key={i} className='card'>
                        <div className='imgbx'>
                          <img src={ card.imgUrl } />
                          <div className="txtx">
                            <h3>{ card.title }</h3>
                            <p>{ card.text }</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>}
          </TrackVisibility>
        </div>
      </section>
      <section className='imagecards' id='services'>
        <div className='cardboxes'>
        <h1 className='cardsh1'>Our Services</h1>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className='cards'>
                {
                  cards_services.map((card, i) => (
                    <div key={i} className='card'>
                      <div className='imgbx'>
                          <img src={ card.imgUrl } />
                          <div className="txtx">
                            <h3>{ card.title }</h3>
                            <p>{ card.text }</p>
                          </div>
                        </div>
                    </div>
                  ))
                }
                </div>
              </div>}
          </TrackVisibility>
        </div>
      </section>
      <section className='arrows' id='lifecycle'>
          <h1 className='cardsh1'>System Development Lifecycle</h1>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div style={{ margin: "50px" }}>
                <ArcherContainer strokeColor="#e5aa70">
                    <div style={rootStyle}>
                      <ArcherElement
                          id="root"
                          relations={[
                            {
                                targetId: "1",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { strokeColor: '#3dcd58' },
                              },
                          ]}
                        >
                        <div className='boxes' style={boxStyle}><b>Plan And Requirement :</b><br></br> The System Requirements Are Defined Such As Required Features, Functions And Capabilities.</div>
                      </ArcherElement>
                    </div>
                    <div style={rootStyle}>
                      <ArcherElement
                        id="1"
                        relations={[{
                          targetId: "2",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                          style: { strokeColor: '#3dcd58' },
                        },
                      ]}
                      >
                        <div className='boxes' style={boxStyle}><b>Prototyping :</b><br></br> Xxx Team Develop Protypes Which Have Clear Understanding Of Functionality Of The End Product.</div> 
                      </ArcherElement>
                    </div>
                    <div style={rootStyle}>
                      <ArcherElement
                        id="2"
                        relations={[{
                          targetId: "3",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                          style: { strokeColor: '#3dcd58' },
                        },
                      ]}
                      >
                        <div className='boxes' style={boxStyle}><b>Development :</b><br></br> Product Is Developed Using Cutting Edge Technology And Using Best Industry Practises.</div> 
                      </ArcherElement>
                    </div>
                    <div style={rootStyle}>
                      <ArcherElement
                        id="3"
                        relations={[{
                          targetId: "4",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                          style: { strokeColor: '#3dcd58' },
                        },
                      ]}
                      >
                        <div className='boxes' style={boxStyle}><b>Testing & Valdiation :</b><br></br> Proper Quality Assurance Procedures Are Deployed To Test And Validate The Functionality Of The End Product As Needed By End Customers.</div> 
                      </ArcherElement>
                    </div>
                    <div style={rootStyle}>
                      <ArcherElement
                        id="4"
                        relations={[{
                          targetId: "5",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                          style: { strokeColor: '#3dcd58' },
                        },
                      ]}
                        >
                          <div className='boxes' style={boxStyle}><b>Deployment :</b><br></br> We Use CI/CD Tools To Integrate The Final Product To Production Environment.</div> 
                        </ArcherElement>
                      </div>
                      <div style={rootStyle}>
                        <ArcherElement
                          id="5"
                          relations={[{
                            targetId: "6",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                          style: { strokeColor: '#3dcd58' },
                        },
                      ]}
                      >
                        <div className='boxes' style={boxStyle}><b>Maintenance :</b><br></br> We Provide Support After Project Deployment And Changes Are Also Done As Needed By Customer.</div> 
                      </ArcherElement>
                    </div>
                  </ArcherContainer>
                </div>  
              </div>}
          </TrackVisibility>
      </section>
      <section className='imagecards' id='model'>
        <div className='cardboxes'>
          <h1 className='cardsh1'>Partnership Model</h1>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className='cards'>
            {
              cards_partnershipmodel.map((card, i) => (
                <div key={i} className='card'>
                  <div className='imgbx'>
                    <img src={ card.imgUrl } />
                    <div className="txtx">
                      <h3>{ card.title }</h3>
                      <p>{ card.text }</p>
                    </div>
                  </div>
                </div>
                ))
              }
              </div>
              </div>}
          </TrackVisibility>
          
        </div>
      </section>
      {/* <Projects /> */}
      <Contact />
      <Chatbox />
      <Footer />
    </div>
  );
}

export default App;