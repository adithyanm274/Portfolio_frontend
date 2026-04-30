import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-content d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="hero-title animate-pop-in">ADITHYAN M</h1>
        <p className="hero-subtitle animate-pop-in">
          Python Full Stack Developer | Django Developer
        </p>
        <div className="hero-buttons animate-pop-in">
          <Button 
            variant="primary" 
            as={Link} 
            to="projects" 
            smooth={true} 
            duration={500}
            className="mx-2 btn-custom"
          >
            View My Work
          </Button>
          <Button 
            variant="outline-light" 
            as={Link} 
            to="contact" 
            smooth={true} 
            duration={500}
            className="mx-2 btn-custom"
          >
            Contact Me
          </Button>
        </div>
        <div className="hero-social animate-pop-in">
          <a href="https://github.com/adithyanm274" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/adithyanm274" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          {/* Gmail compose link */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adithyan.m.2742001@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Hero;