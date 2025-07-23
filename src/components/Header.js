import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css'; // এই পথটি এখন শতভাগ সঠিক

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Shariful Islam</Link>
      </div>
      <nav>
        <Link to="/" activeClassName={styles.activeLink}>Home</Link>
        <Link to="/about/" activeClassName={styles.activeLink}>About</Link>
        <Link to="/projects/" activeClassName={styles.activeLink}>Projects</Link>
        <Link to="/contact/" activeClassName={styles.activeLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;