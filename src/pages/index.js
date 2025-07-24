import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import FadeInSection from '../components/FadeInSection';
import * as styles from '../styles/HomePage.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { GoGoal, GoLightBulb, GoRocket } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";

const IndexPage = () => {
  const [text] = useTypewriter({
    words: ['Creative Full-Stack Developer', 'Problem Solver', 'Lifelong Learner'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <Layout>
      <Seo title="Home | Creative Web Developer" />
      
      {/* 1. Hero Section */}
      <FadeInSection>
        <section className={styles.hero}>
          <h1>Sharif ul Islam</h1>
          <h2>
            <span>{text}</span>
            <Cursor />
          </h2>
          <p>
            I build high-performance, beautiful web applications from scratch. 
            My passion is to merge cutting-edge technology with elegant design to create unforgettable user experiences.
          </p>
          <div>
            <Link to="/projects/" className={styles.ctaButton}>My Work</Link>
            <Link to="/contact/" className={styles.ctaButton}>Hire Me</Link>
          </div>
        </section>
      </FadeInSection>

      {/* 2. About Me Section */}
      <FadeInSection>
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
            <ul className={styles.strengths}>
              <li><FiCheckCircle /> Clean & Efficient Code</li>
              <li><FiCheckCircle /> Responsive Design</li>
              <li><FiCheckCircle /> Problem Solving Mindset</li>
              <li><FiCheckCircle /> Fast Performance</li>
            </ul>
          </div>
        </section>
      </FadeInSection>

      {/* 3. Featured Projects Section (যেমন ছিল তেমনই) */}
      <FadeInSection>
          <section className={`${styles.projects} ${styles.section}`}>
              {/* আপনার প্রজেক্ট সেকশনের কোড এখানে থাকবে */}
          </section>
      </FadeInSection>

      {/* 4. Skills Section (আইকনসহ) */}
      <FadeInSection>
        <section className={`${styles.skills} ${styles.section}`}>
          <h3>My Tech Stack</h3>
          <div className={styles.skillGrid}>
            <div className={styles.skillItem}><SiJavascript /><p>JavaScript</p></div>
            <div className={styles.skillItem}><FaReact /><p>React</p></div>
            <div className={styles.skillItem}><FaNodeJs /><p>Node.js</p></div>
            <div className={styles.skillItem}><SiGatsby /><p>Gatsby</p></div>
            <div className={styles.skillItem}><SiNextdotjs /><p>Next.js</p></div>
            <div className={styles.skillItem}><SiMongodb /><p>MongoDB</p></div>
            <div className={styles.skillItem}><FaGithub /><p>Git & GitHub</p></div>
            <div className={styles.skillItem}><FaDocker /><p>Docker</p></div>
          </div>
        </section>
      </FadeInSection>

      {/* 5. নতুন সেকশন: Why Work With Me? */}
      <FadeInSection>
        <section className={`${styles.whyWorkWithMe} ${styles.section}`}>
          <h3>Why Work With Me?</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <GoLightBulb />
              <h4>Pixel-Perfect Design</h4>
              <p>I bring designs to life with a keen eye for detail, ensuring a perfect user interface.</p>
            </div>
            <div className={styles.featureCard}>
              <GoRocket />
              <h4>Performance First</h4>
              <p>I build blazing-fast websites that provide a smooth user experience and rank well on Google.</p>
            </div>
            <div className={styles.featureCard}>
              <GoGoal />
              <h4>Goal-Oriented</h4>
              <p>I focus on understanding your business goals to deliver a product that brings real value.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 6. Final Call to Action Section (উন্নত ডিজাইন) */}
      <FadeInSection>
        <section className={`${styles.cta} ${styles.section}`}>
          <h3>Let's Build Something Amazing Together</h3>
          <p>Have a project in mind? I'm always open to discussing new ideas and opportunities.</p>
          <Link to="/contact/" className={styles.ctaButton}>Get In Touch</Link>
        </section>
      </FadeInSection>
    </Layout>
  );
};

export default IndexPage;