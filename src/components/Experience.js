import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/_experience.scss';

const experienceData = [
  {
    company: "Amazon",
    position: "QAT - Android-based robotic domain",
    duration: "Sep 2022 - Present",
    achievements: [
      "Developed and executed automated scripts for Android-based devices, achieving a 50% reduction in manual regression testing time.",
      "Independently developed automation test cases for Mobile & Web App, resulting in a 75% increase in test coverage.",
      "Championed the use of Scrum methodology for test case estimation, prioritization, and optimization, improving test efficiency by 10%.",
      "Owned the complete bug life cycle for numerous issues, ensuring efficient resolution with a high first-contact resolution rate.",
      "Collaborated with developers to identify the root cause and fix performance bottlenecks in the testing device, achieving a 3x improvement in test execution coverage"
    ]
  },
  {
    company: "Cognizant",
    position: "Associate (E-commerce domain)",
    duration: "Jan 2020 - Sep 2022",
    achievements: [
      "Designed and executed comprehensive test plans, achieving 10% test coverage across diverse platforms (iOS/Android mobile, web).",
      "Automated API testing with RestAssured, reducing smoke and regression test execution time by 80%.",
      "Optimized test cases and improved coverage by 10+ test cases per sprint, significantly reducing manual testing efforts.",
      "Validated APIs and databases through manual queries, ensuring data integrity and functionality.",
      "Actively participated in the SDLC (Sprint planning, retrospectives), and championed quality assurance for user stories.",
      "Collaborated with on- and off-shore teams, reviewed test plans, and communicated test results for effective quality control."
    ]
  }
];

const Experience = ({ isActive }) => {
  return (
    <section id="experience" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.company}</h3>
            <p className="position">{exp.position}</p>
            <p className="duration">{exp.duration}</p>
            <ul>
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
