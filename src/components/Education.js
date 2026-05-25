// src/components/Education.js
import React from 'react';
import uoft from '../images/uoft.jpeg';
import './Education.css';

const About = () => {
  return (
    <section className="edu-section">
      <h2>Education</h2>
      <div className="education-image">
        <img className="uoft-image" src={uoft} alt="University of Toronto" />
      </div>
      <p>
        Sep 2021-Apr 2026
      </p>
      <p>
        University of Toronto, Honours Bachelor of Science in Mathematics, Statistics and Computer Science
      </p>
    </section>
  );
};

export default About;
