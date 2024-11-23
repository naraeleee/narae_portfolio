// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* Software Engineering Skills */}
      <div className="skills-category">
        <h3>Software Engineering</h3>
        <div className="skills-card">
          <h4>Tools</h4>
          <p>Python, Java, C, SQL, React, Javascript, CSS/HTML, RESTful API, Unix, Linux, GIT</p>
        </div>
        <div className="skills-card">
          <h4>Skills</h4>
          <p>Frontend Development, Backend Development, Database Development, Object-Oriented Programming, Software Design, Systems Programming, Unit Testing</p>
        </div>
      </div>

      {/* AI/Data Science Skills */}
      <div className="skills-category">
        <h3>AI/Data Science</h3>
        <div className="skills-card">
          <h4>Tools</h4>
          <p>Python; Pytorch, Tensorflow, Scikit-learn, Keras, Numpy, BeautifulSoup, Selenium</p>
        </div>
        <div className="skills-card">
          <h4>Skills</h4>
          <p>AI/Deep Learning/Machine Learning Engineering, Computer Vision Engineering, Neural Networks, Natural Language Processing, Data Preprocessing, Web Crawling</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
