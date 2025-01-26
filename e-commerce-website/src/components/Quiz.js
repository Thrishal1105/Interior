// src/components/Quiz.js
import React, { useState } from 'react';
import './Quiz.css'; // Import your styles


const Quiz = () => {
  const [style, setStyle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (e) => {
    setStyle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h2>What is Your Interior Design Style?</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                value="Modern"
                checked={style === 'Modern'}
                onChange={handleOptionChange}
              />
              Modern
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Traditional"
                checked={style === 'Traditional'}
                onChange={handleOptionChange}
              />
              Traditional
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="Bohemian"
                checked={style === 'Bohemian'}
                onChange={handleOptionChange}
              />
              Bohemian
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="result">
          <h3>Your Design Style: {style}</h3>
          <p>Based on your choice, we recommend exploring our {style} design services!</p>
          <div className="result-image">
                {style === 'Modern' && <img src="/images/modern-design.jpg" alt="Modern Design" />}
                {style === 'Traditional' && <img src="/images/traditional-design.jpg" alt="Traditional Design" />}
                {style === 'Bohemian' && <img src="/images/bohemian-design.jpg" alt="Bohemian Design" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;