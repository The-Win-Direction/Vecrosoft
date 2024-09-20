import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePost from '../../Components/ArticlePost/ArticlePost';
import './ArticleList.css';
const baseURL = "http://localhost:4000";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const token = localStorage.getItem('userdatatoken');

      if (!token) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/api/get-articles`, {
          headers: {
            'Authorization': token,
          },
        });

        setUser(response.data.userId);
        setArticles(response.data.articles);
      } catch (error) {
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleDelete = (articleId) => {
    setArticles(articles.filter(article => article._id !== articleId));
  };

  return (
    <div className="articles-container">
      {articles.map(article => (
        <ArticlePost key={article._id} article={article} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ArticleList;
