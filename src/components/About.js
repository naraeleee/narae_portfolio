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
          Hi, I’m Narae! I love taking initiative to solve challenges in my community by combining my skills in full-stack development with my passion for AI and data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
