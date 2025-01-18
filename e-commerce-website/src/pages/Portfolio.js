// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css'; // Import styles for the portfolio page

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'Residential',
      beforeImage: 'path/to/before1.jpg', // Replace with actual image path
      afterImage: 'path/to/after1.jpg', // Replace with actual image path
      title: 'Beautiful Living Room',
    },
    {
      id: 2,
      category: 'Commercial',
      beforeImage: 'path/to/before2.jpg', // Replace with actual image path
      afterImage: 'path/to/after2.jpg', // Replace with actual image path
      title: 'Modern Office Space',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-container">
      <h1>Our Portfolio</h1>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <div className="slider">
              <img src={project.beforeImage} alt="Before" className="before-image" />
              <img src={project.afterImage} alt="After" className="after-image" />
            </div>
            <p>Category: {project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;