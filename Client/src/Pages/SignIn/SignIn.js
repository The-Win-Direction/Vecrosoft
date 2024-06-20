import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/sign-in",
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

      console.log(res);
      if (res.data.status === 201) {
        localStorage.setItem("userdatatoken", res.data.result.token);

        setEmail("");
        setPassword("");
        setMessage("");
        toast.success("Sign in successful!");
        navigate("/");
      } else {
        toast.error("Invalid details");
        setMessage("Invalid details");
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
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">SignIn</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-field">
          <label className="signin-label">Email:</label>
          <input
            className="signin-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signin-field">
          <label className="signin-label">Password:</label>
          <div className="signin-password">
            <input
              className="signin-input"
              type={showPassword ? "text" : "password"}
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
        <div className="signin-forgot-password">
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
        <button className="signin-button" type="submit">
          SignIn
        </button>
      </form>
      {message && <p className="signin-message">{message}</p>}

      <div className="signin-signup-link">
        <p>
          Don't have an account? &nbsp;
          <Link to="/sign-up">SignUp here!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
