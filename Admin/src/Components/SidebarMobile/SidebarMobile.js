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
          <Link to="/users" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Users
          </Link>
          <Link to="/posts" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Posts
          </Link>
          <Link to="/admins" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Admins
          </Link>
          
          <Link to="/articles" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Articles
          </Link>
          
          <Link to="/contact" className="sidebar-link" onClick={handleLinkClick}>
            <FaNewspaper/> Contact
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
