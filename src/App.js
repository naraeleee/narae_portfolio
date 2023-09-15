import React from 'react';
import Header from './components/Header';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImage from './images/home.jpg';
import project1Image from './images/project1.jpg';
import project2Image from './images/project2.jpg';
import linkedinIcon from './images/linkedin.png'; // Import LinkedIn icon image
import instagramIcon from './images/instagram.png'; // Import Instagram icon image
import githubIcon from './images/github.png'

const App = () => {
  const projects = [
    { title: 'Sign Bridge', image: project1Image, description: 'Sign Bridge is a website to learn and translate sign language. We hope to break the barrier between signers and hearings' },
    { title: 'UTimetable', image: project2Image, description: 'https://github.com/CSC207-2022F-UofT/course-project-t_t' },
    // Add more projects here
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="image-container">
          <img className="home-image" src={homeImage} alt="Home" />
        </div>
        <div className="color-block" style={{ marginTop: '30px'}}>
          <h2>Welcome to Narae's Portfolio!</h2>
          <p>"I am Narae Lee"</p>
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
      <div className="project-container" key={index}>
      <img
        className="project-image"
        src={project.image}
        alt={project.title}
      />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">
        {project.description.startsWith('http') ? (
          <a href={project.description} target="_blank" rel="noopener noreferrer">
            <img
              className="github-icon"
              src={githubIcon}
              alt="GitHub"
            />
          </a>
        ) : (
          project.description
        )}
      </p>
    </div>
    
    ))}
  </Carousel>
</div>

<div className="contact">
<p>Contact me at: narae828@hotmail.com</p>
</div>   
        {/* Social Media Links */}
        <div className="social-media" style={{marginTop:'-17px'}}>
          
          <a href="https://www.linkedin.com/in/narae-lee-a3390721b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/narae_dev/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Narae Lee. All rights reserved.</p>
      </footer>


      </main>
    </div>
  );
};

export default App;
