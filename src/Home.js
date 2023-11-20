import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImage from './images/home.jpg'; // Ensure the path is correct
import projects from './projectsData'; // Import projects from projectsData
import linkedinIcon from './images/linkedin.png'; 
import githubIcon from './images/github.png';


const Home = () => {
  return (
    <main className="main-content">
      <div className="image-container">
        <img className="home-image" src={homeImage} alt="Home" />
      </div>
      <div className="box">
        Hi! I'm Narae. I am a former/aspiring AI Engineer! My objective is
        to harness my analytical and technical expertise to develop 
        ethical and innovative AI-integrated software solutions that
        address accessibility needs in society. I am passionate about
        using data-driven approaches to create positive impacts and improve
        the lives of individuals with diverse accessibility requirements.
      </div>
      <div className="recent-projects">
        <h2>Recent Projects</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {projects.map((project, index) => (
            <div className="project-container1" key={index}>
              <img className="project-image" src={project.image} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="box">{project.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="contact1">
        <p>Contact me at: narae828@hotmail.com</p>
      </div>
      <div className="social-media" style={{ marginTop: '-17px' }}>
        <a href="https://www.linkedin.com/in/narae-lee-a3390721b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/naraeleee" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github" />
        </a>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Narae Lee. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
