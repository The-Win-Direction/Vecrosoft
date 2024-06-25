import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../Services/useAuth";
import "../Pages/SignIn/SignIn.css"
import vecrosoftLogo from '../Assets/Images/logo.png'; 
const ProtectedRoute = () => {
  const loading = useAuth();
  const token = localStorage.getItem("userdatatoken");

  if (loading) {
    return (
      <div className="signin-left">
        <h2 className="signin-title"></h2>
        <div className="vecrosoft-logo">
          <img src={vecrosoftLogo} alt="Vecrosoft" />
          <p>
            {"Vecrosoft".split("").map((letter, index) => (
              <span key={index} className="animated-letter">
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute; 
