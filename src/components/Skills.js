import React from 'react';
import '../styles/components/_skills.scss';

const Skills = ({ isActive }) => {
  const skillCategories = [
  {
    "category": "Programming Languages",
    "skills": ["TypeScript", "JavaScript", "Python", "Java"]
  },
  {
    "category": "Automation & Frameworks",
    "skills": ["Playwright", "Appium", "PyTest", "RestAssured", "Selenium", "TestNG"]
  },
  {
    "category": "API & Mobile Engineering",
    "skills": ["Postman", "Swagger", "Charles Proxy", "ADB", "Xcode"]
  },
  {
    "category": "DevOps, Cloud & Infrastructure",
    "skills": ["Jenkins", "GitHub Actions", "Docker", "AWS (S3, SQS, SNS)", "Git", "Maven", "Gradle"]
  },
  {
    "category": "Databases & OS",
    "skills": ["PostgreSQL", "MySQL", "Linux", "Bash"]
  },
  {
    "category": "Specialized Domains",
    "skills": ["AI/LLM Evaluation", "Hardware-in-the-Loop (HiL)", "Performance Testing (JMeter)"]
  },
  {
    "category": "Test Management & Governance",
    "skills": ["Jira", "TestRail", "Confluence"]
  }
];

  return (
    <section id="skills" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
