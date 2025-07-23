import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo'; // SEO ইম্পোর্ট
import * as styles from '../styles/HomePage.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home | Creative Web Developer" />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Sharif ul Islam</h1>
        <h2>Creative Full-Stack Web Developer</h2>
        <p>
          I build high-performance, beautiful web applications from scratch. 
          My passion is to merge cutting-edge technology with elegant design to create unforgettable user experiences.
        </p>
        <div>
          <Link to="/projects/" className={styles.ctaButton}>My Work</Link>
          <Link to="/contact/" className={styles.ctaButton}>Hire Me</Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className={`${styles.about} ${styles.section}`}>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
          alt="Sharif ul Islam" 
          className={styles.profileImage}
        />
        <div>
          <h3>About Me</h3>
          <p>
            Hello! I'm Sharif, a developer based in Bangladesh. I have a deep love for web development,
            which I use to solve real-world problems. When I'm not coding, you can find me exploring new technologies,
            reading tech blogs, or enjoying a good cup of coffee.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`${styles.projects} ${styles.section}`}>
        <h3>Featured Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Project 1" className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Project Title One</h4>
              <p>A short, engaging description of what this project does and the problem it solves.</p>
              <div className={styles.projectLinks}>
                <a href="https://your-project-live-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/DeveloperShariful/your-project-repo" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" alt="Project 2" className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Project Title Two</h4>
              <p>A short, engaging description of what this project does and the problem it solves.</p>
              <div className={styles.projectLinks}>
                <a href="https://your-project-live-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/DeveloperShariful/your-project-repo" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
          <div className={styles.projectCard}>
            <img src="https://images.unsplash.com/photo-1550089423-646714302636?q=80&w=1933&auto=format&fit=crop" alt="Project 3" className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Project Title Three</h4>
              <p>A short, engaging description of what this project does and the problem it solves.</p>
              <div className={styles.projectLinks}>
                <a href="https://your-project-live-url.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/DeveloperShariful/your-project-repo" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className={`${styles.skills} ${styles.section}`}>
        <h3>My Tech Stack</h3>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h4>Frontend</h4>
            <ul><li>HTML5 & CSS3</li><li>JavaScript (ES6+)</li><li>React & Gatsby</li><li>Next.js</li></ul>
          </div>
          <div className={styles.skillCategory}>
            <h4>Backend</h4>
            <ul><li>Node.js & Express</li><li>Python & Django</li><li>REST & GraphQL APIs</li><li>MongoDB & PostgreSQL</li></ul>
          </div>
          <div className={styles.skillCategory}>
            <h4>Tools & Deployment</h4>
            <ul><li>Git & GitHub</li><li>Docker</li><li>Vercel & Netlify</li><li>CI/CD</li></ul>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className={`${styles.cta} ${styles.section}`}>
        <h3>Let's Build Something Amazing Together</h3>
        <p>Have a project in mind? I'm always open to discussing new ideas and opportunities.</p>
        <Link to="/contact/" className={styles.ctaButton}>Get In Touch</Link>
      </section>
    </Layout>
  );
};

export default IndexPage;