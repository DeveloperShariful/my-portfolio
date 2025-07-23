import React from 'react';
import * as styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>© {new Date().getFullYear()} Sharif ul Islam. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;