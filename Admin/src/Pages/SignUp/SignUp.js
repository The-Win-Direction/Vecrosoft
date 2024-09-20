import React from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import CommunityFeaturesComponent from '../../Components/CommunityFeatures/CommunityFeatures'
import './SignUp.css';

const SignUpPage = () => {
  return (
    <div className="signup-page">
        <SignUpForm />
        <CommunityFeaturesComponent />
      </div>
  );
};

export default SignUpPage;
 