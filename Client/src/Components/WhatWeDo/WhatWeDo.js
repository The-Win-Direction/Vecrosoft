import React from 'react';
import './WhatWeDo.css';
import { FaHandsHelping, FaRobot, FaLeaf, FaUsers } from 'react-icons/fa';

function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <h2>What We Do</h2>
      <p className="mission-text">
        Our mission is to revolutionize the agricultural and livestock farming sectors through innovative technology and community engagement. We provide a dynamic digital platform that connects farmers, agricultural students, researchers, and industry experts. By leveraging cutting-edge artificial intelligence (AI) for disease detection and a robust knowledge-sharing ecosystem, we empower users to enhance their agricultural practices.
      </p>
      <div className="features">
        <div className="feature">
          <FaLeaf className="icon" />
          <p>
            Our platform enables users to upload images of plants or animals, which are analyzed by our advanced AI system to detect diseases and provide valuable insights.
          </p>
        </div>
        <div className="feature">
          <FaRobot className="icon" />
          <p>
            By leveraging cutting-edge artificial intelligence (AI) for disease detection and a robust knowledge-sharing ecosystem, we empower users to enhance their agricultural practices.
          </p>
        </div>
        <div className="feature">
          <FaHandsHelping className="icon" />
          <p>
            Additionally, we facilitate seamless knowledge exchange and collaboration, helping users stay informed, make data-driven decisions, and improve their productivity and sustainability.
          </p>
        </div>
        <div className="feature">
          <FaUsers className="icon" />
          <p>
            We connect farmers, agricultural students, researchers, and industry experts in a vibrant community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
