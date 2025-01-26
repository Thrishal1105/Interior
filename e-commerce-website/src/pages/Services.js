// src/pages/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRulerCombined, // Space Planning
  faHammer,       // Renovation
  faCube,         // 3D Rendering
  faCouch,        // Furniture Selection
} from '@fortawesome/free-solid-svg-icons';
import './Services.css'; // Import styles for the services page

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Space Planning',
      description: 'Expert layout planning to maximize functionality and flow.',
      icon: faRulerCombined,
    },
    {
      id: 2,
      title: 'Renovation',
      description: 'Transforming spaces through thoughtful renovation and design.',
      icon: faHammer,
    },
    {
      id: 3,
      title: '3D Rendering',
      description: 'High-quality 3D visualizations to bring your ideas to life.',
      icon: faCube,
    },
    {
      id: 4,
      title: 'Furniture Selection',
      description: 'Curated selections of furniture to fit your style and needs.',
      icon: faCouch,
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} size="3x" />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;