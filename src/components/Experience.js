// src/components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist Co-op',
      company: 'AMD',
      duration: 'May 2024 - Present',
      description: (
        <p>
         • Data Scientist/Yield Modeling Engineer
        </p>
      ),
    },
    {
      title: 'AI Engineer Intern',
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
    // Add more experiences as needed
  ];

  return (
    <section className="experience-section">
      <h2>My Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <span>{exp.duration}</span>
          {exp.description}
        </div>
      ))}
    </section>
  );
};

export default Experience;
