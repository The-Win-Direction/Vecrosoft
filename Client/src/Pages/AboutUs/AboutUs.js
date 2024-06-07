import React, { useState } from 'react';
import './about_us.css';
import about from '../../Assets/Images/about.png';

function AboutUs() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const handleQuestionClick = (question) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [question]: !prevVisibleAnswers[question]
    }));
  };

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>Our Story</h1>
        <img src={about} alt="About Us" />
        <div className="questions">
          <ul>
            <hr />
            <li onClick={() => handleQuestionClick('who')}>
              Who we are?
              {visibleAnswers['who'] && (
                <p className="answer">We are a company dedicated to ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('what')}>
              What we do?
              {visibleAnswers['what'] && (
                <p className="answer">We specialize in ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('how')}>
              How to help?
              {visibleAnswers['how'] && (
                <p className="answer">You can help by ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('where')}>
              Where we work?
              {visibleAnswers['where'] && (
                <p className="answer">Our offices are located in ...</p>
              )}
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
