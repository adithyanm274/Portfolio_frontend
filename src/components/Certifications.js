import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import './Certifications.css';

const certifications = [
  {
    title: 'Certified Python Developer',
    issuer: 'Infox Technologies',
    date: '2022',
    description: 'Comprehensive certification covering Python fundamentals, Django, REST APIs, and database integration.',
    credentialUrl: 'https://github.com/adithyanm274/Makbig/blob/main/experience%20cirtificate.jpg', // real link
  },
  // Add more certifications as you earn them
];

const Certifications = () => {
  return (
    <div id="certifications" className="certifications-section py-5">
      <Container>
        <h2 className="text-center mb-5">Certifications</h2>
        <Row className="justify-content-center">
          {certifications.map((cert, idx) => (
            <Col md={8} lg={6} className="mb-4" key={idx}>
              <Card className="certification-card h-100">
                <Card.Body>
                  <div className="certification-header">
                    <FaCertificate className="cert-icon" />
                    <Card.Title className="cert-title">{cert.title}</Card.Title>
                  </div>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cert.issuer}
                  </Card.Subtitle>
                  <div className="cert-date">
                    <FaCalendarAlt className="me-1" /> {cert.date}
                  </div>
                  <Card.Text className="mt-3">
                    {cert.description}
                  </Card.Text>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Verify Credential
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Certifications;