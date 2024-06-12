import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './about_us.css';
import about from '../../Assets/Images/about.png';

function AboutUs() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const handleQuestionClick = (question) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [question]: !prevVisibleAnswers[question]
    }));
  };
  const history = useNavigate();
  const validUser = async () => {
    let token = localStorage.getItem("userdatatoken");
    //console.log(token);
    const res = await fetch("http://localhost:4000/Validation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await res.json();
    console.log(data);
    if ((data.status == 401 || !data)) {
      history("*");

    }else{
      history("/about-us")
    }
  };

  useEffect(() => {
    validUser();
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>Agripath Connect</h1>
        <img src={about} alt="About Us" />
        <div className="overlay-text">A digital AI powered, networking platform for agricultural community</div>
        <div className="questions">
          <ul>
            <hr />
            <li onClick={() => handleQuestionClick('who')}>
              Who we are?
              {visibleAnswers['who'] && (
                <p className="answer">We are a company dedicated to ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('what')}>
              What we do?
              {visibleAnswers['what'] && (
                <p className="answer">We specialize in ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('how')}>
              How to help?
              {visibleAnswers['how'] && (
                <p className="answer">You can help by ...</p>
              )}
            </li>
            <hr />
            <li onClick={() => handleQuestionClick('where')}>
              Where we work?
              {visibleAnswers['where'] && (
                <p className="answer">Our offices are located in ...</p>
              )}
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
