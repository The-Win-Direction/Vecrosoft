import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./HeaderMobile.css";
import logo from "../../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const HeaderMobile = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  let fname=localStorage.getItem("adminfname")
  let lname=localStorage.getItem("adminlname")

  const logOutClickHandler = (e) => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminfname");
    localStorage.removeItem("adminlname");
    navigate("/sign-in");
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <header className="header-mobile">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
      </div>
      <div className="nav header-right">
        <div className="profile" onClick={toggleProfileDropdown}>
          <p>{(fname||" ")+" "+(lname||" ")}</p>
          {profileDropdownOpen && (
            <div className="profile-dropdown-content">
              <div onClick={logOutClickHandler}>
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
      <nav className="nav">
        <div className="menu-bar" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="nav-icon nav-link" />
        </div>
      </nav>

     
    </header>
  );
};

export default HeaderMobile;
