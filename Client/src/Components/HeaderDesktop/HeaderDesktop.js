import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './HeaderDesktop.css';
import axios from 'axios';
import logo from "../../Assets/Images/logo.png";
import defaultProfilePic from "../../Assets/Images/default.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faSearch, faComments, faPlus } from '@fortawesome/free-solid-svg-icons';
const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";

const HeaderDesktop = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
  const logOutClickHandler = (e) => {
    console.log("jhdsjk");
    localStorage.removeItem("userdatatoken");
    navigate("/sign-in");
  };

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("userdatatoken");
      if (!token) {
        navigate("/sign-in");
        return;
      }
      try {
        const userResponse = await axios.get(`${baseURL}/api/profile`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        });
        setProfilePic( `${baseURL}${userResponse.data.user.profile_pic_url}`)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [navigate]);

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
              <Link to="/your-profile">See Profile</Link>
              <Link to="/help-and-support">Help and Support</Link>
               <span onClick={logOutClickHandler}>  Log Out  </span> 
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
