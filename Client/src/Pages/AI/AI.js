// AI.js
import React from 'react';
import './ai.css';
import DiseaseDetection from '../../../src/Components/DiseaseDetection/DiseaseDetection';
import DetectionDescription from '../../../src/Components/DetectionDescription/DetectionDescription';
import SampleImages from '../../Components/SampleImages/SampleImages';
import FeatureDescription from '../../Components/FeatureDescription/FeatureDescription';


function AI() {
  return (
    <div>
    <div className="ai-main-container">
    <DetectionDescription />
    <div className='detection-container-with-samples'>
      <DiseaseDetection />
      <SampleImages />
    </div>  
  </div>
  <FeatureDescription/>
  </div>
  );
}

export default AI;
