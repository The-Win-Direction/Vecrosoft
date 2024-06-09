
import React, { useState } from 'react';
import './ai.css';

function AI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragging, setDragging] = useState(false);

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

  const handlePredict = () => {
    if (selectedImage) {
      // Implement prediction logic here
      console.log('Predicting for:', selectedImage);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div className="container">
      <h1>Plant Disease Classifier With AI</h1>
      <h2>Made By Vecrosoft</h2>
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
      <button onClick={handlePredict}>Predict</button>
    </div>
  );
}

export default AI;
