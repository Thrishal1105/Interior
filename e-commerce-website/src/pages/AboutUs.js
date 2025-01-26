// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        At [Your Company Name], we believe in transforming spaces into beautiful, functional environments that reflect our clients' unique styles and needs. Our team of experienced designers is dedicated to providing exceptional service and innovative design solutions. With a focus on quality, creativity, and attention to detail, we strive to create spaces that are both aesthetically pleasing and functional.
      </p>
      <p className="about-description">
        From concept to completion, we work closely with our clients to understand their needs and preferences. We pride ourselves on our ability to listen, communicate effectively, and provide personalized service to each and every client. Whether you're looking to renovate a single room or an entire home, our team of designers is here to guide you every step of the way.
      </p>
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/teammem2.jpg" alt="Team Member 1" className="team-image" />
            <h3 className="member-name">John Doe</h3>
            <p className="member-role">Lead Designer</p>
          </div>
          <div className="team-member">
            <img src="/images/customer-1.jpg" alt="Team Member 2" className="team-image" />
            <h3 className="member-name">Jane & Smith</h3>
            <p className="member-role">Interior Architect</p>
          </div>
          <div className="team-member">
            <img src="/images/teammem1.jpg" alt="Team Member 3" className="team-image" />
            <h3 className="member-name">Emily Johnson</h3>
            <p className="member-role">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;