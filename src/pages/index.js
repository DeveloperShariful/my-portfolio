import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import FadeInSection from '../components/FadeInSection';
import * as styles from '../styles/HomePage.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// Icon Imports
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaFigma, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiGatsby, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { GoGoal, GoLightBulb } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Testimonial Data (Placeholder)
const testimonialsData = [
  {
    text: "Working with Sharif was an absolute pleasure. He is not only a talented developer but also a great communicator. He delivered a product that exceeded our expectations on every level.",
    author: "Jane Doe",
    company: "CEO of ExampleCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    text: "Sharif's attention to detail and commitment to performance is outstanding. Our website's load time decreased by 50% after he optimized it. Highly recommended!",
    author: "John Smith",
    company: "CTO of Techify",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

const IndexPage = () => {
  const [text] = useTypewriter({
    words: ['I build things for the web.', 'I create modern user experiences.', 'I solve problems with code.'],
    loop: {}, typeSpeed: 100, deleteSpeed: 70,
  });

  return (
    <Layout>
      <Seo title="Sharif ul Islam | Full-Stack Web Developer" />
      
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <FadeInSection>
              <h1>Sharif ul Islam</h1>
              <h2>{text}<Cursor /></h2>
              <p>I build exceptional and accessible digital experiences for the web, from concept to deployment.</p>
              <div className={styles.heroButtons}>
                <Link to="/projects/" className={styles.ctaButton}>My Work</Link>
                <Link to="/contact/" className={styles.ctaButton}>Hire Me</Link>
              </div>
            </FadeInSection>
          </div>
          <div className={styles.heroImageContainer}>
            <FadeInSection>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto-format&fit-crop"
                  alt="Sharif ul Islam"
                  className={styles.heroImage}
                />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <FadeInSection>
        <section className={`${styles.about} ${styles.section}`}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="Sharif ul Islam" 
              className={styles.profileImage}
            />
          </div>
          <div>
            <h3>Passionate About Building Digital Experiences</h3>
            <p>
              From a simple line of code to a complete, scalable application, my passion lies in solving complex problems
              and creating intuitive, beautiful user interfaces. I believe in the power of technology to connect people
              and create value, and I'm dedicated to being a part of that creation.
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

      {/* 3. What I Do / Services Section */}
      <FadeInSection>
        <section className={`${styles.services} ${styles.section}`}>
          <h3 className={styles.sectionTitle}>What I Do</h3>
          <p className={styles.sectionSubtitle}>I help businesses grow by building beautiful, functional, and high-performance websites.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FaPaintBrush />
              <h4>Frontend Development</h4>
              <p>I create beautiful and responsive user interfaces using modern technologies like React, ensuring a seamless experience across all devices.</p>
            </div>
            <div className={styles.serviceCard}>
              <FaCode />
              <h4>Backend Development</h4>
              <p>I build robust and scalable server-side applications, APIs, and database solutions to power your web applications.</p>
            </div>
            <div className={styles.serviceCard}>
              <FaRocket />
              <h4>Performance & SEO</h4>
              <p>I optimize websites for blazing-fast load times and improved search engine rankings, which is crucial for user engagement and business success.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 4. Featured Projects Section */}
      <FadeInSection>
        <section className={`${styles.projects} ${styles.section}`}>
          <h3 className={styles.sectionTitle}>Featured Projects</h3>
          <p className={styles.sectionSubtitle}>Here are a few projects I've worked on recently that I'm proud of.</p>
          <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="E-commerce Platform" className={styles.projectImage} />
                <div className={styles.projectInfo}><h4>E-commerce Platform</h4><p>A full-featured e-commerce site with payment gateway and admin dashboard.</p><div className={styles.projectLinks}><a href="https://github.com" target="_blank" rel="noopener noreferrer">Live Demo</a><a href="https://github.com" target="_blank" rel="noopener noreferrer">Source Code</a></div></div>
              </div>
              <div className={styles.projectCard}>
                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" alt="Task Management App" className={styles.projectImage} />
                <div className={styles.projectInfo}><h4>Task Management App</h4><p>A responsive web app for managing daily tasks with user authentication.</p><div className={styles.projectLinks}><a href="https://github.com" target="_blank" rel="noopener noreferrer">Live Demo</a><a href="https://github.com" target="_blank" rel="noopener noreferrer">Source Code</a></div></div>
              </div>
              <div className={styles.projectCard}>
                <img src="https://images.unsplash.com/photo-1550089423-646714302636?q=80&w=1933&auto=format=fit&crop" alt="Portfolio Website" className={styles.projectImage} />
                <div className={styles.projectInfo}><h4>Portfolio Website</h4><p>This personal portfolio site, built with Gatsby for blazing fast performance.</p><div className={styles.projectLinks}><a href="https://github.com" target="_blank" rel="noopener noreferrer">Live Demo</a><a href="https://github.com" target="_blank" rel="noopener noreferrer">Source Code</a></div></div>
              </div>
            </div>
        </section>
      </FadeInSection>

      {/* 5. My Tech Stack Section */}
      <FadeInSection>
        <section className={`${styles.skills} ${styles.section}`}>
          <h3 className={styles.sectionTitle}>My Toolbox & Skills</h3>
          <p className={styles.sectionSubtitle}>The tools and technologies I use to bring ideas to life.</p>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}><SiJavascript /><p>JavaScript</p></div>
            <div className={styles.skillCard}><FaReact /><p>React</p></div>
            <div className={styles.skillCard}><FaNodeJs /><p>Node.js</p></div>
            <div className={styles.skillCard}><SiGatsby /><p>Gatsby</p></div>
            <div className={styles.skillCard}><SiNextdotjs /><p>Next.js</p></div>
            <div className={styles.skillCard}><SiTailwindcss /><p>Tailwind CSS</p></div>
            <div className={styles.skillCard}><FaFigma /><p>Figma</p></div>
            <div className={styles.skillCard}><FaGithub /><p>GitHub</p></div>
          </div>
        </section>
      </FadeInSection>
      
      {/* 6. Why Work With Me Section */}
      <FadeInSection>
        <section className={`${styles.whyWorkWithMe} ${styles.section}`}>
          <h3 className={styles.sectionTitle}>Why Work With Me?</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}><GoLightBulb /><h4>Pixel-Perfect Design</h4><p>I bring designs to life with a keen eye for detail, ensuring a perfect user interface.</p></div>
            <div className={styles.featureCard}><FaRocket /><h4>Performance First</h4><p>I build blazing-fast websites that provide a smooth user experience and rank well on Google.</p></div>
            <div className={styles.featureCard}><GoGoal /><h4>Goal-Oriented</h4><p>I focus on understanding your business goals to deliver a product that brings real value.</p></div>
          </div>
        </section>
      </FadeInSection>

      {/* 7. Testimonials Section */}
      <FadeInSection>
        <section className={`${styles.testimonials} ${styles.section}`}>
          <h3 className={styles.sectionTitle}>What People Say</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={styles.testimonialCard}>
                  <img src={testimonial.image} alt={testimonial.author} className={styles.testimonialImage}/>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <p className={styles.testimonialAuthor}>{testimonial.author}<span>{testimonial.company}</span></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </FadeInSection>

    </Layout>
  );
};

export default IndexPage;