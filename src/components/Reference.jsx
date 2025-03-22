/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import referenceData from '../DataInfo/ReferenceInfo';
import containerData from '../DataInfo/containerData';
import mdata from '../DataInfo/mdata';
import data from '../DataInfo/atomicData';
import img from '../assets/img.png';
import './Reference.css';

const Reference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState("C Library");

  const sidebarItems = [
    'C Library',
    'Containers',
    'Input/Output',
    'Multi-threading',
    'Other'
  ];

  // Function to scroll to the corresponding section
  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Main Content with Sidebar */}
      <motion.div className="reference-container">
        
        {/* Sidebar */}
        <div className="sidebar" style={{width:'80%',marginBottom:'5%',height:'30%'}}>
          <h1 style={{ color: '#cc4b00' }}>Reference</h1>
          <ul className="sidebar-list">
            {sidebarItems.map((item, index) => (
              <motion.li
                key={index}
                className={`sidebar-item ${activeSection === item ? 'active' : ''}`}
                onClick={() => handleSectionClick(item)}
                whileHover={{ scale: 1.01 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* C Library */}
          <motion.div id="C Library" className={`reference-section ${activeSection === "C Library" ? "highlight" : ""}`}>
            <h2>C Library</h2>
            <ul className="reference-list">
              {referenceData.map((item, index) => (
                <motion.li key={index} className="reference-item">
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Containers */}
          <motion.div id="Containers" className={`reference-section ${activeSection === "Containers" ? "highlight" : ""}`}>
            <h2>Container</h2>
            <ul className="reference-list">
              {containerData.map((item, index) => (
                <motion.li key={index} className="reference-item">
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Input/Output */}
          <motion.div id="Input/Output" className={`reference-section ${activeSection === "Input/Output" ? "highlight" : ""}`}>
            <h2>Input/Output Stream Library</h2>
            <motion.div className="image-container">
              <img src={img} alt="IO Stream Library Map" className="reference-image" />
            </motion.div>
          </motion.div>

          {/* Multi-threading */}
          <motion.div id="Multi-threading" className={`reference-section ${activeSection === "Multi-threading" ? "highlight" : ""}`}>
            <h2>Atomics and Threading Library</h2>
            <ul className="reference-list">
              {mdata.map((item, index) => (
                <motion.li key={index} className="reference-item">
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other */}
          <motion.div id="Other" className={`reference-section ${activeSection === "Other" ? "highlight" : ""}`}>
            <h2>Miscellaneous Headers</h2>
            <ul className="reference-list">
              {data.map((item, index) => (
                <motion.li key={index} className="reference-item">
                  <h3>{item.heading}</h3>
                  <p>{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reference;
