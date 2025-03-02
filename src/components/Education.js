import React from 'react';

const Education = ({ isActive }) => {
  return (
    <section id="education" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Education</h2>
      <div className="content">
        <p>Viswajyothi College of Engineering and Technology</p>
        <p>Bachelors - Electrical & Electronics Engineering</p>
        <p>Jul 2015 - Jul 2019</p>
      </div>
    </section>
  );
};

export default Education;
