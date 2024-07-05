import React from 'react';
import { useLocation } from 'react-router-dom';
import './FullArticle.css';
const baseURL = "http://localhost:4000";
const FullArticle = () => {
  const location = useLocation();
  const { article, user } = location.state || {};

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="full-article">
      <h1>{article.heading}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published Date:</strong> {new Date(article.createdDate).toLocaleDateString()}</p>
      <img src={`${baseURL}${article.imageUrl}`} alt={article.heading} className="article-image" />
      <pre>{article.content}</pre>
    </div>
  );
};

export default FullArticle;
