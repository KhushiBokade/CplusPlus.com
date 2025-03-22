import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-container">
        <div className="footer-links">
          <motion.a 
            href="/" 
            whileHover={{ color: '#4338ca' }}
            className="footer-link"
          >
            Home page
          </motion.a>
          <span className="separator">|</span>
          <motion.a 
            href="/privacy" 
            whileHover={{ color: '#4338ca' }}
            className="footer-link"
          >
            Privacy policy
          </motion.a>
        </div>
        
        <div className="footer-copyright">
          © cplusplus.com, 2000-2023 - All rights reserved - v3.3.4s
        </div>
        
        <div className="footer-contact">
          Spotted an error? 
          <motion.a 
            href="/contact" 
            whileHover={{ color: '#4338ca', textDecoration: 'underline' }}
            className="footer-link contact-link"
          >
            contact us
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;