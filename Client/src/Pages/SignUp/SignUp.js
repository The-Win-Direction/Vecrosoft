import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:4000/api/sign-up",
        {
          fname,
          lname,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFname("");
      setLname("");
      setEmail("");
      setPassword("");

      console.log(res.data.message);
      toast.success(res.data.message);
      setMessage(res.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error);
        setMessage(error.response.data.error);
      } else {
        alert("An error occurred. Please try again.");
        setMessage("An error occurred. Please try again.");
      }
      console.error("Error during SignUp:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">SignUp</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-field">
          <label className="signup-label">First Name:</label>
          <input
            className="signup-input"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="signup-field">
          <label className="signup-label">Last Name:</label>
          <input
            className="signup-input"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="signup-field">
          <label className="signup-label">Email:</label>
          <input
            className="signup-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="signup-field">
          <label className="signup-label">Password:</label>
          <div className="signup-password">
            <input
              className="signup-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              className="signup-show-password"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button className="signup-button" type="submit">
          SignUp
        </button>
      </form>
      {message && (
        <p className="signup-message">
          {message}
        </p>
      )}
      <div className="signup-signin-link">
        <p>
          Already have an account? &nbsp;
          <Link to="/Sign-in">SignIn here!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
