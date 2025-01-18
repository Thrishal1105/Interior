// src/components/Header.js
import React from 'react';
import './Header.css'; // Ensure you have a CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Company Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className="services-dropdown">
            <a href="/services">Services</a>
            <div className="mega-menu">
              <div className="menu-column">
                <p>Interior Design</p>
                <p>Residential</p>
                <p>Commercial</p>
              </div>
              
            </div>
          </li>
          <li className="services-dropdown">
            <a href="/portfolio">Portfolio</a>
            <div className="mega-menu">
             <div className="menu-column">
                <p>View Our Work</p>
                <p>Client Testimonials</p>
              </div>
            </div>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;