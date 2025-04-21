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
            Hi! I'm Narae. My objective is to harness my analytical and technical expertise to develop ethical and innovative AI-integrated software solutions that address accessibility needs in society.<br />
            I am passionate about using data-driven approaches to create positive impacts and improve the lives of individuals with diverse accessibility requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
