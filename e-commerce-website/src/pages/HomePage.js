// src/pages/HomePage.js
import React from 'react';
import '../styles.css'; // Import your styles
import Header from '../components/Header';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BlogCarousel from '../components/BlogCarousel';
import TimelineSection from '../components/TimelinesSection';



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
            <h1>
              Transforming <br />
              <span className="highlight">Beautiful Spaces,</span> Creating Dreams
            </h1>
            <button className="cta-button" onClick={() => window.location.href='/booking'}>Book Free Consultation</button>
          </div>
        </div>
        <br />
        

      

                  {/* Contemporary Home Interior Designers Section */}
        <section className="interior-design-section">
          <div className="design-container">
            <div className="left-column">
              <h2 style={{color: 'black'}}>CONTEMPORARY HOME INTERIOR DESIGNERS AND CONTRACTORS IN INDIA</h2>
              <p className='about-description'>
                Our team of expert designers specializes in creating stunning contemporary interiors that reflect your style and needs. 
                With years of experience in the industry, we offer a wide range of services from conceptualization to execution. 
                We are located in various cities across India, ensuring that we can cater to your interior design needs wherever you are. 
              
                Our team is equipped with the latest design software and technology, which allows us to create accurate 2D and 3D designs. 
                We work closely with our clients to understand their vision and preferences, ensuring that the final design exceeds their expectations. 
                Our designers are skilled in creating a wide range of interior design styles, from modern and minimalist to traditional and ornate. 
               </p>
            </div>
            <div className="right-column">
              <img src="/images/head1.jpg" alt="Contemporary Kitchen" />
            </div>
          </div>

          {/* Custom-Made Home Interiors Section */}
          <div className="custom-made-section">
            <div className="left-column">
              <img src="/images/head2.jpg" alt="Our Team" />
            </div>
            <div className="right-column">
              <h2 style={{color: 'black'}}>CUSTOM-MADE HOME INTERIORS</h2>
              <p className='about-description'>
                With a rich history in interior design, we provide custom-made solutions tailored to your preferences. 
                Our services span across various cities, including <span className="highlight">Mumbai</span>, <span className="highlight">Delhi</span>, and <span className="highlight">Bangalore</span>. 
                We pride ourselves on our attention to detail and commitment to excellence in every project we undertake.
                We understand the importance of staying within budget and provide cost-effective solutions that meet your needs. 
                Our dedication to quality and customer satisfaction has earned us a reputation as one of the top interior design companies in India.
              </p>
              <br />
              <br />
              <button className="cta-button" onClick={() => window.location.href='/booking'}>Book Free Consultation</button>
            </div>
          </div>
        </section>


        {/* What We Do Section */}
        <section className="what-we-do-section">
          <h2>WHAT WE DO</h2>
          <br />
          <br />
          <div className="grid-container">
            <div className="grid-item large">
              <img src="/images/kitchen.jpg" alt="Kitchen" />
              <div className="overlay">
                <h3>KITCHEN</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/bedroom.jpg" alt="Bedroom" />
              <div className="overlay">
                <h3>BEDROOM</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/design3.jpg" alt="Living Room" />
              <div className="overlay">
                <h3>LIVING</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/design2.jpg" alt="Dining Room" />
              <div className="overlay">
                <h3>DINING</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/images/bathroom.jpg" alt="House Interior" />
              <div className="overlay">
                <h3>Bathroom</h3>
              </div>
            </div>
          </div>
          <br />
          <br />
          <button className="cta-button" onClick={() => window.location.href='/Portfolio'}>View Portfolio</button>
        </section>

          

          {/* Project Completion Timeline Section */}
          {/* <section class="timeline-section">
    <h1>PROJECT COMPLETION IN <span class="highlight">50 WORKING DAYS*</span></h1>
    <br />
    <br />
    <div class="timeline">
      
      <div class="timeline-step" data-step="Talk to our Interior Designer & Get an Estimate">
        <div class="circle">
          <i class="fas fa-users"></i>
          <i class="fas fa-phone" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></i>
        </div>
        <p>Talk to our Interior Designer & Get an Estimate</p>
      </div>
      
      <div class="arrow"></div>
      <div class="timeline-step" data-step="Detailed Drawing and Approval">
        <div class="circle">
          <i class="fas fa-clipboard"></i>
          <i class="fas fa-pencil-alt" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></i>
        </div>
        <p>Detailed Drawing and Approval</p>
      </div>
      
      <div class="arrow"></div>
      <div class="timeline-step" data-step="Production at Own Factories">
        <div class="circle">
          <i class="fas fa-industry"></i>
          <i class="fas fa-cog" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></i>
        </div>
        <p>Production at Own Factories</p>
      </div>
      
      <div class="arrow"></div>
      <div class="timeline-step" data-step="Material Delivery & Execution">
        <div class="circle">
          <i class="fas fa-truck"></i>
          <i class="fas fa-box" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></i>
        </div>
        <p>Material Delivery & Execution</p>
      </div>
      
      <div class="arrow"></div>
      <div class="timeline-step" data-step="On Time Project Hand Over">
        <div class="circle">
          <i class="fas fa-key"></i>
          <i class="fas fa-check" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></i>
        </div>
        <p>On Time Project Hand Over</p>
      </div>
    </div>
  </section> */}

              <TimelineSection />
          



          {/* Package Offers Section */}
          <section className="package-offers">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Our Package Offers</h2>
            <br />
            <br />
            <div className="package-grid">
              <div className="package-card">
                <img src="/images/design1.jpg" alt="Everything Essential" />
                <h3>Everything Essential</h3>
                <p className="price">
                  <span className="discounted-price">$999</span>
                  <span className="original-price">$1299</span>
                </p>
                <p>Essential woodwork for a 2BHK.</p>
                <button className="cta-button">Free Estimate</button>
              </div>
              <div className="package-card">
                <img src="/images/design2.jpg" alt="Eleganza" />
                <h3>Eleganza</h3>
                <p className="price">
                  <span className="discounted-price">$1499</span>
                  <span className="original-price">$1999</span>
                </p>
                <p>Premium design services with finishes.</p>
                <button className="cta-button">Free Estimate</button>
              </div>
              <div className="package-card">
                <img src="/images/design1.jpg" alt="Eleganza Plus" />
                <h3>Eleganza Plus</h3>
                <p className="price">
                  <span className="discounted-price">$1999</span>
                  <span className="original-price">$2499</span>
                </p>
                <p>All-inclusive package with luxury materials.</p>
                <button className="cta-button">Free Estimate</button>
              </div>
              <div className="package-card">
                <img src="/images/design4.jpg" alt="Dream Space" />
                <h3>Dream Space</h3>
                <p className="price">
                  <span className="discounted-price">$3999</span>
                  <span className="original-price">$4999</span>
                </p>
                <p>Customized design for a 3BHK  materials.</p>
                <button className="cta-button">Free Estimate</button>
              </div>
            </div>
          </section>
        


         {/* Quiz Section */}
         <section className="quiz-section">
          <h2>Discover Your Interior Design Style</h2>
          <p>Take our quick quiz to find out what design style suits you best! Click the button below to get started.</p>
          <button className="cta-button" onClick={() => window.location.href='/quiz'}>Take the Quiz</button>
        </section>
          
        <TestimonialCarousel />
         

         <BlogCarousel />
         
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;