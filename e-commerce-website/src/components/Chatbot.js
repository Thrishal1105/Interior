// src/components/Chatbot.js
import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';
import './Chatbot.css'; // Import the updated CSS

import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import robotIcon from '../assets/icons/robot-icon.png'; // Ensure this path is correct

const ChatBotComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleBookingConsultation = () => {
    navigate('/booking'); // Navigate to the Booking page
  };

  const handleRedirect = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <img src={robotIcon} alt="Chatbot Icon" className="chatbot-icon" />
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <Chatbot
            headerTitle="Chat with us!"
            botAvatar={robotIcon}
            userAvatar={robotIcon}
            steps={[
              {
                id: '1',
                message: 'Hello! How can I assist you today?',
                trigger: '2',
              },
              {
                id: '2',
                options: [
                  { value: 'book-consultation', label: 'I want to book a consultation', trigger: '3' },
                  { value: 'services', label: 'Tell me about your services', trigger: 'services' },
                  { value: 'portfolio', label: 'Show me your portfolio', trigger: 'portfolio' },
                  { value: 'general-query', label: 'I have a general query', trigger: '4' },
                ],
              },
              {
                id: '3',
                message: 'Great! Let’s get you booked for a consultation.',
                trigger: '5',
              },
              {
                id: '5',
                component: (
                  <div>
                    <p>Click below to book your consultation:</p>
                    <button onClick={handleBookingConsultation}>Book Consultation</button>
                  </div>
                ),
                end: true,
              },
              {
                id: 'services',
                message: 'We offer a variety of interior design services tailored to your needs.',
                trigger: 'end',
              },
              {
                id: 'portfolio',
                message: 'Here is a link to our portfolio:',
                trigger: 'portfolioLink',
              },
              {
                id: 'portfolioLink',
                component: (
                  <div>
                    <p>Click below to view our portfolio:</p>
                    <button onClick={() => handleRedirect('/portfolio')}>View Portfolio</button>
                  </div>
                ),
                end: true,
              },
              {
                id: '4',
                message: 'Please describe your query, and I will assist you.',
                trigger: 'end',
              },
              {
                id: 'end',
                message: 'Thank you for reaching out!',
                end: true,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;