import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from "react";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.jpg";
import projImg13 from "../assets/img/project-img13.jpeg";
import projImg14 from "../assets/img/project-img14.jpg";
import projImg15 from "../assets/img/project-img15.jpg";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/project-img18.jpeg";
import projImg19 from "../assets/img/project-img19.jpg";
import projImg20 from "../assets/img/project-img20.jpeg";
import projImg21 from "../assets/img/project-img21.jpg";
import projImg22 from "../assets/img/project-img22.jpg";
import projImg23 from "../assets/img/project-img23.jpg";
import projImg24 from "../assets/img/project-img24.jpg";
import projImg25 from "../assets/img/project-img25.png";
import projImg26 from "../assets/img/project-img26.jpg";
import projImg27 from "../assets/img/project-img27.jpg";
import projImg28 from "../assets/img/project-img28.jpg";
import projImg29 from "../assets/img/project-img29.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Education",
      description: "We recognize the need for advanced solutions in higher education and help institutions become more cost competitive while leveraging technology effectively.",
      imgUrl: projImg1,
    },
    {
      title: "Government",
      description: "When maintaining modern infrastructures meets accelerating change, we provide government agencies with the support they need to keep costs low and citizens happy.",
      imgUrl: projImg2,
    },
    {
      title: "Healthcare",
      description: "Clinical care requires quality solutions. We offer healthcare organizations an integrated approach to EHR and ERP for improved efficiency and better patient care.",
      imgUrl: projImg3,
    },
    {
      title: "Nonprofit",
      description: "As a nonprofit partner, we understand the need to reduce administrative overhead and spend more time on your mission.",
      imgUrl: projImg4,
    },
    {
      title: "Transportation",
      description: "As a transportation & transit technology partner, we help government organizations modernize for greater efficiency.",
      imgUrl: projImg5,
    },
    {
      title: "Finance",
      description: "Whether you're focues on cost containment or customer retention, a fintech consulting service provider will align your goals with winning solutions.",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Application Research",
      imgUrl: projImg7,
    },
    {
      title: "MVP Development",
      imgUrl: projImg8,
    },
    {
      title: "Quality Assurance",
      imgUrl: projImg9,
    },
    {
      title: "Automation",
      imgUrl: projImg10,
    },
    {
      title: "Data Annotation",
      imgUrl: projImg11,
    },
    {
      title: "Data Analytics",
      imgUrl: projImg12,
    },
    {
      title: "Mobile Application",
      imgUrl: projImg13,
    },
    {
      title: "Full Stack Development",
      imgUrl: projImg14,
    },
    {
      title: "ERP Services",
      imgUrl: projImg15,
    },
    {
      title: "Business Intelligence",
      imgUrl: projImg16,
    },
    {
      title: "Business Risk Management",
      imgUrl: projImg17,
    },
    {
      title: "Executive Trainings",
      imgUrl: projImg18,
    },
  ];

  const projects3 = [
    {
      title: "Plan And Requirement",
      description: "The System Requirements Are Defined Such As Required Features, Functions And Capabilities.",
      imgUrl: projImg19,
    },
    {
      title: "Prototyping",
      description: "Xxx Team Develop Protypes Which Have Clear Understanding Of Functionality Of The End Product.",
      imgUrl: projImg20,
    },
    {
      title: "Development",
      description: "Product Is Developed Using Cutting Edge Technology And Using Best Industry Practises.",
      imgUrl: projImg21,
    },
    {
      title: "Testing & Valdiation",
      description: "Proper Quality Assurance Procedures Are Deployed To Test And Validate The Functionality Of The End Product As Needed By End Customers.",
      imgUrl: projImg22,
    },
    {
      title: "Deployment",
      description: "We Use CI/CD Tools To Integrate The Final Product To Production Environment.",
      imgUrl: projImg23,
    },
    {
      title: "Maintenance",
      description: "We Provide Support After Project Deployment And Changes Are Also Done As Needed By Customer.",
      imgUrl: projImg24,
    },
  ];

  const projects4 = [
    {
      title: "Staff Augmentation",
      description: "Clients Expand Their In-House Staff By Engaging Engineers From Xxx. Xxx Team Is 100% Dedicated, And Managed By Clients.",
      imgUrl: projImg25,
    },
    {
      title: "Project Based Economical Solutions",
      description: "Xxx Team Engage With Customers On Projects Based Agreed Timelines And KPIs.",
      imgUrl: projImg26,
    },
    {
      title: "Continous Improvement And Support",
      description: "We Provide Uniterrupted Support To Our End Customers On Shift Basis, Hourly Basis And Monthly BASIS Depending On Need.",
      imgUrl: projImg27,
    },
    {
      title: "Team Recruitment",
      description: "Alongwith Providing Solutions, Our Team Will Help In Recruiting Highly Skilled HR.",
      imgUrl: projImg28,
    },
    {
      title: "Consultancy Services",
      description: "Experts Engagement For Consultancy Services And Capacity Building.",
      imgUrl: projImg29,
    },
  ];

    return(
      <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <h2>Projects</h2> */}
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Industries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Our Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">System Development Lifecycle</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Partnership Model</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          projects4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
