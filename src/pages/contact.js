import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from '../styles/ContactPage.module.css';
import { FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // <<--- শুধু আইকনগুলো ইম্পোর্ট করা হয়েছে

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
            
            {/* === শুধুমাত্র এই সেকশনটি পরিবর্তন করা হয়েছে === */}
            <div className={styles.socialLinks}>
              <a href="https://github.com/DeveloperShariful" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://facebook.com/your-profile-url" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
            
          </div>

          {/* Right Side: Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send a Message</h2>
            <form 
              name="contact-v2" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/thank-you/"
            >
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