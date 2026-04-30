import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaCode,
  FaDatabase,
  FaLock,
  FaGitAlt,
  FaCloudUploadAlt,
  FaUsers,
  FaCogs,
  FaPaintBrush,
  FaChartBar
} from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  // Helper: decide whether to use white or dark text based on luminance
  const getContrastText = (hexColor) => {
    // Remove '#' if present
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Calculate relative luminance (approx.)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#0f172a' : '#ffffff'; // dark or light
  };

  // Map category names to icons
  const categoryIcons = {
    "Programming Languages": <FaCode className="category-icon" />,
    "Frameworks & Libraries": <SiDjango className="category-icon" />,
    "Data Science / ML": <FaChartBar className="category-icon" />,
    "Databases": <FaDatabase className="category-icon" />,
    "Web Technologies": <FaPaintBrush className="category-icon" />,
    "Authentication & Security": <FaLock className="category-icon" />,
    "Version Control": <FaGitAlt className="category-icon" />,
    "API & Backend Concepts": <FaCogs className="category-icon" />,
    "Software Development Concepts": <FaCogs className="category-icon" />,
    "Deployment": <FaCloudUploadAlt className="category-icon" />,
    "Soft Skills": <FaUsers className="category-icon" />
  };

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python"],
      color: "#f7df1e" // JavaScript yellow
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Django", "Django Channels", "Django REST Framework"],
      color: "#092e20" // Django green (dark – now will get white text)
    },
    {
      category: "Data Science / ML",
      skills: ["Joblib", "Scikit-learn"],
      color: "#ff6f00" // orange
    },
    {
      category: "Databases",
      skills: ["Database Design", "MySQL", "PostgreSQL", "Query Optimization"],
      color: "#336791" // postgres blue
    },
    {
      category: "Web Technologies",
      skills: ["AJAX", "Bootstrap", "CSS3", "HTML5", "React"],
      color: "#61dafb" // react cyan
    },
    {
      category: "Authentication & Security",
      skills: ["CSRF Protection", "Form Validation", "JWT", "OAuth2"],
      color: "#dc3545" // red
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "Virtualenv"],
      color: "#f34f29" // git orange
    },
    {
      category: "API & Backend Concepts",
      skills: [
        "API Integration",
        "Authentication & Authorization",
        "CRUD Operations",
        "Django ORM",
        "RESTful APIs"
      ],
      color: "#28a745" // green
    },
    {
      category: "Software Development Concepts",
      skills: [
        "Agile/Scrum",
        "Database Design",
        "MVC/MVT Architecture",
        "Object-Oriented Programming (OOP)",
        "ORM Optimization",
        "Unit Testing"
      ],
      color: "#6f42c1" // purple
    },
    {
      category: "Deployment",
      skills: ["CI/CD Basics", "Render", "Vercel", "Web Application Deployment"],
      color: "#fd7e14" // orange
    },
    {
      category: "Soft Skills",
      skills: ["Adaptability", "Communication", "Team Collaboration", "Time Management"],
      color: "#17a2b8" // teal
    }
  ];

  return (
    <div id="skills" className="skills-section py-5">
      <Container>
        <h2 className="section-title">Technical Skills</h2>
        <Row>
          {skillCategories.map((cat, idx) => {
            const textColor = getContrastText(cat.color);
            return (
              <Col lg={6} xl={4} className="mb-4" key={idx}>
                <div className="skill-card h-100">
                  <div
                    className="card-header"
                    style={{ borderBottom: `4px solid ${cat.color}` }}
                  >
                    <span className="icon-wrapper" style={{ color: cat.color }}>
                      {categoryIcons[cat.category]}
                    </span>
                    <h5 className="category-title">{cat.category}</h5>
                  </div>
                  <div className="card-body">
                    <div className="skills-cloud">
                      {cat.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-badge"
                          style={{
                            background: cat.color + '25',
                            color: textColor,                          // always readable
                            border: `1px solid ${cat.color}40`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;