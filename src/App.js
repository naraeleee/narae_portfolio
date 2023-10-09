import React from 'react';
import Header from './components/Header';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImage from './images/home.jpg';
import project1Image from './images/project1.jpg';
import project2Image from './images/project2.jpg';
import linkedinIcon from './images/linkedin.png'; 
import githubIcon from './images/github.png'
import backgroundImage from './images/background.png'

const App = () => {
  const projects = [
    { title: 'Sign Bridge', image: project1Image, description: 'Implemented an interactive American Sign Language learning web application where users can utilize a webcam to demonstrate sign language and receive real-time feedbacks.\nTrained a Sign Language Recognition model with Convolutional Neural Network Python libraries (Pytorch, Numpy, Tensorflow, Mediapipe),\nwhere the model is capable of real-time hand motion recognition.' },
    
    {
      title: 'UTimetable',
      image: project2Image,
      description: "Developed a Java-based application that empowers users to\ncreate accounts, manage their timetables, and employs advanced algorithms to identify overlapping free time slots among friends"
    }
  ];

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <main className="main-content">
        <div className="image-container">
          <img className="home-image" src={homeImage} alt="Home" />
        </div>
        <div class="box">Hi! I'm Narae. I am a former/aspiring AI Engineer! My objective is
             to harness my analytical and technical expertise to develop 
             ethical and innovative AI-integrated software solutions that
              address accessibility needs in society. I am passionate about
               using data-driven approaches to create positive impacts and improve
                the lives of individuals with diverse accessibility requirements.<i></i></div>
       
        
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
      <p className="box">
        {project.description.startsWith('http') ? (
          <a href={project.description} target="_blank" rel="noopener noreferrer">
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
          <a href="https://github.com/naraeleee" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" />
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
