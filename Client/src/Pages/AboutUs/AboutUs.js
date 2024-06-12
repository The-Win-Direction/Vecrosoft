import React from 'react';
import Team from '../../Components/Team/Team';
import './about_us.css';
import Footer from '../../Components/Footer/Footer';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import OurValues from '../../Components/OurValues/OurValues';
import LookingAhead from '../../Components/LookingAhead/LookingAhead';

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, values, and the team behind our success.</p>
      </header>
      {/* Other sections of the About Us page */}
      <WhatWeDo />
      <OurValues />
      <LookingAhead />
      <Team />
      <Footer/>
    </div>
  );
}

export default AboutUs;
