import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from '../../../src/Components/ArticleList/ArticleList';
import FullArticle from '../../../src/Components/FullArticle/FullArticle';
import SidebarDesktop from '../../Components/SidebarDesktop/SidebarDesktop';
import './Article.css';

const Article = () => {
  return (
    <div className='article-container-main'>
      <div className='sidebar-container'>
        <SidebarDesktop />
      </div> 
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path=":articleId" element={<FullArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default Article;
