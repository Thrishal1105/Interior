// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <p>© 2025 E-Commerce Website. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
      </ul>
    </div>
  </footer>
  );
};

export default Footer;