import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player';

import Particle from "../Particle";


const Player =() =>{ 

  return(
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">VIDEOS </strong>
        </h1>
        <p style={{ color: "white" }}>
          VIDEOS
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
 
            <ReactPlayer
            url="https://i.imgur.com/PHHhJ61.mp4"
            title="Wedding"
            width="100%"
            height="100%"           
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer
            url="https://i.imgur.com/LvrWIvX.mp4"
            title="Graduation"
            width="100%"
            height="100%"  
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer
            url="https://i.imgur.com/xoKuhDz.mp4"
            title="Graduation"
            width="100%"
            height="100%"   
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer
            url="https://i.imgur.com/GsfY5qc.mp4"
            title="Graduation"
            width="100%"
            height="100%"     
            controls={true}
            type="video/mp4"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ReactPlayer
            url="https://i.imgur.com/Be6hiGF.mp4"
            title="Graduation"
            width="100%"
            height="100%"        
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer
            url="https://i.imgur.com/cTJPBZE.mp4"
            title="Graduation"
            width="100%"
            height="100%"
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer    
            url="https://i.imgur.com/umuYGtT.mp4"
            title="Graduation"
            width="100%"
            height="100%"        
            controls={true}
            type="video/mp4"
            />

          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer 
            url='https://i.imgur.com/zHh9vvv.mp4'
            title="Wedding"
            width="100%"
            height="100%"   
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer 
            url="https://i.imgur.com/rGABoFs.mp4"
            width="100%"
            height="100%"
            controls={true}
            type="video/mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ReactPlayer 
            url="https://i.imgur.com/N8Dtnyd.mp4"
            width="100%"
            height="100%"
            controls={true}
            type="video/mp4"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Player;

