import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dog from "../../Assets/Projects/pictures/dog.jpeg";
import halloween from "../../Assets/Projects/pictures/halloween.jpeg";
import school from "../../Assets/Projects/pictures/school.png";
import birthday from "../../Assets/Projects/pictures/birthday.png";
import graduation from "../../Assets/Projects/pictures/graduation.png";
import wedding from "../../Assets/Projects/pictures/wedding.png";


function Projects() { 
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few parties I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthday}
              isBlog={false}
              title="Birthdays"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedding}
              isBlog={false}
              title="Weddings"
              description=""           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              imgPath={school}
              isBlog={false}
              title="School Dances"
              description=""            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
              imgPath={Dog}
              isBlog={false}
              title="Dog Shows"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
              imgPath={graduation}
              isBlog={false}
              title="Graduation Parties"
              description=""
              
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
          
              imgPath={halloween}
              isBlog={false}
              title="Halloween Parties"
              description=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
