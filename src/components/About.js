import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import AnimatedCard from './shared/AnimatedCard';

const About = ({ isActive }) => {
  return (
    <section id="about" className={`portfolio-section ${isActive ? 'active' : ''}`}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        <AnimatedCard className="professional-summary" delay={0.2} direction="left">
          <p className="summary-text">
            Enthusiastic Quality Assurance professional with 5+ years of experience in crafting, 
            developing, and executing test plans for web, mobile, and API applications. 
          </p>
          <p className="highlight-text">
            Proven ability to leverage automation frameworks and apply testing methodologies 
            to identify defects and ensure high-quality software releases.
          </p>
        </AnimatedCard>

        <AnimatedCard className="typing-container" delay={0.4} direction="right">
          <span className="typing-prefix">Specialized in</span>
          <div className="typing-animation">
            <TypeAnimation
              sequence={[
                'Test Automation Framework development 🏗️',
                2000,
                'CI/CD Implementation 🔄',
                2000,
                'API Testing & Integration 🔌',
                2000,
                'Mobile Testing Solutions 📱',
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="typing-text gradient-text"
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default About;
