import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const navbarRef = useRef(null);

  // Measure navbar height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="home"
          smooth={true}
          duration={500}
          className="brand"
        >
          ADITHYAN M
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="experience"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="certifications"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              Certifications
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-navbarHeight}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;