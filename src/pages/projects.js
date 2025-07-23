import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import * as styles from '../styles/ProjectPage.module.css'; // নতুন স্টাইল ফাইল

// আপনি আপনার প্রজেক্টের তথ্য এখানে একটি অ্যারে-তে রাখতে পারেন
const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website built with React and Node.js, including payment gateway integration and a complete admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio site built with Gatsby for blazing fast performance, showcasing my skills and projects.',
    tags: ['Gatsby', 'React', 'GraphQL', 'CSS Modules'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing daily tasks, featuring drag-and-drop functionality and user authentication.',
    tags: ['React', 'Firebase', 'Sass'],
    image: 'https://images.unsplash.com/photo-1550089423-646714302636?q=80&w=1933&auto=format&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'A clean and simple weather app that fetches data from a third-party API to display current and future weather conditions.',
    tags: ['JavaScript', 'API', 'HTML5', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop',
    liveUrl: '#',
    codeUrl: '#',
  },
];


const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="My Projects" />
      
      <header className={styles.pageHeader}>
        <h1>My Work</h1>
        <p>Here are some of the projects I'm proud of. Each one was a unique challenge and a great learning experience.</p>
      </header>

      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.liveUrl} className={styles.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeUrl} className={styles.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;