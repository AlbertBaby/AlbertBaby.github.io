import React, { useState } from 'react';
import './styles/index.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderActiveComponent = () => {
    const components = {
      about: <About isActive={activeSection === 'about'} />,
      education: <Education isActive={activeSection === 'education'} />,
      experience: <Experience isActive={activeSection === 'experience'} />,
      projects: <Projects isActive={activeSection === 'projects'} />,
      skills: <Skills isActive={activeSection === 'skills'} />,
      contact: <Contact isActive={activeSection === 'contact'} />
    };
    
    return components[activeSection] || components.about;
  };

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
      
      <div className="content-container">
        {renderActiveComponent()}
      </div>
    </div>
  );
}

export default App;