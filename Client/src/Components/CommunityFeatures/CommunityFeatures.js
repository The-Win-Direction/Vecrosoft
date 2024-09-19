import React from 'react';
import './CommunityFeatures.css';
import { FaUsers, FaBookOpen, FaSearch, FaRobot, FaGraduationCap, FaBrain } from 'react-icons/fa'; // Import icons from FontAwesome

const CommunityFeaturesComponent = () => {
  return (
    <div className="community-features-container">
    <h1 className='center'>Join Our Community</h1>
    <div className='community-features' >
      <div className="feature-item">
        <div className="icon">
          <FaGraduationCap />
        </div>
        <div className="text"> 
          <h3>Discover Our Platform's Articles and Resources</h3>
          <p>Explore a wealth of educational content</p>
        </div>
      </div>
      <div className="feature-item">
        <div className="icon">
          <FaRobot />
        </div>
        <div className="text">
          <h3>Learn at Your Own Pace Through AI Facility</h3>
          <p>Utilize AI-driven learning tools</p>
        </div>
      </div>
      <div className="feature-item">
        <div className="icon">
          <FaUsers />
        </div>
        <div className="text">
          <h3>Engage with a Community of Learners</h3>
          <p>Share insights and experiences</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CommunityFeaturesComponent;
