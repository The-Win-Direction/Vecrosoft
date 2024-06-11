// AI.js
import React from 'react';
import './ai.css';
import DiseaseDetection from '../../../src/Components/DiseaseDetection/DiseaseDetection';
import DetectionDescription from '../../../src/Components/DetectionDescription/DetectionDescription';


function AI() {
  return (
    <div className="ai-main-container">
      <DetectionDescription />
      <DiseaseDetection />
    </div>
  );
}

export default AI;
