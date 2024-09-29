import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProfile from "../../../src/Components/UserProfile/UserProfile";
import UsersList from "../../../src/Components/UsersList/UsersList";
import "./Users.css";

const Users = () => {
  return (
    <div className="admin-users-container-main">
     
      <div className="content-container">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path=":userId" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Users;
