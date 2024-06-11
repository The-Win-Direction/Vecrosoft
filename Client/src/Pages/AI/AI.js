import React, { useState } from 'react';
import './ai.css';

function AI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [prediction, setPrediction] = useState("");

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePredict = async () => {
    if (selectedImage) {
      setPrediction("Predicting... Please wait.");
      // Implement prediction logic here
      // For demonstration, we will simulate a prediction with a timeout
      setTimeout(() => {
        setPrediction("Prediction result: This is an example result.");
      }, 2000);
    } else {
      setPrediction("No image selected.");
    }
  };

  return (
    <div className="ai-container">
      <h1>Plant Disease Classifier</h1>
      <h2>By Vecrosoft</h2>
      <div 
        className={`image-drag ${dragging ? 'dragging' : ''}`} 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop}
      >
        <p>Drag and drop image here</p>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ display: 'none' }} 
          id="file-input" 
        />
        <label htmlFor="file-input" className="browse-button">
          Browse image
        </label>
      </div>
      {selectedImage && (
        <div className="preview">
          <img src={selectedImage} alt="Selected" className="preview-image" />
        </div>
      )}
      <button onClick={handlePredict} className="predict-button">Predict</button>
      {prediction && <p className="prediction-result">{prediction}</p>}
    </div>
  );
}

export default AI;
