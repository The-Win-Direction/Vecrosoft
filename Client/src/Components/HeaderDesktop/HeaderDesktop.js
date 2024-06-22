import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderDesktop.css';

import logo from "../../Assets/Images/logo.png";
import profilePic from "../../Assets/Images/dipaPic.JPG"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faSearch, faComments, faPlus } from '@fortawesome/free-solid-svg-icons';

const HeaderDesktop = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

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
        <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/article" active={location.pathname === '/article'}>Article</NavLink>
        <NavLink to="/ai" active={location.pathname === '/ai'}>Detect</NavLink>
        <NavLink to="/chat" active={location.pathname === '/chat'}>Chat</NavLink>
        <NavLink to="/about-us" active={location.pathname === '/about-us'}>About</NavLink>
        <NavLink to="/contact-us" active={location.pathname === '/contact-us'}>Contact</NavLink>
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

const NavLink = ({ to, active, children }) => (
  <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
    <span className="nav-text">{children}</span>
  </Link>
);

export default HeaderDesktop;
