import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_experience.scss';

const experienceData = [
  {
    "company": "UST",
    "position": "SDET - Finance Domain",
    "duration": "Jul 2025 - Present",
    "achievements": [
      "Architected a scalable Playwright & TypeScript/JavaScript test automation framework using POM, improving cross-browser testing efficiency by 40%.",
      "Developed automated E2E and API test suites for microservices, increasing integration test coverage by 40% and reducing manual effort.",
      "Integrated automated regression packs into Jenkins CI/CD pipelines, cutting build feedback cycles from hours to minutes.",
      "Engineered custom test data management and environment utilities, saving 10+ engineering hours per sprint."
    ]
  },
  {
    "company": "Amazon",
    "position": "QAT - Robotics & Mobile Domain",
    "duration": "Sep 2022 - Jul 2025",
    "achievements": [
      "Engineered Python and Appium automation suites for Android-based robotics systems, reducing manual regression effort by 50%.",
      "Expanded automation coverage by 75% and improved test execution throughput 3x using ADB, Linux shell scripting, and framework optimizations.",
      "Executed API validation and backend data verification, using system logs to perform first-level root-cause analysis on defects.",
      "Authored feature test strategies, managed defect lifecycles in Jira, and mentored junior QA engineers on automation best practices."
    ]
  },
  {
    "company": "Cognizant",
    "position": "QA Associate - E-Commerce Domain",
    "duration": "Jan 2020 - Sep 2022",
    "achievements": [
      "Developed a backend API automation framework using RestAssured, Java, and TestNG, reducing regression cycle execution time by 80%.",
      "Performed functional, performance, and cross-platform testing across Web, Android, and iOS applications.",
      "Validated database integrity and microservice integrations using Postman, JMeter, and complex SQL queries."
    ]
  }
];

const Experience = ({ isActive }) => {
  return (
    <section id="experience" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Professional Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="card-header">
              <h3>{exp.company}</h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <h4 className="position">{exp.position}</h4>
            <ul className="achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

Experience.propTypes = {
  isActive: PropTypes.bool
};

Experience.defaultProps = {
  isActive: false
};

export default Experience;
