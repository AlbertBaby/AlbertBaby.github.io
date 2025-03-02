import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_projects.scss';

const Projects = ({ isActive }) => {
  const projects = [
    {
      name: "Music App",
      description: "Integration test development in Dart/Flutter for Music Player application.",
      technologies: ["Dart", "Flutter", "Integration Testing"],
      githubLink: "#" // Add actual link
    },
    {
      name: "HybridTestFramework",
      description: "A versatile testing framework designed to efficiently test mobile apps, web apps, and APIs simultaneously, allowing for comprehensive testing across multiple platforms.",
      technologies: ["Java", "Cucumber", "TestNG", "Selenium", "Appium"],
      features: ["Cross-platform testing", "API testing", "Mobile and Web testing"]
    }
  ];

  return (
    <section id="projects" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {project.features && (
              <div className="features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.githubLink && (
              <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  isActive: PropTypes.bool
};

Projects.defaultProps = {
  isActive: false
};

export default Projects;
