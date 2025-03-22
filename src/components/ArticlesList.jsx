import React, { useState, useEffect } from 'react';
import { articlesData, categoriesData } from '../DataInfo/articlesData';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './articlesList.css';

const ArticlesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const articlesPerPage = 15;
  
  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Calculate current articles to display
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const categories = ["Algorithms", "C++ 11", "Graphics and Multimedia", "How-To", "Language Features",
    "Unix/Linux Programming", "Source Code", "Standard Library", "Tips and Tricks", "Tools and Libraries",
    "Visual C++", "Windows API"];
  
  return (
    <div className="articles-container">
      {isMobile && (
        <motion.button 
          className="sidebar-toggle"
          onClick={toggleSidebar}
          whileTap={{ scale: 0.95 }}
          // Add background color change when sidebar is open to improve X visibility
          style={{
            backgroundColor: sidebarOpen ? 'var(--secondary-color)' : 'var(--primary-color)',
            zIndex: 1001 // Ensure the button stays on top of the sidebar
          }}
        >
          {sidebarOpen ? '✕' : '☰'}
        </motion.button>
      )}
      
      <motion.div 
        className={`sidebar ${sidebarOpen || !isMobile ? 'open' : ''}`}
        initial={isMobile ? { x: '-100%' } : { x: 0 }}
        animate={isMobile ? { x: sidebarOpen ? 0 : '-100%' } : { x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        
        <div className="sidebar-category">Articles</div>
        <ul className="sidebar-menu">
          {categories.map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ backgroundColor: '#d64f0164', color: 'white', scale: 1.02,borderRadius:'25px' }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <div className="main-content">
        <motion.h1 
          className='title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ARTICLES
        </motion.h1>
        
        <div className="table-container">
          <table className="articles-table">
            <thead>
              <tr>
                <th>Title</th>
                <th className="hide-on-mobile">Author</th>
                <th className="hide-on-mobile">Date</th>
                <th className="hide-on-mobile">Score</th>
              </tr>
            </thead>
            <tbody>
              {currentArticles.map((article, index) => (
                <motion.tr 
                  key={article.id}
                  style={{backgroundColor:'rgba(33, 86, 24, 0.12)'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(200, 76, 5, 0.05)' }}
                >
                  <td className="article-title">
                    <a href={article.link} style={{color:'rgb(33, 86, 24)'}}>{article.title}</a>
                    <div className="categories" style={{display:'flex' , flexDirection:'row'}}>
                      Categories: {article.categories.map((cat, idx) => (
                        <span key={idx}>
                          <a href={`/categories/${cat.toLowerCase().replace(/\s/g, '-')}`}>{cat}</a>
                          {idx < article.categories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    <div className="mobile-meta">
                      <span>by <a href={`/author/${article.authorId}`}>{article.author}</a></span>
                      <span className="mobile-date">{article.date}</span>
                      <div className="mobile-score">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i} className={i < Math.floor(article.score) ? "star filled" : "star"}>★</span>
                        ))}
                        <span className="score-text">{article.score}/5</span>
                      </div>
                    </div>
                  </td>
                  <td className="author hide-on-mobile">by <a href={`/author/${article.authorId}`}>{article.author}</a></td>
                  <td className="date hide-on-mobile">
                    {article.date}
                    {article.updated && <div className="updated">Updated: {article.updated}</div>}
                  </td>
                  <td className="score hide-on-mobile">
                    <div className="stars">
                      {Array(5).fill(0).map((_, index) => (
                        <span key={index} className={index < Math.floor(article.score) ? "star filled" : "star"}>★</span>
                      ))}
                    </div>
                    <div className="score-text">{article.score}/5 ({article.votes} votes)</div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <motion.div 
          className="pagination"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>Pages: </span>
          {Array.from({ length: Math.ceil(articlesData.length / articlesPerPage) }, (_, i) => (
            <motion.button 
              key={i + 1}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => handlePageChange(i + 1)}
              whileHover={{ scale: 1.1, backgroundColor: '#355F2E' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="register-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Registered users can publish here.
        </motion.div>
        
        <motion.div 
          className="categories-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Categories:</h3>
          <div className="categories-grid">
            {categoriesData.map((category, index) => (
              <motion.div 
                className="category-card" 
                key={index}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 16px rgba(53, 95, 46, 0.16)',
                  backgroundColor:'rgba(53, 163, 34, 0.2)'
                }}
                transition={{ duration: 0.2 }}
              >
                <h4>
                  <a href={`/categories/${category.name.toLowerCase().replace(/\s/g, '-')}`}>{category.name}</a>
                </h4>
                <p>{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        
      </div>
    </div>
  );
};

export default ArticlesList;