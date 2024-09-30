import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import vecrosoftLogo from '../../Assets/Images/logo.png'; 
const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";
const AdminSignIn = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await axios.post(
        `${baseURL}/api/admin/sign-in`,  
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      // console.log(res.data.token);
      if (res.status === 201 && res.data.token) {
        localStorage.setItem("adminfname", res.data.fname); 
        localStorage.setItem("adminlname", res.data.lname); 
        localStorage.setItem("admintoken", res.data.token); 
        localStorage.setItem("adminId", res.data.adminId); 
        
        setEmail("");
        setPassword("");
        setMessage("");
        toast.success("Admin Sign in successful!");
        navigate("/");  
      } else {
        toast.error("Invalid admin details");
        setMessage("Invalid admin details");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.message;
        setMessage(errorMsg);
        if (errorMsg.includes("password")) {
          toast.error("Wrong password");
        } else if (errorMsg.includes("email")) {
          toast.error("Wrong email");
        } else {
          toast.error(errorMsg);
        }
      } else {
        toast.error("An error occurred. Please try again.");
        setMessage("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-left">
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
      <div className="signin-right">
        <h2 className="signin-title"> Admin Sign In 🚀</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-field">
            <div className="signin-input-wrapper">
              <FaEnvelope className="signin-icon" />
              <input
                className="signin-input"
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signin-field">
            <div className="signin-input-wrapper">
              <FaLock className="signin-icon" />
              <input
                className="signin-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="signin-show-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button className="signin-button" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {message && <p className="signin-message">{message}</p>}

        <div className="signin-signup-link">
          <p>
            Don't have an admin account? Contact support for admin access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
