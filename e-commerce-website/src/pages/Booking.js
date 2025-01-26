import React from 'react';
import './Booking.css'; // Import styles for the booking page
import '../styles.css';

const Booking = () => {
  return (
    <div className="booking-container">
      <h1>Book Your Free Consultation</h1>
      <form className="booking-form">
        <label>
          Full Name:
          <input type="text" name="fullName" required />
        </label>
        
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        
        <label>
          Phone Number:
          <input type="tel" name="phone" required />
        </label>
        
        <label>
          Preferred Contact Method:
          <select name="contactMethod" required>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </label>
        
        <label>
          Project Type:
          <select name="projectType" required>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="renovation">Renovation</option>
            <option value="other">Other</option>
          </select>
        </label>
        
        <label>
          Project Details:
          <textarea name="projectDetails" rows="4" required></textarea>
        </label>
        
        <label>
          Preferred Date for Consultation:
          <input type="date" name="consultationDate" required />
        </label>
        
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;