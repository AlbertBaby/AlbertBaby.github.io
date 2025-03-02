import React from 'react';

const Contact = ({ isActive }) => {
  return (
    <section id="contact" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Contact</h2>
      <div className="content">
        <p>Email: albertbaby266192@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/albert-baby-079310161/</p>
        <p>GitHub: https://github.com/AlbertBaby/</p>
      </div>
    </section>
  );
};

export default Contact;
