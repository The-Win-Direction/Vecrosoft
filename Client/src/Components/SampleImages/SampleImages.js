import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SampleImages.css';
import sampleImage1 from '../../../src/Assets/Images/sampleImage1.png';
import sampleImage2 from '../../../src/Assets/Images/sampleImage2.png';
import sampleImage3 from '../../../src/Assets/Images/sampleImage3.png';
import sampleImage4 from '../../../src/Assets/Images/sampleImage4.png';

function SampleImages() {
  const navigate = useNavigate();

  const handleImageClick = (imageUrl) => {
    // Simulate prediction logic
    const simulatedPrediction = "Prediction result: This is an example result.";
    navigate('/prediction', { state: { imageUrl, prediction: simulatedPrediction } });
  };

  return (
    <div className="sample-images-container">
      <p>No image? <br /> Try one of these:</p>
      <div className="sample-images">
        <img 
          src={sampleImage1} 
          alt="Sample 1" 
          className="sample-image" 
          onClick={() => handleImageClick(sampleImage1)} 
        />
        <img 
          src={sampleImage2} 
          alt="Sample 2" 
          className="sample-image" 
          onClick={() => handleImageClick(sampleImage2)} 
        />
        <img 
          src={sampleImage3} 
          alt="Sample 3" 
          className="sample-image" 
          onClick={() => handleImageClick(sampleImage3)} 
        />
        <img 
          src={sampleImage4} 
          alt="Sample 4" 
          className="sample-image" 
          onClick={() => handleImageClick(sampleImage4)} 
        />
      </div>
    </div>
  );  
}

export default SampleImages;
