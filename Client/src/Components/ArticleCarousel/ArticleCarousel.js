import React, { useRef, useState, useEffect } from 'react';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import './ArticleCarousel.css';

const ArticleCarousel = ({ articles }) => {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    if (carouselRef.current) {
      handleScroll();
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  }; 

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="carousel-wrapper">
      {showLeftArrow && <button className="arrow left-arrow" onClick={scrollLeft}>‹</button>}
      <div className="carousel-container" ref={carouselRef}>
        {articles.map(article => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
      {showRightArrow && <button className="arrow right-arrow" onClick={scrollRight}>›</button>}
    </div>
  );
};

export default ArticleCarousel;
 