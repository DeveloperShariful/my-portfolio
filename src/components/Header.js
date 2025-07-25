import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'; // ১. StaticImage ইম্পোর্ট করা হয়েছে
import * as styles from './Header.module.css';
import { FiMenu, FiX } from 'react-icons/fi'; // মেনু এবং ক্লোজ আইকন

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // স্ক্রিন সাইজ পরিবর্তন হলে মেনু বন্ধ করার জন্য
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <StaticImage
            src="../images/logo.png" 
            alt="Webmaster Logo"
            placeholder="blurred"
            layout="fixed"
            width={180}
          />
        </Link>
      </div>
      
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <Link to="/" activeClassName={styles.activeLink}>Home</Link>
        <Link to="/about/" activeClassName={styles.activeLink}>About</Link>
        <Link to="/projects/" activeClassName={styles.activeLink}>Projects</Link>
        <Link to="/contact/" activeClassName={styles.activeLink}>Contact</Link>
      </nav>

      <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
};

export default Header;