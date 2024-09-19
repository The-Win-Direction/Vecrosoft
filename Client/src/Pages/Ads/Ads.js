import React from 'react';
import SidebarDesktop from '../../Components/SidebarDesktop/SidebarDesktop';
import sayariVideo from '../../Assets/Videos/video.mp4';
import './Ads.css';

const Ads = () => {
  return (
    <div className="ads-container">
      <SidebarDesktop />
      <div className="ads-content">
        <h1>Advertisements</h1>
        <div className="video-container">
          <video controls>
            <source src={sayariVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      
        {/* Add more videos here */}
      </div>
    </div>
  );
}

export default Ads;
