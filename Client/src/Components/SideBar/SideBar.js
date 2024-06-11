import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FaSearch, FaBookmark, FaAd, FaInfoCircle, FaEllipsisH } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button"><FaSearch /></button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/saved" className="sidebar-link"><FaBookmark /> Saved</Link>
        <Link to="/ads" className="sidebar-link"><FaAd /> Ads</Link>
        <Link to="/about-us" className="sidebar-link"><FaInfoCircle /> About Us</Link>
        <Link to="/see-more" className="sidebar-link"><FaEllipsisH /> See More</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
