import React from "react";
import Error from "./Pages/Error/Error";
import {  Routes, Route } from "react-router-dom";
import ProtectedRoute from "./SpecialRoutes/ProtectedRoutes";
import GuestRoute from "./SpecialRoutes/GuestRoutes";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import ParentComponentHeader from "./Components/ParentHeader/ParentComponent";
function App() {
  return (
    <div className="app-container">
      <ParentComponentHeader />
      <div className="content-container">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<Users />} /> 
            <Route path="/contact/" element={<Contact />} /> 
            <Route path="/posts/" element={<Posts />} /> 
            <Route path="/articles/" element={<Articles />} /> 
            <Route path="/admins" element={<Admins />} /> 

          </Route>
          <Route element={<GuestRoute />}>
            <Route path="/adminsign-up" element={<SignUp />} />
            <Route path="/adminsign-in" element={<SignIn />} />
            </Route>
            <Route path="*" element={<Error />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;