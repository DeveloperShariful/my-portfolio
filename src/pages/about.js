import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About Me | Sharif ul Islam" />
      
      <section className={styles.aboutSection}>
        <div className={styles.gridContainer}>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" // এখানে আপনার আসল ছবি দিন
            alt="Shariful Islam"
            className={styles.profileImage}
          />
          <div className={styles.textContent}>
            <h1>About Me</h1>
            <h2>Passionate Web Developer & Lifelong Learner</h2>
            <p>
              Hello! I'm Sharif ul Islam, a professional web developer driven by a passion for building elegant,
              efficient, and user-centric web applications. My journey into the world of coding began with a simple curiosity,
              which has since evolved into a full-fledged dedication to mastering the art and science of web development.
            </p>
            <p>
              I specialize in both front-end and back-end technologies, allowing me to bring ideas to life from concept
              to deployment. I thrive on challenges, enjoy solving complex problems, and am always eager to learn and
              adapt to the ever-evolving landscape of technology.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;