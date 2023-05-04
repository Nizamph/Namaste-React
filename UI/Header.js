import React from 'react';
import styles from './Header.module.css';
import Logo from './UiComponents/Logo';
import SearchBar from './UiComponents/SearchBar';
import UserIcon from './UiComponents/UserIcon';
function Header() {
  return (
    <div className={styles.Header}>
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
}

export default Header;
