import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiseaseDetection.css';

function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [prediction, setPrediction] = useState("");
  const navigate = useNavigate();

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
      // Simulate prediction logic
      setTimeout(() => {
        const simulatedPrediction = "Prediction result: This is an example result.";
        setPrediction(simulatedPrediction);
        navigate('/prediction', { state: { imageUrl: selectedImage, prediction: simulatedPrediction } });
      }, 2000);
    } else {
      setPrediction("No image selected.");
    }
  };

  return (
    <div className="disease-detection-container">
      <h3>Choose an image</h3>
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

export default DiseaseDetection;
