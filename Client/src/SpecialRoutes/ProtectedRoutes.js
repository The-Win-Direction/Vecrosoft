import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../Services/useAuth';

const ProtectedRoute = () => {
  const loading = useAuth();
  const token = localStorage.getItem("userdatatoken");

  if (loading) {
    return <div>Loading...</div>; 
  }

  return token ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute; 
