import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderDesktop.css';

import logo from "../../Assets/Images/logo.png";
import profilePic from "../../Assets/Images/dipaPic.JPG"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faSearch, faComments, faPlus } from '@fortawesome/free-solid-svg-icons';

const HeaderDesktop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const { pathname } = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  }; 

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return ( 
    <header className="header-desktop">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
        <span className="site-title">Vecrosoft</span>
      </div>
      <nav className="nav">
      <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
        {/* <Link to="/" className="nav-link"> */}
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/article" className="nav-link">
          <span className="nav-text">Article</span>
        </Link>
        <Link to="/ai" className="nav-link">
          <span className="nav-text">Detect</span>
        </Link>
        <Link to="/chat" className="nav-link">
          <span className="nav-text">Chat</span>
        </Link>
        <Link to="/about-us" className="nav-link">
          <span className="nav-text">About</span>
        </Link>
        <Link to="/contact-us" className="nav-link">
          <span className="nav-text">Contact</span>
        </Link>
      </nav>
      <div className='nav header-right'>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <span className="nav-text">Create▼</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/create-article">Article</Link>
              <Link to="/create-post">Post</Link>
            </div>
          )} 
        </div>
        <div className="profile" onClick={toggleProfileDropdown}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          {profileDropdownOpen && (
            <div className="profile-dropdown-content">
              <Link to="/profile">See Profile</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/help">Help and Support</Link>
              <Link to="/logout">Log Out</Link>
            </div>
          )}
        </div> 
      </div>
    </header>
  );
};

export default HeaderDesktop;
