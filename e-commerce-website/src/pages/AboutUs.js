// src/pages/AboutUs.js
import React from 'react';
import '../styles.css'; // Import your styles
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div  className="about-container">
      <h1>About Us</h1>
      <section>
        <h2>Our Philosophy</h2>
        <p>
          At [Your Company Name], we believe in creating spaces that reflect the personality and lifestyle of our clients. Our design philosophy is rooted in the idea that every detail matters and that a well-designed space can enhance the quality of life.
        </p>
      </section>
      <section>
        <h2>Our Expertise</h2>
        <p>
          With years of experience in the interior design industry, our team is equipped with the knowledge and skills to transform any space. We specialize in residential and commercial design, ensuring that each project is tailored to meet the unique needs of our clients.
        </p>
      </section>
      <section>
        <h2>Meet Our Team</h2>
        <p>
          Our team consists of talented designers, architects, and project managers who are passionate about creating beautiful and functional spaces. Together, we work closely with our clients to bring their vision to life.
        </p>
      </section>
      <section>
        <h2>A Message from Our Founder</h2>
        <p>
          "Design is not just what it looks like and feels like. Design is how it works." - [Founder's Name]
        </p>
      </section>
    </div>
  );
};

export default AboutUs;