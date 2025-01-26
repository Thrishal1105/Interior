// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Booking from './pages/Booking';
import Quiz from './components/Quiz'; // Import the Quiz component
import ChatBotComponent from './components/Chatbot'; // Import the Chatbot component
import Blog from './pages/Blog';
import TimelineSection from './components/TimelinesSection';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Add route for Quiz */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/timeline" element={<TimelineSection />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ChatBotComponent /> {/* Include the Chatbot component */}
    </Router>
  );
};

export default App;