import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiseaseDetection.css';
import axios from 'axios';

function DiseaseDetection() {
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
      setSelectedImage(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handlePredict = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
          const response = await axios.post('http://127.0.0.1:8080/predict', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          setPrediction(response.data.result);
      } catch (error) {
          console.error('Error uploading the file', error);
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
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="preview-image" />
        </div>
      )}
      <button onClick={handlePredict} className="predict-button">Predict</button>
      {prediction && <p className="prediction-result">{prediction}</p>}
    </div>
  );
}

export default DiseaseDetection;
