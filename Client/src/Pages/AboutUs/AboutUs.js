import React from 'react';
import Team from '../../Components/Team/Team';
import './about_us.css';
import Footer from '../../Components/Footer/Footer'

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, values, and the team behind our success.</p>
      </header>
      {/* Other sections of the About Us page */}
      <Team />
      <Footer/>
    </div>
  );
}

export default AboutUs;
