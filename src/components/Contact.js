import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import API_BASE from "../api";               // ← dynamic base URL from src/api.js

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      // ✅ Correct full endpoint – matches your Django URLs
      const response = await fetch(`${API_BASE}/api/contact/send/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertVariant('success');
        setAlertMessage('Message sent successfully!');
        e.target.reset();
      } else {
        setAlertVariant('danger');
        setAlertMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setAlertVariant('danger');
      setAlertMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center mb-4">
              <FaEnvelope className="me-2" />
              <strong>adithyan.m.2742001@gmail.com</strong>
            </div>

            {showAlert && (
              <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;