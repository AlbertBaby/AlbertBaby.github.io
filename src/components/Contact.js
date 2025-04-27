import React from 'react';

const Contact = ({ isActive }) => {
  return (
    <section id="contact" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <h2>Contact</h2>
      <div className="content">
        <p>Email: <a href="mailto:albertbaby266192@gmail.com">albertbaby266192@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/albert-baby-079310161/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/albert-baby-079310161/</a></p>
        <p>GitHub: <a href="https://github.com/AlbertBaby/" target="_blank" rel="noopener noreferrer">https://github.com/AlbertBaby/</a></p>
      </div>
    </section>
  );
};

export default Contact;
