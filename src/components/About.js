// src/components/About.js
import React from 'react';
import homeImage from '../images/home.jpg'; // adjust path if needed
import './About.css'; // make sure this CSS file exists

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <img
          className="about-image"
          src={homeImage}
          alt="Narae Lee working on AI projects"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          Hi, I’m Narae! I love taking initiative to solve real-world challenges in my community by combining my skills in
           full-stack development with my passion for AI and data science. I’m especially motivated by projects that improve
            accessibility and inclusivity, because I believe technology can make a meaningful difference in everyone’s life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
