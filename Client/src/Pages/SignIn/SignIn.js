import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import vecrosoftLogo from '../../Assets/Images/logo.png'; 
const baseURL = "http://localhost:4000";


const SignIn = () => {
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
        `${baseURL}/api/sign-in`,
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
      if (res.data.status === 201 && res.data.result.token) {
        localStorage.setItem("userdatatoken", res.data.result.token);
        localStorage.setItem("userId", res.data.result.userId);

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
        <h2 className="signin-title"> Welcome Back 😀</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-field">
            <div className="signin-input-wrapper">
              <FaEnvelope className="signin-icon" />
              <input
                className="signin-input"
                type="email"
                placeholder="Email"
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
          <div className="signin-forgot-password">
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
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
            Don't have an account? &nbsp;
            <Link to="/sign-up">Sign Up here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
