import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_projects.scss';

const Projects = ({ isActive }) => {
  const projects = [
    {
      name: "Music App",
      description: "Integration test development in Dart/Flutter for Music Player application.",
      technologies: ["Dart", "Flutter", "Integration Testing"],
      githubLink: "https://github.com/AlbertBaby/Music_App"
    },
    {
      name: "HybridTestFramework",
      description: "A versatile testing framework designed to efficiently test mobile apps, web apps, and APIs simultaneously, allowing for comprehensive testing across multiple platforms.",
      technologies: ["Java", "Cucumber", "TestNG", "Selenium", "Appium"],
      features: ["Cross-platform testing", "API testing", "Mobile and Web testing"],
      githubLink: "https://github.com/AlbertBaby/Magpie"
    },
    {
      name: "Playwright E2E Testing",
      description: "End-to-end testing implementation using Playwright framework for web applications, featuring comprehensive test scenarios and automated test execution.",
      technologies: ["JavaScript", "Playwright", "Node.js", "E2E Testing"],
      githubLink: "https://github.com/AlbertBaby/Playwright-tests"
    },
    {
      name: "Cypress E2E Testing",
      description: "Modern web testing framework implementation using Cypress, demonstrating best practices in end-to-end testing with automated test scenarios.",
      technologies: ["JavaScript", "Cypress", "Node.js", "E2E Testing"],
      githubLink: "https://github.com/AlbertBaby/cypress_e2e"
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
