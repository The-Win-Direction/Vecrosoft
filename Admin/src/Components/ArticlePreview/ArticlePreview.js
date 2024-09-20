// ArticlePreview.js
import React from 'react';
import './ArticlePreview.css';
import { useNavigate } from 'react-router-dom';

const ArticlePreview = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div className="article-preview" onClick={handleClick}>
      <img src={article.imageUrl} alt={article.topic} className="preview-image" />
      <h3 className="preview-title">{article.topic.slice(0, 15)}...</h3>
      <p className="preview-content">{article.content.slice(0, 100)}...</p>
    </div>
  );
};

export default ArticlePreview;
