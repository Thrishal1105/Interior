// src/components/TestimonialCarousel.js
import React from 'react';
import './TestimonialCarousel.css'; // Import the CSS for this component

const testimonials = [
  {
    name: "John Doe",
    image: "/images/customer-1.jpg",
    testimonial: "The design process was seamless and the results were stunning!",
  },
  {
    name: "Jane Smith",
    image: "/images/customer-2.jpg",
    testimonial: "Our home feels like a dream thanks to the amazing team!",
  },
  {
    name: "The Johnson Family",
    image: "/images/family1.jpg",
    testimonial: "We love our new space! Highly recommend their services!",
  },
  {
    name: "The Williams Family",
    image: "/images/family2.jpg",
    testimonial: "The team was very professional and delivered high-quality work.",
  },
  // Duplicate testimonials for seamless animation
  {
    name: "John Doe",
    image: "/images/customer-1.jpg",
    testimonial: "The design process was seamless and the results were stunning!",
  },
  {
    name: "The Jackson Family",
    image: "/images/family1.jpg",
    testimonial: "The final result exceeded our expectations!",
  },
  {
    name: "Michael Brown",
    image: "/images/customer-2.jpg",
    testimonial: "The team was very professional and delivered high-quality work.",
  },
  {
    name: "The Rodriguez Family",
    image: "/images/family2.jpg",
    testimonial: "We love our new home thanks to the amazing team!",
  },
  {
    name: "Sarah Davis",
    image: "/images/customer-1.jpg",
    testimonial: "The design process was seamless and the results were stunning!",
  },
  {
    name: "Jane Smith",
    image: "/images/customer-2.jpg",
    testimonial: "Our home feels like a dream thanks to the amazing team!",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="testimonial-section">
      <h2><span>1000+</span> Satisfied Customers</h2>
      <div className="testimonial-carousel-wrapper">
        <div className="testimonial-carousel">
          {testimonials.map((customer, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-image">
                <img src={customer.image} alt={customer.name} />
              </div>
              <p className="testimonial-text">
                "{customer.testimonial}"
              </p>
              <h4 className="customer-name">{customer.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;