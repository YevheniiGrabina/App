// Brands.jsx
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Filter from '../Filtres/Filter';
import BrandList from '../BrandList/BrandList';
import brands from '../data/brands.json';
import css from './Pages.module.css';

const Brands = () => {
  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header cartItems={[]} removeFromCart={() => {}} />
      <div className={isHeaderFixed ? css.fixedHeader : ''}>
        {/* Ваш фиксированный хедер */}
      </div>
      <div className={css.contentContainer}>
        <Filter onFilterChange={handleFilterChange} />
        {/* Передаем выбранный фильтр в BrandList */}
        <BrandList items={brands} selectedFilter={selectedFilter} />
        
      </div>
    </div>
  );
};

export default Brands
