import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/Footer.module.css';
import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const whatsappUrl = `https://wa.me/8801782733362`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <div className={styles.footerAbout}>
          <h3>Sharif ul Islam</h3>
          <p>A passionate web developer dedicated to building beautiful and functional web applications.</p>
          <div className={styles.contactEmail}>
            <a href="mailto:sharifulislam78009@gmail.com">sharifulislam78009@gmail.com</a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerSocial}> {/* <<<< এই ক্লাসটির নাম এখন CSS এর সাথে মিলবে */}
          <h4>Connect With Me</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/sshoriful.shoriful/" title="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={whatsappUrl} title="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/DeveloperShariful" title="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Sharif ul Islam. All Rights Reserved.</p>
        <p className={styles.builtWith}>
          Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> & 
          Hosted on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;