import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>&copy; {new Date().getFullYear()} Adithyan M. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;