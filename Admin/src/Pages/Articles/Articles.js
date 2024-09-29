import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticleList from "../../../src/Components/ArticleList/ArticleList";
import FullArticle from "../../../src/Components/FullArticle/FullArticle";
import "./Articles.css";

const Articles = () => {
  return (
    <div className="admin-article-container-main">
      <div className="content-container">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path=":articleId" element={<FullArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default Articles;
