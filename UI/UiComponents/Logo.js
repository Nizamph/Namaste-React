import React from 'react';
import smallLogo from './small-logo.png';
import styles from './Logo.module.css';
function Logo() {
  return (
    <div>
      <img
        src={smallLogo}
        alt='Small logo'
        className={styles.Logo}
      />
    </div>
  );
}

export default Logo;
