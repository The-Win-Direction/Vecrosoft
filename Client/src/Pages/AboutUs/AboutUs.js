import React from 'react';
import './about_us.css';
import about from '../../Assets/Images/about.png';


function AboutUs() {

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>Our Story</h1>
        <img src={about} alt="About Us" />
        <div className="questions">
        
        <ul>
        <hr></hr>
          <li> Who we are    </li>  <hr></hr>
          <li>  What we do </li> <hr></hr>
          <li>How to help</li>  <hr></hr>
          <li>Where we work</li>  <hr></hr>
        </ul>
        </div>

  

      </div>
    </div>
  );
}

export default AboutUs;
