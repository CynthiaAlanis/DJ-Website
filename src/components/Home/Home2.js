import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/pictures/Ray.jpg";
import Tilt from "react-parallax-tilt";
import { BsFacebook } from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md"
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Whether you're planning a birthday bash, a corporate extravaganza, or a special occasion that deserves a remarkable soundtrack, DJ Ray is here to transform your event into an unforgettable affair. So, let's collaborate, ignite the dance floor, and create memories that will be cherished forever.
            <br />
            <br />
            Pricing is straightforward and affordable, with a rate of <b className="purple"> $100 per hour,</b> making quality entertainment accessible for a wide range of events and budgets.
              <br />
              <br />
              Get in touch today and let's embark on a musical journey that will have everyone talking for years to come. 
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/djsharky5000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@raymondsanchez3231/featured"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/djray231/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/people/Raymond-Sanchez/pfbid0Nx1W6PDeRpFw5F1c8QGnVVPssMLPiq84gN296dFazvwKV85Sihmfz4vAsJ2xF6yxl/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
