import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
    </label>
  );
};

export default Filter;