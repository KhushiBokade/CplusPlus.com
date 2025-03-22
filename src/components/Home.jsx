import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import data from '../DataInfo/ForumActivitydata';
import basicData from '../DataInfo/BasicData';
import './Home.css'; // Import the CSS file
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const list = ['Tutorials', 'Article', 'Reference', 'Forum'];
  const [currentSlide, setCurrentSlide] = useState(0);

  const path = ['/tutorial','/article','/reference','/forum']

  // Auto-slide interval (e.g., every 5 seconds)
  const AUTO_SLIDE_INTERVAL = 5000; // 5000ms = 5 seconds

  // Navigation for slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === basicData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? basicData.length - 1 : prev - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    // Clear the interval when the component unmounts or when the user interacts
    return () => clearInterval(autoSlide);
  }, [currentSlide]); // Reset the interval whenever currentSlide changes (i.e., on user interaction)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <motion.div
      className="sidebar"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="sidebar-title"
        whileHover={{ scale: 1.05, color: "#ff4500" }}
      >
        C++
      </motion.h2>
      <motion.ul className="sidebar-list">
        {list.map((item, index) => (
          <motion.p
            key={index}
            className="sidebar-item"
            variants={itemVariants}
            custom={index}
            whileHover={{
              scale: 1.05,
              color: "#4F46E5",
              backgroundColor: "#f3f4f6",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Link to={path[index]} style={{textDecorationLine:'none'}}>{item}</Link>
          </motion.p>
        ))}
      </motion.ul>
    </motion.div>

      {/* Main Content */}
      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="page-title"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          HOME
        </motion.h1>

        {/* Slider for Basic Data */}
        <div className="slider-section">
          <h2 className="slider-heading">Featured Content</h2>
          <div className="slider-container">
            <motion.div
              key={currentSlide}
              className="slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="slide-title">{basicData[currentSlide].heading}</h2>
              <p className="slide-content">{basicData[currentSlide].para}</p>
            </motion.div>

            {/* Slider controls */}
            <div className="slider-controls">
              <motion.button
                className="slider-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
              >
              <FaChevronLeft />
              </motion.button>
              <div className="slider-indicators">
                {basicData.map((_, index) => (
                  <motion.span
                    key={index}
                    className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <motion.button
                className="slider-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
              >
              <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Forum Activity Section */}
        <motion.div
          className="forum-section"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.h1 className="forum-heading" whileHover={{ scale: 1.02 }}>
            Latest Forum Activity
          </motion.h1>
          <motion.div
            className="forum-posts"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                className={index%2==0?"forum-post-even":"forum-post-odd"}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h2 className="post-title">{item.heading}</h2>
                <p className="post-content">{item.para}</p>
                <p className="post-info">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;