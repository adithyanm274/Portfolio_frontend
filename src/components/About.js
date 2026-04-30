import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './About.css'; // custom styles

const About = () => {
  return (
    <div id="about" className="about-section py-5">
      <Container>
        <h2 className="text-center section-title mb-5">About Me</h2>
        <Row className="align-items-center justify-content-center">
          <Col lg={4} md={5} className="text-center mb-4 mb-md-0">
            <div className="profile-image-wrapper">
              <Image 
                src="/images/my pic.jpg" 
                fluid 
                className="profile-image" 
                alt="Adithyan M"
              />
            </div>
            <div className="contact-info mt-4">
              <p><FaEnvelope className="contact-icon" /> adithyan.m.2742001@gmail.com</p>
              <p><FaPhone className="contact-icon" /> +91 8921391935</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Calicut, Kerala</p>
            </div>
            <Button 
              variant="primary" 
              href="/ADITHYAN-M-CV(5).pdf" 
              download 
              className="mt-3 download-btn"
            >
              <FaDownload className="me-2" /> Download Resume
            </Button>
          </Col>
          <Col lg={8} md={7}>
            <div className="about-text">
              <h3 className="greeting">Hi, I'm Adithyan M 👋</h3>
              <p className="lead">
                Python Full-Stack / Django Developer with 1.5+ years of experience building scalable web applications and RESTful APIs.
              </p>
              <p>
                I specialize in Django, Django REST Framework, and database optimization. I love solving complex problems and creating efficient, scalable solutions. Currently enhancing my skills with a Master's in Computer Applications (ongoing) from IGNOU.
              </p>
              <p>
                I've successfully delivered projects like an AI Fitness Assistant, an Warehouse Management System, and an E-Commerce platform. I'm passionate about clean code, Agile practices, and collaborating with cross-functional teams.
              </p>
              <div className="highlights mt-4">
                <Row>
                  <Col xs={6}>
                    <div className="highlight-item">
                      <span className="highlight-number">3+</span>
                      <span className="highlight-label">Projects</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="highlight-item">
                      <span className="highlight-number">1.5+</span>
                      <span className="highlight-label">Years Experience</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;