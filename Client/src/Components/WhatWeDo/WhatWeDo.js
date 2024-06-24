import React from 'react';
import './WhatWeDo.css';
import { FaHandsHelping, FaRobot, FaLeaf, FaUsers } from 'react-icons/fa';
import missionPic1 from '../../Assets/Images/missionPic1.png';
import aiPic from '../../Assets/Images/aiPic.png';

function WhatWeDo() {
  return (

    <div className="what-we-do-container">
      <h2>What We Do</h2>

      <div className='what-we-do-content'> 
        <div className='our-mission'>
          <div className='mission-images'>
          <img src={missionPic1} alt="networking-image" className="mission-pic" />
          <img src={aiPic} alt="ai-image" className="mission-pic" />
          </div>
          <p className="mission-text">
            Our mission is to revolutionize the agricultural and livestock farming sectors through innovative technology and community engagement. We provide a dynamic digital platform that connects farmers, agricultural students, researchers, and industry experts. By leveraging cutting-edge artificial intelligence (AI) for disease detection and a robust knowledge-sharing ecosystem, we empower users to enhance their agricultural practices.
          </p>
        </div>
        <div className="features">
          <div className="feature">
            <FaLeaf className="icon" />
            Our platform enables users to upload images of plants or animals, which are analyzed by our advanced AI system to detect diseases and provide valuable insights.

          </div>
          <div className="feature">
            <FaRobot className="icon" />

            By leveraging cutting-edge artificial intelligence (AI) for disease detection and a robust knowledge-sharing ecosystem, we empower users to enhance their agricultural practices.

          </div>
          <div className="feature">
            <FaHandsHelping className="icon" />

            Additionally, we facilitate seamless knowledge exchange and collaboration, helping users stay informed, make data-driven decisions, and improve their productivity and sustainability.

          </div>
          <div className="feature">
            <FaUsers className="icon" />

            We connect farmers, agricultural students, researchers, and industry experts in a vibrant community.

          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
