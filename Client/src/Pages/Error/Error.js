import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}> 
      <div>An error has occured</div>
      <div>
        <Link to="/sign-up">Don't have an account? &nbsp; SignUp</Link>
      </div>
      <div>
        <Link to="/sign-in">Already have an account? &nbsp;SignIn</Link>
      </div>
    </div>
  );
};

export default Error;