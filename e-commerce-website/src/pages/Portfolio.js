// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Import styles for the portfolio page
import '../styles.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'Residential',
      beforeImage: '/images/worstdesgin1.jpg', // Replace with actual image path
      afterImage: '/images/blog3.jpg', // Replace with actual image path
      title: 'Beautiful Living Room',
    },
    {
      id: 2,
      category: 'Commercial',
      beforeImage: '/images/worstdesgin2.jpg', // Replace with actual image path
      afterImage: '/images/blog4.jpg', // Replace with actual image path
      title: 'Modern Office Space',
    },
    {
      id: 3,
      category: 'Residential',
      beforeImage: '/images/worstdesgin3.jpg', // Replace with actual image path
      afterImage: '/images/blog1.jpg', // Replace with actual image path
      title: 'Gorgeous Master Bedroom',
    },
    {
      id: 4,
      category: 'Residential',
      beforeImage: '/images/worstdesgin3.jpg', // Replace with actual image path
      afterImage: '/images/blog2.jpg', // Replace with actual image path
      title: 'Charming Kitchen Renovation',
    },
    {
      id: 5,
      category: 'Commercial',
      beforeImage: '/images/worstdesgin1.jpg', // Replace with actual image path
      afterImage: '/images/blog5.jpg', // Replace with actual image path
      title: 'Modern Corporate Office',
    },
    {
      id: 6,
      category: 'Residential',
      beforeImage: '/images/worstdesgin2.jpg', // Replace with actual image path
      afterImage: '/images/blog6.jpg', // Replace with actual image path
      title: 'Luxurious Living Room',
    },
  ];

  return (
    <div className="portfolio-container">
      <h1>Our Portfolio</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <p>Category: {project.category}</p>
            <div className="image-comparison">
              <div className="image-box">
                <img src={project.beforeImage} alt="Before" className="before-image" />
                <span className="image-label">Before</span>
              </div>
              <div className="image-box">
                <img src={project.afterImage} alt="After" className="after-image" />
                <span className="image-label">After</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;