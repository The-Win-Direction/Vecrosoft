import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminGuestRoute = () => {
  const adminToken = localStorage.getItem("admintoken");  
  return !adminToken ? <Outlet /> : <Navigate to="/" />;  
};

export default AdminGuestRoute;
