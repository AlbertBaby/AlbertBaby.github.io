import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ 
  children, 
  className = '', 
  direction = 'left', 
  delay = 0 
}) => {
  const initialX = direction === 'left' ? -50 : 50;

  return (
    <motion.div 
      className={`card ${className}`}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="card-content">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
