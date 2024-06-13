import React from 'react';
import Team from '../../Components/Team/Team';
import './about_us.css';
import Footer from '../../Components/Footer/Footer';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo';
import OurValues from '../../Components/OurValues/OurValues';
import LookingAhead from '../../Components/LookingAhead/LookingAhead';
import Testimonials from '../../Components/Testimonials/Testimonials'

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <p>Learn more about our journey, values, and the team behind our success.</p>
      </header>
      <WhatWeDo/>
      <OurValues />
      <Team />
      <LookingAhead />
      <Footer/>
    </div> 
  );
}

export default AboutUs;
