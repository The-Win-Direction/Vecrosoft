import React, { useState, useEffect  } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import './HeaderMobile.css';
import axios from 'axios';
import logo from "../../Assets/Images/logo.png";
import defaultProfilePic from "../../Assets/Images/default.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faSearch, faComments, faBars, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const baseURL = "http://localhost:4000";


const HeaderMobile = ({ toggleSidebar }) => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const location = useLocation();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [createDropdownOpen, setCreateDropdownOpen] = useState(false);

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
