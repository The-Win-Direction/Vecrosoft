import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const baseURL = "http://localhost:4000";

const Home = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatistics = async () => {
      const token = localStorage.getItem("admintoken");

      if (!token) {
        navigate("/sign-in");
        return;
      }
      try {
        const response = await axios.get(`${baseURL}/api/admin/stats`, {
          headers: {
            Authorization: token,
          },
        });

        setAdmin(response.data.adminId);
        setStatistics(response.data.statistics); 
      } catch (error) {
        setError("Error fetching statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-home">
      <div className="admin-home-content">
        <h1>Admin Dashboard</h1>
        <h2>Statistics</h2>
        {statistics ? (
          <div className="statistics">
            <p>Total Users: {statistics.totalUsers}</p>
            <p>Total Posts: {statistics.totalPosts}</p>
            <p>Total Articles: {statistics.totalArticles}</p>
            <p>Total Admins: {statistics.totalAdmins}</p>
          </div>
        ) : (
          <p>No statistics available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
