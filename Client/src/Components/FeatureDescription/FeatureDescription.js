// FeatureDescription.js
import React from 'react';
import './FeatureDescription.css';
import featureImage from '../../../src/Assets/Images/featureImage.png';


function FeatureDescription() {
    return (
      <div className="feature-description-container">
        <div className="feature-text">
          <h1>Detect Disease Automatically in few Seconds with One Click</h1>
          <p>
            Thanks to Vecrosoft's clever AI, you can slash detection time and have more fun! <br></br><br></br> Our advanced AI technology ensures that you can quickly and accurately detect plant diseases, giving you more time to enjoy your gardening and farming activities.
          </p>
        </div>
        <div className="feature-image-container">
          <img src={featureImage} alt="AI Feature" className="feature-image" />
        </div>
      </div>
    );
  }
  
  export default FeatureDescription;