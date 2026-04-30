import React from 'react';
import { Container } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    title: 'Python/Django Developer',
    company: 'Infox Technologies',
    location: 'Kochi, India',
    period: 'June 2021 – September 2022',
    description: [
      'Developed and maintained Django‑based web applications used in production environments.',
      'Built RESTful APIs using Django REST Framework for seamless frontend‑backend communication.',
      'Designed and optimized MySQL database schemas, improving query performance.',
      'Implemented user authentication, authorization, and form validation with Django built‑in modules.',
      'Integrated AJAX and JavaScript for dynamic page updates.',
      'Used Git version control and collaborated in an Agile environment.',
      'Assisted in application deployment and testing across cloud environments.'
    ],
    tech: ['Django', 'DRF', 'MySQL', 'Git', 'AJAX', 'Agile']
  },
  {
    title: 'Python/Django Developer (Internship)',
    company: 'Makbig Learn Hub',
    location: 'Kannur, India',
    period: 'September 2024 – February 2025',
    description: [
      'Developed RESTful APIs and real‑time web features using Django REST Framework and Django Channels.',
      'Integrated backend APIs with React‑based frontend applications.',
      'Implemented user authentication systems, form handling, and data validation.',
      'Designed and maintained PostgreSQL and MySQL databases with optimized relational models.',
      'Built responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Collaborated with cross‑functional teams to deliver scalable web solutions.'
    ],
    tech: ['Django', 'DRF', 'Django Channels', 'React', 'PostgreSQL', 'MySQL', 'HTML/CSS', 'Bootstrap', 'Git']
  }
];

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="card-top">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-row">
                    <FaBuilding className="meta-icon" />
                    <span className="company-name">{exp.company}</span>
                    <FaMapMarkerAlt className="meta-icon ms-3" />
                    <span className="location">{exp.location}</span>
                  </div>
                  <div className="period-row">
                    <FaCalendarAlt className="meta-icon" />
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Experience;