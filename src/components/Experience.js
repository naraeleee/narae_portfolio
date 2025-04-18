import React from 'react';
import AmdLogo from '../images/amd.jpeg';
import DataUsLogo from '../images/dataus.jpeg';
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist Co-op',
      companyLogo: AmdLogo,
      duration: 'May 2024 - Present',
      description: (
        <p>
         • Working as a Data Scientist/Yield Engineer
        </p>
      ),
    },
    {
      title: 'AI Engineer Intern',
      companyLogo: DataUsLogo,
      company: 'DataUs Inc.',
      duration: 'Jun 2023 - Aug 2023',
      description: (
        <>
          <p>
            • Trained a model with Python Machine Learning Frameworks (Pytorch, Tensorflow, Mediapipe, Scikit-learn, Keras, Numpy).
          </p>
          <p>
            • Developed Deep Learning Algorithms to improve model’s performance from 60% to 98%.
          </p>
          <p>
            • Implemented a Web Crawling program using Selenium to automate Data Collection and performed extensive Data Preprocessing.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="experience-section">
      <h2>My Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="company-info">
            {exp.companyLogo && <img src={exp.companyLogo} alt={`${exp.company} logo`} className="company-logo" />}
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
          </div>
          <span>{exp.duration}</span>
          {exp.description}
        </div>
      ))}
    </section>
  );
};

export default Experience;
