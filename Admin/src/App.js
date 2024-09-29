import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./SpecialRoutes/ProtectedRoutes";
import GuestRoute from "./SpecialRoutes/GuestRoutes";
import ParentComponentHeader from "./Components/ParentHeader/ParentComponent";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Contact from "./Pages/Contact/Contact";
import Posts from "./Pages/Posts/Posts";
import Articles from "./Pages/Articles/Articles";
import Admins from "./Pages/Admins/Admins";
import SignIn from "./Pages/SignIn/SignIn";
import Error from "./Pages/Error/Error";

import "./App.css"
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
            <Route path="/articles/*" element={<Articles />} />
            <Route path="/admins" element={<Admins />} />
          </Route>

          <Route element={<GuestRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
