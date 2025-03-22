import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import cppLogo from '../assets/image.png'; // Importing the image as per instructions
import './Tutorials.css';

const Tutorials = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="tutorials-container">
      

      {/* Main Content */}
      <div className="content">
        <motion.div
          className="tutorials"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className='title'>TUTORIALS</motion.h2>
          <motion.div className="tutorial-card" variants={itemVariants}>
            <motion.img
              src={cppLogo}
              alt="C++ Language Tutorial"
              variants={imageVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            />
            <div className="tutorial-content">
              <h3>
                <a href="#">C++ Language Tutorial</a>
              </h3>
              <p>
                Learn C++ from its basics or introduce yourself to new language features with The C++ Language
                Tutorial. A fast-paced self-teaching tutorial covering the modern concepts of this programming language.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="supplemental"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>Supplemental papers</motion.h3>
          {['ASCII Codes', 'Numerical Bases', 'Boolean operations'].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: 'var(--link-blue)', transition: { duration: 0.3 } }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorials;