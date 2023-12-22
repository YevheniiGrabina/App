import React, { useState } from 'react';
import css from './Filter.module.css'; // Создайте CSS-модуль для стилей

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const alphabet = 'ABCDEFHLMPRST';

  return (
    <div className={css.filterContainer}>
      <button
        className={selectedFilter === 'ALL' ? css.selected : ''}
        onClick={() => handleFilterChange('ALL')}
      >
        ВСІ
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
