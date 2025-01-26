// src/pages/Blog.js
import React from 'react';
import './Blog.css'; // Import the CSS for styling

const blogs = [
  {
    title: "Stylish Modern Staircase Design Ideas",
    date: "Jan 17 2025",
    image: "/images/blog4.jpg", // Replace with actual image path
    content: "Staircases have always been a functional part of every home. Up to a certain point it was a...",
  },
  {
    title: "Brilliant Wardrobe Design Ideas that...",
    date: "Dec 31 2024",
    image: "/images/blog2.jpg", // Replace with actual image path
    content: "Good order is the foundation of all...",
  },
  {
    title: "2025's Best Modern Home Lighting...",
    date: "Jan 11 2025",
    image: "/images/blog1.jpg", // Replace with actual image path
    content: "Darkness cannot drive out darkness; only light can do that. - Martin Luther King Jr.",
  },
  {
    title: "New Homeowner's Guide to Choosing...",
    date: "Dec 14 2024",
    image: "/images/blog3.jpg", // Replace with actual image path
    content: "Step into the world of contemporary interior design...",
  },
  {
    title: "How to Create a Functional Modern...",
    date: "Dec 28 2024",
    image: "/images/blog5.jpg", // Replace with actual image path
    content: "Every design decision should be made with a purpose, every element should have a reason...",
  },
  {
    title: "The Ultimate Guide to Modern...",
    date: "Jan 4 2025",
    image: "/images/blog6.jpg", // Replace with actual image path
    content: "The kitchen is the heart of the home, and it is also one of the most...",
  },
  {
    title: "The Benefits of Using Modular...",
    date: "Jan 11 2025",
    image: "/images/blog2.jpg", // Replace with actual image path
    content: "Modular furniture is a great way to create a functional and modern space without breaking the bank.",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-entry" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-description">{blog.content}</p>
              <a href="/" className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;