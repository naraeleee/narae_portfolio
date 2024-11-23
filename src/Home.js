// src/Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImage from './images/home.jpg'; 
import projects from './projectsData'; 
import linkedinIcon from './images/linkedin.png'; 
import githubIcon from './images/github.png';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import './Home.css'

const Home = () => {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="image-container" id="hero">
        <img className="home-image" src={homeImage} alt="Narae Lee working on AI projects" />
      </section>

      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <section className="recent-projects" id="projects">
        <h2>Recent Projects</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {projects.map((project, index) => (
            <div className="project-container" key={index}>
              <img className="project-image" src={project.image} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </Carousel>
      </section>

      

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      <Education />

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:narae828@hotmail.com">narae828@hotmail.com</a></p>
        
      </section>
      <div className="social-media">
          <a href="https://www.linkedin.com/in/narae-lee-a3390721b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Visit my LinkedIn Profile" />
          </a>
          <a href="https://github.com/naraeleee" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Visit my GitHub Profile" />
          </a>
        </div>
    </main>
  );
};

export default Home;
