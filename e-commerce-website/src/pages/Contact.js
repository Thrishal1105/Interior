// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Import styles for the contact page

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Left Side: Contact Form */}
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        {/* Right Side: Location Info and Map */}
        <div className="right-side">
          <div className="contact-info">
            <h2>Our Office</h2>
            <p>1234 E-Commerce St.</p>
            <p>City, State, ZIP</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509491!2d144.9537353153194!3d-37.81720997975129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1c2e91%3A0x5045675218ceed0!2sE-Commerce%20Office!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;