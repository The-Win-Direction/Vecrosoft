import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePost from '../../Components/ArticlePost/ArticlePost';
import './ArticleList.css';
import { useNavigate } from 'react-router-dom';
const baseURL = "http://localhost:4000";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [admin, setAdmin] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    const fetchArticles = async () => {
      const token = localStorage.getItem('admintoken');

      if (!token) {
        navigate("/sign-in");
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/api/admin/articles`, {
          headers: {
            'Authorization': token,
          },
        });

        setAdmin(response.data.adminId);
        setArticles(response.data.articles);
      } catch (error) {
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [navigate]);

  const handleDelete = async (articleId) => {
    try {
      const token = localStorage.getItem('admintoken');
      await axios.delete(`${baseURL}/api/admin/articles/${articleId}`, {
        headers: {
          'Authorization': token,
        },
      });
      setArticles(articles.filter(article => article._id !== articleId));
    } catch (error) {
      setError('Error deleting article');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-articles-container">
      {articles.map(article => (
        <ArticlePost key={article._id} article={article} admin={admin} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ArticleList;
