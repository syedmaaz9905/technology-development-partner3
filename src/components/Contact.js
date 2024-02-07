import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contactImgg from "../assets/img/contact-img.png";
import 'animate.css';
import React from "react";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="form">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility id='contactpic'>
              {({ isVisible }) =>
                <div className="contactpic">
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImgg} alt="Contact Us"/>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="cardp">Contact Form</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.companyName} placeholder="Company Name" onChange={(e) => onFormUpdate('companyName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select type="text" value={formDetails.jobRole} placeholder="Job Role" onChange={(e) => onFormUpdate('jobRole', e.target.value)}>
                        <option value="">Job Role</option>
                        <option value="Front-end">Front-end Developer</option>
                        <option value="Back-end">Back-end Developer</option>
                      </select>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.city} placeholder="City" onChange={(e) => onFormUpdate('city', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.state} placeholder="State/Region" onChange={(e) => onFormUpdate('state', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select type="text" value={formDetails.country} placeholder="Country" onChange={(e) => onFormUpdate('country', e.target.value)}>
                        <option value="">Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bosnia">Bosnia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Canada">Canada</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine State">Palestine State</option>
                        <option value="Panama ">Panama</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Norway">Norway</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Sudan">Sudan</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Spain">Spain</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select type="text" value={formDetails.industrySimplified} placeholder="Industry - Simplified" onChange={(e) => onFormUpdate('industrySimplified', e.target.value)}>
                        <option value="">Industry - Simplified</option>
                        <option value="DOW">DOW University</option>
                        <option value="Karachi">Karachi University</option>
                        <option value="NED">NED University</option>
                        <option value="SirSyed">SirSyed University</option>
                        <option value="Bahria">Bahria University</option>
                      </select>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select type="text" value={formDetails.employees} placeholder="No. Of Employees" onChange={(e) => onFormUpdate('employees', e.target.value)}>
                        <option value="">No. Of Employees</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <select type="text" value={formDetails.help} placeholder="How Can We Help You?" onChange={(e) => onFormUpdate('help', e.target.value)}>
                        <option value="">How Can We Help You?</option>
                        <option value="Role">About Role</option>
                        <option value="Salary">About Salary</option>
                        <option value="Position">About Position</option>
                      </select>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.comments} placeholder="Comments..." onChange={(e) => onFormUpdate('comments', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}