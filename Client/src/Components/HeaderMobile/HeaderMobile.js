import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMobile.css';
import logo from "../../Assets/Images/logo.png";
import profilePic from "../../Assets/Images/dipaPic.JPG"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faSearch, faComments, faBars, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const HeaderMobile = ({ toggleSidebar }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [createDropdownOpen, setCreateDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const toggleCreateDropdown = () => {
    setCreateDropdownOpen(!createDropdownOpen);
  };

  return (
    <header className="header-mobile">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
        <div className="menu-bar" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div> 
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
        </Link>
        <Link to="/article" className="nav-link">
          <FontAwesomeIcon icon={faNewspaper} className="nav-icon" />
        </Link>
        <Link to="/ai" className="nav-link">
          <FontAwesomeIcon icon={faSearch} className="nav-icon" />
        </Link>
        <Link to="/chat" className="nav-link">
          <FontAwesomeIcon icon={faComments} className="nav-icon" />
        </Link>
        <div className="create-dropdown" onClick={toggleCreateDropdown}>
          <FontAwesomeIcon icon={faPlusSquare} className="nav-icon" />
          {createDropdownOpen && (
            <div className="create-dropdown-content">
              <Link to="/create-article">Create Article</Link>
              <Link to="/create-post">Create Post</Link>
            </div>
          )}
        </div>
      </nav>
      <div className='nav header-right'>
        <div className="profile" onClick={toggleProfileDropdown}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          {profileDropdownOpen && (
            <div className="profile-dropdown-content">
              <Link to="/your-profile">See Profile</Link>
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

export default HeaderMobile;
