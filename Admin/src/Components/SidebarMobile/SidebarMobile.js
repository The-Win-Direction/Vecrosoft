import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarMobile.css';
import { FaBars, FaSearch, FaBookmark, FaAd, FaInfoCircle, FaEllipsisH, FaUser, FaEnvelope, FaHome, FaNewspaper, FaDiagnoses, FaComments, FaCommentDots } from 'react-icons/fa';

const SidebarMobile = ({ isOpen, closeSidebar }) => {
  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <div className='sidebar-main'>

    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-mobile-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button"><FaSearch /></button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={handleLinkClick}>
            <FaHome /> Home
          </Link>
          <Link to="/article" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Article
          </Link>
          <Link to="/ai" className="sidebar-link" onClick={handleLinkClick}>
            <FaDiagnoses /> Detect
          </Link>
          <Link to="/chat" className="sidebar-link" onClick={handleLinkClick}>
            <FaCommentDots /> Chat
          </Link>
          <Link to="/about-us" className="sidebar-link" onClick={handleLinkClick}>
            <FaUser /> About Us 
          </Link>
          <Link to="/contact-us" className="sidebar-link" onClick={handleLinkClick}>
            <FaEnvelope/> Contact
          </Link>
          <Link to="/saved" className="sidebar-link" onClick={handleLinkClick}>
            <FaBookmark /> Saved
          </Link>
          <Link to="/ads" className="sidebar-link" onClick={handleLinkClick}>
            <FaAd /> Ads
          </Link>
          <Link to="/" className="sidebar-link" onClick={handleLinkClick}>
            <FaEllipsisH /> See More
          </Link>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default SidebarMobile;
