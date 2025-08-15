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
        University of Toronto, Honours Bachelor of Science in Mathematics and Computer Science 
      </p>
      <p>
        Activities and Societies: Varsity Blues Cheerleading (2021-2025), Arts and Sciences Internship Program, 2022 UC Orientation Leader
      </p>
    </section>
  );
};

export default About;
