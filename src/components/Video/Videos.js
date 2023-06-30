import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";


const VideoPlayer = () => {
  const videoRef = useRef(null);


    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">VIDEOS </strong>
          </h1>
          <p style={{ color: "white" }}>
          VIDEOS
          </p>
           <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
            <Col md={4} className="project-card">
              <video 
              ref={videoRef} 
              controls        
              width="100%"
              height="100%" >
              <source src="https://i.imgur.com/PHHhJ61.mp4" type="video/mp4" />
              </video>
            </Col>
            
            <Col md={4} className="project-card">
              <video 
              ref={videoRef} 
              controls        
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/LvrWIvX.mp4" type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video 
              ref={videoRef} 
              controls        
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/xoKuhDz.mp4" type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/GsfY5qc.mp4" type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/Be6hiGF.mp4"
              type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/cTJPBZE.mp4" type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/umuYGtT.mp4"
              type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/zHh9vvv.mp4"
              type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/rGABoFs.mp4"
              type="video/mp4" />
              </video>
            </Col>

            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/N8Dtnyd.mp4"
              type="video/mp4" />
              </video>
            </Col>
            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/BnYtOWD.mp4"
              type="video/mp4" />
              </video>
            </Col>
            <Col md={4} className="project-card">
              <video        
              ref={videoRef} 
              controls
              width="100%"
              height="100%">
              <source src="https://i.imgur.com/KfHapbB.mp4"
              type="video/mp4" />
              </video>
            </Col>

          </Row>
    </Container>
    </Container>

  );
};

export default VideoPlayer;
