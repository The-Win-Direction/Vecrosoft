import React from 'react';
import { useParams } from 'react-router-dom';
import './FullArticle.css';

const articles = [
  {
    id: 1,
    topic: 'The Rise of AI in Agriculture',
    author: 'John Doe',
    date: '2024-06-01',
    imageUrl: 'https://via.placeholder.com/400x150',
    content: 'Content of the article The Rise of AI in Agriculture...',
  },
  {
    id: 2,
    topic: 'Understanding Plant Diseases',
    author: 'Jane Smith',
    date: '2024-05-28',
    imageUrl: 'https://via.placeholder.com/400x150',
    content: 'Content of the article Understanding Plant Diseases...',
  },
  {
    id: 3,
    topic: 'Innovations in Crop Management',
    author: 'Emily Johnson',
    date: '2024-05-20',
    imageUrl: 'https://via.placeholder.com/400x150',
    content: 'Content of the article Innovations in Crop Management...',
  },
];

const FullArticle = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.id === parseInt(articleId));

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
