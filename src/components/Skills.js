import React from 'react';

const Skills = ({ isActive }) => {
  return (
    <section id="skills" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Skills</h2>
      <div className="content">
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Git</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
