import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const email = "sharifulislam78009@gmail.com";

  return (
    <Layout>
      <Seo title="Contact Me" />
      <div className={styles.contactPage}>
        <header className={styles.pageHeader}>
          <h1>Let's Connect</h1>
          <p>Have a project idea or just want to chat? I'd love to hear from you. Fill out the form below or reach out through my social channels.</p>
        </header>

        <div className={styles.contactLayout}>
          {/* Left Side: Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Contact Details</h2>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4>Email</h4>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4>Location</h4>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/DeveloperShariful" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* আপনি চাইলে এখানে অন্যান্য সোশ্যাল মিডিয়ার লিংক ও আইকন যোগ করতে পারেন */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send a Message</h2>
            <form name="contact-v2" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact-v2" />
              <p style={{ display: 'none' }}><label>Don’t fill this out: <input name="bot-field" /></label></p>

              <div className={styles.formGroup}>
                <input type="text" id="name" name="name" className={styles.formInput} placeholder=" " required />
                <label htmlFor="name" className={styles.formLabel}>Full Name</label>
              </div>
              <div className={styles.formGroup}>
                <input type="email" id="email" name="email" className={styles.formInput} placeholder=" " required />
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
              </div>
              <div className={styles.formGroup}>
                <textarea id="message" name="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder=" " required></textarea>
                <label htmlFor="message" className={styles.formLabel}>Your Message</label>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;