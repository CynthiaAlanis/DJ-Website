import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player';
import Particle from "../Particle";
import halloweenV from "../../Assets/Projects/videos/halloween.mp4";
import schoolV from "../../Assets/Projects/videos/school.mp4";
import birthday from "../../Assets/Projects/videos/Birthday.mp4";
import GradV from "../../Assets/Projects/videos/Grad.mp4";
import GradV2 from "../../Assets/Projects/videos/grad2.mp4";
import GradV3 from "../../Assets/Projects/videos/Grad3.mp4";
import wedding1 from "../../Assets/Projects/videos/wedding.mp4";
import fifteen from "../../Assets/Projects/videos/15th.mp4"
function Videos() { 

  return (
    
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
            url={wedding1}
            title="Wedding"
            width="100%"
            height="100%"
            controls
        />
          </Col>

          <Col md={4} className="project-card">

          <ReactPlayer
            url={halloweenV}
            title="Halloween"
            width="100%"
            height="100%"
            controls
        />
          </Col>

          <Col md={4} className="project-card">
          <ReactPlayer
            url={schoolV}
            title="School Dance"
            width="100%"
            height="100%"
            controls
        />

          </Col>

          <Col md={4} className="project-card">
          <ReactPlayer
            url={GradV}
            title="Graduation"
            width="100%"
            height="100%"
            controls
        />

          </Col>

          <Col md={4} className="project-card">
          <ReactPlayer
            url={GradV2}
            title="Graduation"
            width="100%"
            height="100%"
            controls
        />
        </Col>
          <Col md={4} className="project-card">
          <ReactPlayer
            url={GradV3}
            title="Graduation"
            width="100%"
            height="100%"
            controls
        />
          </Col>
          <Col md={4} className="project-card">
          <ReactPlayer
            url={GradV3}
            title="Graduation"
            width="100%"
            height="100%"
            controls
        />
          </Col>

          <Col md={4} className="project-card">
          <ReactPlayer
            url={birthday}
            width="100%"
            height="100%"
            controls
        />
          </Col>
          <Col md={4} className="project-card">
          <ReactPlayer
            url={fifteen}
            width="100%"
            height="100%"
            controls
        />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Videos;