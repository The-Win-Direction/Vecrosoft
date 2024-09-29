import React from "react";
import { Link } from "react-router-dom";
import './Error.css'
const Error = () => {
  return (
    <div className="error-main-div"> 
      <div>An error has occured</div>
      <div>
        <div>Don't have an account? &nbsp; Contact to the Officials.</div>
      </div>
      <div>
        <Link to="/sign-in">Already is an Admin? &nbsp;SignIn</Link>
      </div>
    </div>
  );
};

export default Error;