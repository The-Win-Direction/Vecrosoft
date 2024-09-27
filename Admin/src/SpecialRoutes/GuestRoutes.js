import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const GuestRoute = () => {
  const token = localStorage.getItem("userdatatoken");

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default GuestRoute;
