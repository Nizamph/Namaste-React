import React from 'react';
import styles from './SearchBar.module.css';
function SearchBar() {
  return (
    <div>
      <input
        type='text'
        placeholder='search'
        className={styles.search}
      />
      <button
        type='submit'
        className={styles.button}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
