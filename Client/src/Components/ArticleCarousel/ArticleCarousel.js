// ArticleCarousel.js
import React from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import './ArticleCarousel.css';

const ArticleCarousel = ({ articles }) => {
  return (
    <div className="carousel-container">
      {articles.map(article => (
        <ArticlePreview key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleCarousel;
