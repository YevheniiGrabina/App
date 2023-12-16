import React, { useState } from 'react';
import css from './Filter.module.css'; // Создайте CSS-модуль для стилей

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={css.filterContainer}>
      <h2></h2>
      <button
        className={selectedFilter === 'A' ? 'brand-1' : 'brand-1'}
        onClick={() => handleFilterChange('brand1')}
      >
        A
      </button>
      <button
        className={selectedFilter === 'brand2' ? css.selected : ''}
        onClick={() => handleFilterChange('brand2')}
      >
        B
      </button>
      {/* Добавьте другие фильтры по необходимости */}
    </div>
  );
};

export default Filter;