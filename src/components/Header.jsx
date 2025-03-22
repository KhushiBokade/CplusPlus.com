import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/cplusplus.png";
import { IoMdSearch } from "react-icons/io";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for adding shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Ensure body has proper styling to prevent overflow
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100%";
    document.body.style.overflowX = "hidden";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links with animation
  const navItems = ["HOME","TUTORIAL", "REFERENCE", "ARTICLES", "FORUM"];
  const list = ['/','/tutorial','/reference','/article','/forum'];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo Section */}
        <motion.div 
          className="logo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          
          <motion.img 
            src={img1} 
            alt="C++ Logo" 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.4
            }}
          />
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </motion.button>

        {/* Search Bar */}
        <motion.div 
          className="search-container"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "250px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input" 
            aria-label="Search"
          />
          <motion.button 
            className="search-button"
            whileHover={{ backgroundColor: "white", color: "#083664" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Submit search"
          >
            <IoMdSearch size={20} />
          </motion.button>
        </motion.div>

        {/* Navigation */}
        <AnimatePresence>
          <nav className={mobileMenuOpen ? "mobile-active" : ""}>
            <ul className="nav-links">
              {navItems.map((item, index) => (
                <motion.p
                  key={index}
                  style={{ "--nav-index": index + 1, textDecorationLine: "none", color: 'white' }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.1 * (index + 1),
                    duration: 0.5
                  }}
                  whileHover={{ color: "#4bb5fd" }}
                >
                  <Link to={list[index]}>{item}</Link>
                  
                </motion.p>
              ))}
            </ul>
          </nav>
        </AnimatePresence>

        {/* Sign Up & Login */}
        <motion.div 
          className="auth-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className="signup"
            whileHover={{ y: -3, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
          <motion.button 
            className="login"
            whileHover={{ y: -3, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </motion.div>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;