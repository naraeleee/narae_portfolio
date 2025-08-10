import React from 'react';
import greenCheer from '../images/greencheer.jpg';
import pca2024 from '../images/2024pca.png';
import bclions from '../images/bclions.jpg';
import sea2sky from '../images/seatosky.jpeg';
import gold from '../images/gold.jpg';
import winterfest from '../images/winterfest.jpg';
import './Activities.css';

const Activities = () => {
  const activities = [
    {
      title: 'UofT Cheerleading',
      images: [pca2024, winterfest], // Empty array for now, add image imports/paths if available
      description: '(2021-2025)',
    },
    {
      title: 'Argyle Secondary Cheerleading - Gold Team',
      images: [bclions, gold],
      description: '(2019-2021)',
    },
    {
      title: 'Argyle Secondary Cheerleading - Green Team',
      images: [greenCheer, sea2sky],
      description: '(2018-2019)',
    },
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
            {activity.images && activity.images.length > 0 && (
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
