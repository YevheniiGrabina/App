import React, { useState } from 'react';
import css from './Filter.module.css'; // Создайте CSS-модуль для стилей

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div className={css.filterContainer}>
      <h2>Фильтр по брендам:</h2>
      <button
        className={selectedFilter === 'ALL' ? css.selected : ''}
        onClick={() => handleFilterChange('ALL')}
      >
        ВСЕ
      </button>
      {alphabet.split('').map((letter) => (
        <button
          key={letter}
          className={selectedFilter === letter ? css.selected : ''}
          onClick={() => handleFilterChange(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
