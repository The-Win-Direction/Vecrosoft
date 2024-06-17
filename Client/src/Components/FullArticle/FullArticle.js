import React from 'react';
import { useParams } from 'react-router-dom';
import './FullArticle.css';
import { articles } from '../ArticleList/ArticleList';

const FullArticle = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.id === Number(articleId));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="full-article">
      <h1>{article.topic}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published Date:</strong> {article.date}</p>
      <img src={article.imageUrl} alt={article.topic} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

export default FullArticle;
