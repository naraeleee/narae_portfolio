// src/components/Skills.js
import React from 'react';
import { FaPython, FaJava, FaReact } from 'react-icons/fa';
import { DiMysql, DiLinux } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category-container">
        {/* Software Engineering */}
        <div className="skills-category">
          <h3>Software Engineering</h3>

          <div className="skills-card">
            <h4>Tools</h4>
            <div className="skills-list">
              <div className="skill-tag"><FaPython /> Python</div>
              <div className="skill-tag"><FaJava /> Java</div>
              <div className="skill-tag"><DiMysql /> SQL</div>
              <div className="skill-tag"><FaReact /> React</div>
              <div className="skill-tag"><DiLinux /> Linux</div>
              <div className="skill-tag">C/C++</div>
              <div className="skill-tag">GIT</div>
            </div>
          </div>

          <div className="skills-card">
            <h4>Skills</h4>
            <div className="skills-list">
              <div className="skill-tag">Frontend Development</div>
              <div className="skill-tag">Backend Development</div>
              <div className="skill-tag">DBMS</div>
              <div className="skill-tag">Object-Oriented Programming</div>
            </div>
          </div>
        </div>

        {/* AI/Data Science */}
        <div className="skills-category">
          <h3>AI/Data Science</h3>

          <div className="skills-card">
            <h4>Tools</h4>
            <div className="skills-list">
              <div className="skill-tag"><FaPython /> Python</div>
              <div className="skill-tag">Pytorch</div>
              <div className="skill-tag">Tensorflow</div>
              <div className="skill-tag">Scikit-learn</div>
              <div className="skill-tag">Keras</div>
              <div className="skill-tag">JMP</div>
              <div className="skill-tag">Power BI</div>
              <div className="skill-tag">R</div>
            </div>
          </div>

          <div className="skills-card">
            <h4>Skills</h4>
            <div className="skills-list">
              <div className="skill-tag">Machine Learning</div>
              <div className="skill-tag">Deep Learning</div>
              <div className="skill-tag">Computer Vision</div>
              <div className="skill-tag">LLM</div>
              <div className="skill-tag">Data Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
