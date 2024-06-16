import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../Assets/Images/logo.png";
import profilePic from "../../Assets/Images/dipaPic.JPG"; 

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
        <span className="site-title">Vecrosoft</span>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/article" className="nav-link">Article</Link>
        <Link to="/ai" className="nav-link">Detect</Link>
        <Link to="/chat" className="nav-link">Chat</Link>
      </nav>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Create ▼</button>
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

export default Header;
