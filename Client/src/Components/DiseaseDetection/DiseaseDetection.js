import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiseaseDetection.css';
import axios from "axios";

function DiseaseDetection() {
  const [dragging, setDragging] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/predict/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
    } catch (error) {
      console.error("There was an error uploading the file!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        {file && (
          <div className="preview">
            <img src={URL.createObjectURL(file)} alt="Selected" className="preview-image" />
          </div>
        )}
        <button type="submit" className="predict-button">Predict</button>
        {prediction && <p className="prediction-result"> Disease: {prediction.predicted_disease} Probability: {prediction.probability.toFixed(2)}</p>

        }
      </div>
    </form>
  );
}

export default DiseaseDetection;
