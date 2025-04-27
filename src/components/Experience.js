import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_experience.scss';

const experienceData = [
  {
    company: "Amazon",
    position: "QAT - Android Robotics Domain",
    duration: "Sep 2022 - Present",
    achievements: [
      "Implemented end-to-end test automation framework for Android-based robotic devices, reducing regression testing time by 50%",
      "Developed and maintained CI/CD pipelines for automated testing, achieving 90% test coverage",
      "Derived Testplan and Test Strategy documents for new features and enhancements",
      "Led test automation initiatives using Python and UiAutomator Framework for device testing",
      "Implemented data-driven testing approaches, improving test maintenance efficiency by 40%",
      "Mentored junior QA and conducted knowledge sharing sessions on test automation best practices"
    ]
  },
  {
    company: "Cognizant",
    position: "Associate - E-commerce Domain",
    duration: "Jan 2020 - Sep 2022",
    achievements: [
      "Developed and maintained automated test suites using RestAssured and Selenium, achieving 80% test coverage",
      "Implemented BDD framework using Cucumber for end-to-end testing across mobile and web platforms",
      "Created and executed performance test scripts using JMeter, identifying and resolving performance bottlenecks",
      "Established API testing strategies and authored comprehensive test documentation",
      "Reduced regression testing cycle time by 80% through strategic test automation",
      "Collaborated with cross-functional teams to establish quality metrics and testing standards",
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
