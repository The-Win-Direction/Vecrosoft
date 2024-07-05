import React from 'react';
import { useLocation } from 'react-router-dom';
import './PredictionResult.css';

const PredictionResult = () => {
  const location = useLocation();
  const { imageUrl, prediction } = location.state || {};

  return (
    <div className="prediction-result-container">
      <h1>Prediction Result</h1>
      {imageUrl && (
        <div className="preview">
          <img src={imageUrl} alt="Selected" className="preview-image" />
        </div>
      )}
      {prediction && <p className="prediction-text">{prediction}</p>}
    </div>
  );
};

export default PredictionResult;
