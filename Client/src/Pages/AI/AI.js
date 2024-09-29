// AI.js
import React from 'react';
import './ai.css';
import DiseaseDetection from '../../../src/Components/DiseaseDetection/DiseaseDetection';
import DetectionDescription from '../../../src/Components/DetectionDescription/DetectionDescription';
import FeatureDescription from '../../Components/FeatureDescription/FeatureDescription';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';


function AI() {  
  return (
    <div className='ai-main-container'>
    <div className="ai-detect-container">
    <DetectionDescription />
    <div className='detection-container-with-samples'>
      <DiseaseDetection />
    </div>  
  </div>
  <FeatureDescription/> 
  <Testimonials />
  <Footer />
  </div>
  );
}

export default AI;
