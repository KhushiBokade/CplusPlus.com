import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Forum.css';
import { ForumTable, LastActiveTopic } from '../DataInfo/tableData';

const Forum = () => {
  // Animation variants for the table
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for the list
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const Forum = [
    "Beginners",
    "Windows Programming",
    "UNIX/Linux Programming",
    "General C++ Programming",
    "Lounge",
    "Jobs",
  ];

  return (
    <div className="forum-container">
      {/* Forum List Section */}
      <motion.div
        className="forum-list-section"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {/* <h2>Forum</h2> */}
        <ul className="forum-list">
          {Forum.map((item, index) => (
            <motion.li
              key={index}
              className="forum-list-item"
              variants={listItemVariants}
              whileHover={{
                scale: 1.05,
                color: 'var(--orange)',
                transition: { duration: 0.3 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Forum Table Section */}
      <div className="forum-table-section">
        <h1 style={{color:'#083664'}} className='title'>FORUM</h1>
        <div className="table-wrapper">
          <motion.div
            className="forum-table"
            initial="hidden"
            animate="visible"
            variants={tableVariants}
          >
            <table>
              <thead>
                <tr>
                  <th>Forum</th>
                  <th>Last Active Topic</th>
                </tr>
              </thead>
              <tbody>
                {ForumTable.map((item, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? 'row-orange' : 'row-navy'}
                    variants={rowVariants}
                    whileHover={{
                      scale: 1.03, // Grow up effect on hover
                      transition: { duration: 0.3 },
                    }}
                    onClick={(e) => e.preventDefault()} // Prevent movement on click
                  >
                    <td
                      className="table-cell"
                      style={{
                        borderBottomLeftRadius: '10px',
                        borderTopLeftRadius: '10px',
                      }}
                    >
                      <div className="forum-category">
                        <a href="#" className="category-link">
                          {item.head}
                        </a>
                        <p>{item.desc}</p>
                      </div>
                    </td>
                    <td
                      className="table-cell"
                      style={{
                        borderBottomRightRadius: '10px',
                        borderTopRightRadius: '10px',
                      }}
                    >
                      <div className="last-active">
                        <a href="#" className="topic-link">
                          {LastActiveTopic[index].title}
                        </a>
                        <p>
                          {LastActiveTopic[index].date} by{' '}
                          {LastActiveTopic[index].author}
                        </p>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Forum;