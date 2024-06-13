import React from 'react';
import './OurValues.css';
import { FaLightbulb, FaHandsHelping, FaLeaf, FaHandshake, FaChartLine } from 'react-icons/fa';

function OurValues() {
  return (
    <div className="values-container">
      <h2>Our Values</h2>
      <div className="values-list">
        <div className="value-item">
          <FaLightbulb className="icon" /> 
          <h3>Innovation</h3>
          <p>We continuously strive to incorporate the latest technologies and methodologies to provide the most effective solutions for the agricultural community.</p>
        </div>
        <div className="value-item">
          <FaHandsHelping className="icon" />
          <h3>Collaboration</h3>
          <p>We believe in the power of collective knowledge and foster a community where users can share expertise, experiences, and best practices.</p>
        </div>
        <div className="value-item">
          <FaLeaf className="icon" />
          <h3>Sustainability</h3>
          <p>We are committed to promoting sustainable agricultural practices that benefit both the environment and the farming community.</p>
        </div>
        <div className="value-item">
          <FaHandshake className="icon" />
          <h3>Integrity</h3>
          <p>We maintain the highest standards of transparency, honesty, and ethical conduct in all our dealings.</p>
        </div>
        <div className="value-item">
          <FaChartLine className="icon" />
          <h3>Empowerment</h3>
          <p>We aim to empower farmers and agricultural professionals by providing them with the tools, resources, and knowledge they need to succeed.</p>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
