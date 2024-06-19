// Testimonials.js
import React from 'react';
import './Testimonials.css';
 import profilePic1 from '../../../src/Assets/Images/profilePic1.JPG'; 
 import profilePic2 from '../../../src/Assets/Images/profilePic2.jpg'; 
// import ProfilePic2 from './images/profile2.jpg';
// import ProfilePic3 from './images/profile3.jpg';
import about from '../../../src/Assets/Images/about.png'

function Testimonials() {
  return ( 
    <div className="testimonials-container">
      <h2>They love us. You will too.</h2>
      <div className="testimonial-boxes">
        <div className="testimonial-box">
          <p>"This product has changed the way I manage my farm. It's incredibly accurate and easy to use!"</p>
          <div className="profile">
            <img src={profilePic1} alt="Profile 1" className="profile-pic" />
            <div className="profile-info">
              <span className="profile-name">Dipa Joshi</span>
              <span className="profile-profession">Farmer</span>
            </div>
          </div>
        </div>
        <div className="testimonial-box">
          <p>"A must-have tool for every farmer. It helps me detect diseases early and take action quickly."</p>
          <div className="profile">
            <img src={profilePic2} alt="Profile 2" className="profile-pic" />
            <div className="profile-info">
              <span className="profile-name">Dipak Raj Giri</span>
              <span className="profile-profession">Agronomist</span>
            </div>
          </div>
        </div>
        <div className="testimonial-box">
          <p>"Highly recommended! The AI detection is spot on and it has saved me a lot of time and money."</p>
          <div className="profile">
            <img src={about} alt="Profile 3" className="profile-pic" />
            <div className="profile-info">
              <span className="profile-name">Menuka Paneru</span>
              <span className="profile-profession">Plant Pathologist</span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
