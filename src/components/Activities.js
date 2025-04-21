import React from 'react';
import './Activities.css';
import greenCheer from '../images/greencheer.jpg'; // Correct image import
import pcaImage from '../images/2024pca.png'; // Correct image import

const Activities = () => {
  const activities = [
    {
        title: 'UofT Cheerleading',
        images: [pcaImage], // Multiple images in the array
        description: '(2021-2025)',
      },
    {
      title: 'Argyle Secondary Cheerleading',
      images: [greenCheer], // Multiple images in the array
      description: '(2018-2021)',
    }
  ];

  return (
    <section className="activities-section">
      <h2>My Activities</h2>
      <div className="activities-gallery">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-info">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
            <div className="activity-images">
              {activity.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className="activity-image"
                  src={image}
                  alt={`${activity.title} image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
