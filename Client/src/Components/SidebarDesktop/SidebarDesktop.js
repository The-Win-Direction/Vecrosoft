import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarDesktop.css';
import { FaSearch, FaBookmark, FaAd, FaInfoCircle, FaEllipsisH } from 'react-icons/fa';

const SidebarDesktop = () => {
  return (
    <div className="sidebar-dekstop-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button"><FaSearch /></button>
      </div>
      <nav className="sidebar-nav">
        <Link to="/saved" className="sidebar-link"><FaBookmark /> Saved</Link>
        <Link to="/ads" className="sidebar-link"><FaAd /> Ads</Link>
        <Link to="/" className="sidebar-link"><FaInfoCircle /> About Us</Link>
        <Link to="/see-more" className="sidebar-link"><FaEllipsisH /> hi</Link>
      </nav>
    </div>
  );
};

export default SidebarDesktop;
