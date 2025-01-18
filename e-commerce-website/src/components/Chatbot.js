// src/components/Chatbot.js
import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';
import './Chatbot.css'; // Import your CSS file
import robotIcon from '../assets/icons/robot-icon.png'; // Ensure this path is correct

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <img src={robotIcon} alt="Chatbot" className="chatbot-icon" />
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <Chatbot
            steps={[
              {
                id: '1',
                message: 'Welcome to our interior design service! How can I help you today?',
                trigger: '2',
              },
              {
                id: '2',
                options: [
                  { value: 'book', label: 'I want to book a consultation', trigger: '3' },
                  { value: 'services', label: 'Tell me about your services', trigger: '4' },
                  { value: 'exit', label: 'Exit', trigger: '5' },
                ],
              },
              {
                id: '3',
                message: 'Great! Please visit our booking page.',
                end: true,
              },
              {
                id: '4',
                message: 'We offer a variety of interior design services tailored to your needs.',
                trigger: '2',
              },
              {
                id: '5',
                message: 'Thank you for visiting! Have a great day!',
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