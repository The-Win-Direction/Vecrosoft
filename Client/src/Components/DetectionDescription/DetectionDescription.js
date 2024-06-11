


// DetectionDescription.js
import React from 'react';
import './DetectionDescription.css';
import LensImage from '../../../src/Assets/Images/lens.png';  
import LeafImage from '../../../src/Assets/Images/leaf-disease.png'; 
function DetectionDescription() {
  return (
    <div className="description-container">
      <div className="image-container">
        <img src={LeafImage} alt="Leaf Disease" className="leaf-image" />
        <img src={LensImage} alt="Lens" className="lens-image" />
      </div>
      <h1>Disease Detection Through Leaf</h1>
      <h2>100% Automatically and Free</h2>
    </div>
  );
}

export default DetectionDescription;
