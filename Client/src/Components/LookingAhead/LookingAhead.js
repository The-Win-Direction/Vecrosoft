import React from 'react';
import './LookingAhead.css';
import { FaSeedling, FaGlobe, FaComments, FaRobot, FaHandHoldingHeart } from 'react-icons/fa';

function LookingAhead() {
  return (
    <div className="looking-ahead-container">
      <h2>Looking Ahead</h2>
      <div className="looking-ahead-content">
        <p>
          As we look to the future, we are excited about the potential to make a significant impact on the agricultural sector. Our goals include expanding our AI capabilities to cover a broader range of diseases and agricultural issues, enhancing our platform's features based on user feedback, and growing our community of users globally. We plan to continually improve our technology and services to support the evolving needs of the agricultural industry. By fostering innovation, sustainability, and collaboration, we aim to contribute to a more resilient and productive agricultural ecosystem. Join us as we work towards a future where technology and agriculture work hand in hand to create a better world for everyone involved.
        </p>
        <div className="goals-list"> 
          <div className="goal-item">
            <FaSeedling className="icon" />
            <h3>Innovation</h3>
          </div>
          <div className="goal-item"> 
            <FaGlobe className="icon" />
            <h3>Global Community</h3>
          </div>
          <div className="goal-item">
            <FaComments className="icon" /> 
            <h3>User Feedback</h3>
          </div>
          <div className="goal-item"> 
            <FaRobot className="icon" />
            <h3>AI Expansion</h3>
          </div>
          <div className="goal-item">
            <FaHandHoldingHeart className="icon" />
            <h3>Sustainability</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingAhead;
