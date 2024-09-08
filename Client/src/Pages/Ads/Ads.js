import React from 'react';
import SidebarDesktop from '../../Components/SidebarDesktop/SidebarDesktop';
import FWU_University1 from '../../Assets/Videos/FWU_University1.mp4';
import FWU_University2 from '../../Assets/Videos/FWU_University2.mp4';
import FWU_University3 from '../../Assets/Videos/FWU_University3.mp4';
import './Ads.css';

const Ads = () => {
  return (
    <div className="ads-container">
      <SidebarDesktop />
      <div className="ads-content">
        <h1>Advertisements </h1>
        <div className="video-container">
          <video controls>
            <source src={FWU_University1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls>
            <source src={FWU_University2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls>
            <source src={FWU_University3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      
        {/* Add more videos here */}
      </div>
    </div>
  );
}

export default Ads;
