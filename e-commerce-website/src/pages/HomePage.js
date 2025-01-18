// src/pages/HomePage.js
import React from 'react';
import '../styles.css'; // Import your styles
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () => {
  // Sample data for featured products
  // const featuredProducts = [
  //   // Add your featured products here
  // ];

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}

        <div className="hero">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/videos/bg.mp4" type="video/mp4" alt="Hero Video" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <h1 style={{color: '#000'}}>Transforming Spaces, Creating Dreams</h1>
            <button className="cta-button" onClick={() => window.location.href='/Portfolio'}>View Portfolio</button>
            <button className="cta-button" onClick={() => window.location.href='/booking'}>Book a Consultation</button>
          </div>
        </div>

          {/* Design Boxes Section */}
          <section className="design-boxes">
            <h2 style={{ textAlign: 'center' }}>Our Design Inspirations</h2>
            <div className="box-grid">
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="design-box" key={index}>
                  <img src={`/images/design${index + 1}.jpg`} alt={`Design ${index + 1}`} onError={(e) => (e.target.style.display = 'none')} />
                  <button className="design-button">View Details</button>
                </div>
              ))}
            </div>
          </section>

        <h2 style={{textAlign: 'center'}}>Our Design Process</h2>
        <div className="process-section">
          <ol>
            <li>
              <h3>Consultation</h3>
              <p>We start with a consultation to understand your needs and vision.</p>
            </li>
            <li>
              <h3>Concept Design</h3>
              <p>Our team creates concept designs based on your preferences and requirements.</p>
            </li>
            <li>
              <h3>Execution</h3>
              <p>We bring the design to life with careful execution and attention to detail.</p>
            </li>
          </ol>
        </div>
          

        {/* Testimonials Section */}
        <h2 style={{ textAlign: 'center' }}>What Our Clients Say</h2>
        <div className="testimonials-section">
          <div className="testimonial">
            <p>"The team transformed my living space beautifully! Highly recommend!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Professional and attentive to detail. I love my new office design!"</p>
            <p>- Jane Smith</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>

        {/* Quiz Section */}
        <section className="quiz-section">
          <h2>Discover Your Interior Design Style</h2>
          <p>Take our quick quiz to find out what design style suits you best! Click the button below to get started.</p>
          <button className="cta-button" onClick={() => window.location.href='/quiz'}>Take the Quiz</button>
        </section>
        

         {/* Include the Quiz Component */}
         
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;