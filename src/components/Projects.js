import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Django E-commerce',
    description: 'A full-featured, production-ready e-commerce platform built with Django, MySQL, and Stripe. This project demonstrates real-world functionality including user authentication, product management, shopping cart, order processing, and secure payment integration.',
    tech: ['Django', 'Bootstrap', 'PostgreSQL', 'Stripe'],
    image: '/images/e-commerce.jpg',
    github: 'https://github.com/adithyanm274/E-Commmerce',
    live: 'https://e-commmerce-web.onrender.com/',
  },
   {
  id: 2,
  title: 'FitBuddy-AI',
  description: 'AI‑powered fitness coach that delivers personalized workout plans, nutrition advice, and motivational support through natural conversation. Tracks chat history, adapts to user goals, and helps build lasting fitness habits.',
  tech: ['Python', 'Django', 'OpenAI API', 'PostgreSQL', 'Bootstrap CSS'],
  image: '/images/Fitbuddy-AI.jpg',
  github: 'https://github.com/adithyanm274/FitBuddy-AI',
  live: '/videos/project recording.mp4',
},
   {
    id: 3,
    title: 'Warehouse-Management-System',
    description:  "A full‑featured web application for managing warehouse operations. Supports supplier & buyer registration, product catalogues, seasonal drops, order tracking, delivery management, and role‑based access control. Only admin users can update order status; regular users view read‑only dashboards.",
    tech: ['Django', 'Bootstrap', 'PostgreSQL', "DataTables"],
    image: '/images/warehouse.jpg',
    github: 'https://github.com/adithyanm274/warehouse',
    live: 'https://warehouse-01hp.onrender.com/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map(project => (
            <Col md={6} lg={4} className="project-col mb-4" key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <Badge bg="info" className="me-1" key={i}>{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="primary" href={project.github} target="_blank">GitHub</Button>
                  {project.live && (
                    <Button variant="outline-primary" href={project.live} target="_blank" className="ms-2">
                      Live
                    </Button>
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

export default Projects;