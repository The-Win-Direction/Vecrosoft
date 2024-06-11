import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from '../../../src/Components/ArticleList/ArticleList';
import FullArticle from '../../../src/Components/FullArticle/FullArticle';

const Article = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path=":articleId" element={<FullArticle />} />
    </Routes>
  );
};

export default Article;
