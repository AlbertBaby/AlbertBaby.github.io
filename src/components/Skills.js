import React from 'react';
import '../styles/components/_skills.scss';

const Skills = ({ isActive }) => {
  const skillCategories = [
    {
      category: "Automation Tools",
      skills: ["Selenium 4.x", "Appium", "Cypress", "Playwright"]
    },
    {
      category: "Mobile Testing",
      skills: ["ADB", "Xcode", "Charles Proxy"]
    },
    {
      category: "API Testing",
      skills: ["Postman", "Rest Assured"]
    },
    {
      category: "Testing Frameworks",
      skills: ["Cucumber", "Pytest", "JUnit", "TestNG"]
    },
    {
      category: "Version Control & Build",
      skills: ["Git", "Maven"]
    },
    {
      category: "Test Management",
      skills: ["JIRA", "TestRail", "Confluence"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Bash Scripting"]
    },
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      category: "CI/CD",
      skills: ["Jenkins", "Github Actions"]
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
