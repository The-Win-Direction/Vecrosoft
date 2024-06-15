import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from '../../../src/Components/ArticleList/ArticleList';
import FullArticle from '../../../src/Components/FullArticle/FullArticle';
import Sidebar from '../../Components/SideBar/SideBar';

const Article = () => {
  return (
    <div className='article-container'>
       <Sidebar/>
    
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path=":articleId" element={<FullArticle />} />
    </Routes>
    </div> 
  );
};

export default Article;
