import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from '../styles/AboutPage.module.css';
import { useInView } from 'react-intersection-observer';

// অ্যানিমেশনের জন্য একটি Helper কম্পোনেন্ট
const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${className} ${styles.fadeUp} ${inView ? styles.visible : ''}`}>
      {children}
    </div>
  );
};


const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About Me" />

      {/* Hero Section */}
      <AnimatedSection className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto.format&fit=crop" // আপনার আসল ছবির লিংক দিন
          alt="Sharif ul Islam"
          className={styles.profileImage} 
        />
        <h1>About Me</h1>
        <h2>Passionate Web Developer & Lifelong Learner</h2>
        <p>
          Hello! I'm Sharif ul Islam, a professional web developer driven by a passion for building elegant, efficient, and user-centric web applications. My journey into the world of coding began with a simple curiosity, which has since evolved into a full-fledged dedication to mastering the art and science of web development.
        </p>
      </AnimatedSection>
      
      {/* My Journey Section */}
      <AnimatedSection className={styles.section}>
        <h2 className={styles.sectionTitle}>My Journey</h2>
        <div className={styles.timeline}>
          {/* Timeline Item 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>2020 - Present</div>
              <h3>Freelance Web Developer</h3>
              <p>Working with diverse clients to build custom web solutions, from static portfolio sites to complex e-commerce platforms.</p>
            </div>
          </div>
          {/* Timeline Item 2 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>2019 - 2020</div>
              <h3>Computer Science Studies</h3>
              <p>Completed my degree in Computer Science, where I built a strong foundation in algorithms, data structures, and software engineering principles.</p>
            </div>
          </div>
           {/* Timeline Item 3 */}
           <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineDate}>2018</div>
              <h3>My First "Hello, World!"</h3>
              <p>Wrote my first line of code and instantly fell in love with the power of programming to bring ideas to life.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* My Philosophy Section */}
      <AnimatedSection className={styles.section}>
        <h2 className={styles.sectionTitle}>My Work Philosophy</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h4>User-First Approach</h4>
            <p>I believe the best websites are built with the user in mind. Every design and feature decision is guided by creating a seamless and intuitive user experience.</p>
          </div>
          <div className={styles.philosophyCard}>
            <h4>Clean & Scalable Code</h4>
            <p>I write code that is not only functional but also clean, maintainable, and scalable. This ensures long-term stability and makes future updates easier.</p>
          </div>
          <div className={styles.philosophyCard}>
            <h4>Continuous Learning</h4>
            <p>The world of web technology is constantly evolving. I am committed to continuous learning to stay updated with the latest trends and best practices.</p>
          </div>
        </div>
      </AnimatedSection>
       {/* === নতুন সেকশন: My Skills === */}
      <AnimatedSection className={styles.section}>
        <h2 className={styles.sectionTitle}>My Skills in Detail</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h4>Frontend Development</h4>
            <ul>
              <li>HTML5 & CSS3/Sass</li>
              <li>JavaScript (ES6+) & TypeScript</li>
              <li>React, Next.js, Gatsby</li>
              <li>State Management (Redux, Zustand)</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h4>Backend Development</h4>
            <ul>
              <li>Node.js & Express.js</li>
              <li>Database (MongoDB, PostgreSQL)</li>
              <li>RESTful & GraphQL APIs</li>
              <li>Authentication & Authorization</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h4>Tools & DevOps</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD (GitHub Actions)</li>
              <li>Vercel, Netlify, AWS</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
      
      {/* === নতুন সেকশন: My Workflow === */}
      <AnimatedSection className={styles.section}>
        <h2 className={styles.sectionTitle}>My Workflow</h2>
        <ol className={styles.workflowList}>
          <li className={styles.workflowItem}>
            <h4>1. Discovery & Planning</h4>
            <p>I start by understanding the project goals, target audience, and key requirements to create a solid strategic plan.</p>
          </li>
          <li className={styles.workflowItem}>
            <h4>2. UI/UX Design</h4>
            <p>I create intuitive and visually appealing wireframes and mockups to ensure a seamless user experience.</p>
          </li>
          <li className={styles.workflowItem}>
            <h4>3. Development & Coding</h4>
            <p>I write clean, efficient, and scalable code, following best practices to bring the design to life.</p>
          </li>
          <li className={styles.workflowItem}>
            <h4>4. Testing & Deployment</h4>
            <p>I rigorously test the application for bugs and performance issues before deploying it to a live server.</p>
          </li>
        </ol>
      </AnimatedSection>

      {/* === নতুন সেকশন: Outside of Code === */}
      <AnimatedSection className={styles.section}>
        <div className={styles.interests}>
          <h2 className={styles.sectionTitle}>Outside of Code</h2>
          <p>When I'm not at my computer, I enjoy exploring the outdoors, trying out new recipes in the kitchen, and reading books on technology and science fiction. These activities help me stay creative and bring new perspectives to my work.</p>
        </div>
      </AnimatedSection>

    </Layout>
  );
};

export default AboutPage;