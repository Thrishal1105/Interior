// src/pages/Services.js
import React from 'react';
import './Services.css'; // Import styles for the services page

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Space Planning',
      description: 'Expert layout planning to maximize functionality and flow.',
      icon: 'path/to/space-planning-icon.png', // Replace with actual icon path
    },
    {
      id: 2,
      title: 'Renovation',
      description: 'Transforming spaces through thoughtful renovation and design.',
      icon: 'path/to/renovation-icon.png', // Replace with actual icon path
    },
    {
      id: 3,
      title: '3D Rendering',
      description: 'High-quality 3D visualizations to bring your ideas to life.',
      icon: 'path/to/3d-rendering-icon.png', // Replace with actual icon path
    },
    {
      id: 4,
      title: 'Furniture Selection',
      description: 'Curated selections of furniture to fit your style and needs.',
      icon: 'path/to/furniture-selection-icon.png', // Replace with actual icon path
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.icon} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;