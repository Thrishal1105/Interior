// src/components/Header.js
import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/new-logo.png" alt="Company Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="services-dropdown">
            <a href="/services">Services</a>
            <div className="mega-menu">
              <div className="menu-column">
                <p>Space Planning</p>
                <p>Renovation</p>
                <p>3D Rendering</p>
                <p>Furniture Selection</p>
                
              </div>
            </div>
          </li>
          <li className="services-dropdown">
            <a href="/portfolio">Portfolio</a>
            <div className="mega-menu">
              <div className="menu-column">
                <p>Residential Projects</p>
                <p>Commercial Projects</p>
                
                
              </div>
            </div>
          </li>
          <li><a href="/blog">Blog</a></li>
          
          
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;