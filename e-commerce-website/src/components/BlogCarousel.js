// src/components/BlogCarousel.js
import React from "react";
import "./BlogCarousel.css"; // Import the CSS for this component

const blogs = [
  {
    title: "New Homeowner’s Guide to Choosing Contemporary Interior Designers",
    date: "December 14, 2024",
    image: "/images/blog1.jpg", // Replace with actual image URL
  },
  {
    title: "The 8 Most Beautiful Luxury Home Interiors in India That are Beyond This...",
    date: "December 05, 2024",
    image: "/images/blog2.jpg", // Replace with actual image URL
  },
  {
    title: "Stylish Modern Staircase Design Ideas for Elegant Home Interiors",
    date: "January 17, 2025",
    image: "/images/blog3.jpg", // Replace with actual image URL
    tag: "Free",
  },
  {
    title: "Modern Kitchens for Urban Living",
    date: "February 02, 2025",
    image: "/images/blog4.jpg", // Replace with actual image URL
  },
];

const BlogCarousel = () => {
    return (
      <div className="carousel-container">
        <h2 className="carousel-title">Latest Blogs</h2>
        <br />
        <br  />
        <div className="carousel">
          <div className="carousel-track">
            {blogs.map((blog, index) => (
              <div className="carousel-card" key={`blog-${index}`}>
                <img src={blog.image} alt={blog.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{blog.title}</h3>
                  <p className="card-date">{blog.date}</p>
                  {/* {blog.tag && <span className="card-tag">{blog.tag}</span>} */}
                </div>
              </div>
            ))}
            {/* Duplicate the cards to create seamless animation */}
            {blogs.map((blog, index) => (
              <div className="carousel-card" key={`duplicate-blog-${index}`}>
                <img src={blog.image} alt={blog.title} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{blog.title}</h3>
                  <p className="card-date">{blog.date}</p>
                  {/* {blog.tag && <span className="card-tag">{blog.tag}</span>} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default BlogCarousel;