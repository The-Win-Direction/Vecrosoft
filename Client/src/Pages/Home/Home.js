import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../Components/SideBar/SideBar';
import Post from "../../Components/Post/Post";
import "./Home.css";
import { articles }  from '../../Components/ArticleList/ArticleList';
import ArticleCarousel from '../../Components/ArticleCarousel/ArticleCarousel';
import SidebarDekstop from '../../Components/SidebarDesktop/SidebarDesktop'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const[user,setUser]=useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('userdatatoken');
      
      if (!token) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://vecrosoft-server.onrender.com/api/get-posts', {
          headers: {
            'Authorization': token,
          },
        });
       
        console.log(response);
        setUser(response.data.userId)
        setPosts(response.data.posts);
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home">
      <div className="sidebar-container">
        <SidebarDekstop />
      </div>
      <div className="home-content">
        <ArticleCarousel articles={articles} />
        {posts.map((post) => (
          <Post key={post._id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
