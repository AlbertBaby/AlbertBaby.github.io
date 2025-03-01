import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Albert Baby</h1>
        <p>Software Developer Engineer in Test</p>
        <nav className="nav-menu">
          <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</button>
          <button className={activeSection === 'education' ? 'active' : ''} onClick={() => setActiveSection('education')}>Education</button>
          <button className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')}>Experience</button>
          <button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</button>
          <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</button>
          <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</button>
        </nav>
      </header>
      
      <div className="portfolio-container">
        <section id="about" className={`portfolio-section ${activeSection === 'about' ? 'active' : ''}`}>
          <h2>About Me</h2>
          <p>A passionate software developer with expertise in testing applications.</p>
        </section>

        <section id="education" className={`portfolio-section ${activeSection === 'education' ? 'active' : ''}`}>
          <h2>Education</h2>
          <div className="content">
            <h3>Your University</h3>
            <p>Degree Details</p>
            <p>Year of Graduation</p>
          </div>
        </section>

        <section id="experience" className={`portfolio-section ${activeSection === 'experience' ? 'active' : ''}`}>
          <h2>Experience</h2>
          <div className="content">
            <h3>Company Name</h3>
            <p>Position</p>
            <p>Duration</p>
            <ul>
              <li>Key achievement 1</li>
              <li>Key achievement 2</li>
            </ul>
          </div>
        </section>

        <section id="projects" className={`portfolio-section ${activeSection === 'projects' ? 'active' : ''}`}>
          <h2>Projects</h2>
          <div className="content">
            <div className="project">
              <h3>Project Name</h3>
              <p>Project Description</p>
              <p>Technologies used</p>
            </div>
          </div>
        </section>

        <section id="skills" className={`portfolio-section ${activeSection === 'skills' ? 'active' : ''}`}>
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

        <section id="contact" className={`portfolio-section ${activeSection === 'contact' ? 'active' : ''}`}>
          <h2>Contact</h2>
          <div className="content">
            <p>Email: albertbaby266192@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/albert-baby-079310161/</p>
            <p>GitHub: https://github.com/AlbertBaby/</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;