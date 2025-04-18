import React from 'react';
import SignBridge1 from './images/signbridge.png';
import SignBridge2 from './images/signbridge2.png';
import SignBridge3 from './images/signbridge3.png';
import SignBridgeLogo from './images/signbridgelogo.png';
import './SignBridge.css';

function SignBridge() {
  return (
    <section className="signbridge">
      <div className="first">
        <img className="signbridge-image1" src={SignBridge1} alt="Sign Bridge demo screenshot" />
        <p>
        Sign Bridge is a Python-based American Sign Language (ASL) learning app integrated with a real-time sign language recognition model. This model, trained with computer vision and machine learning libraries, enables real-time feedback to users through a webcam quiz feature, allowing for hands-on learning.
        </p>
      </div>
      <div className="second">
      <img className="signbridge-logo" src={SignBridgeLogo} alt="Sign Bridge demo screenshot" />
        <p>
        For a long time, I have been actively seeking the opportunity to create a positive impact by addressing accessibility needs in society through my data science and programming expertise. Then, I learned that the communication barrier between deaf and hearing individuals creates a social gap between communities.
        </p>
      </div>
      <div className="third">
      <img className="signbridge-image2" src={SignBridge2} alt="Sign Bridge demo screenshot" />
        <p>
        To resolve this problem, we must change the perception of sign language. Sign language is not only something deaf people use – it is a language that everyone can learn to communicate more inclusively.
        </p>
      </div>
      <div className="fourth">
      <img className="signbridge-image3" src={SignBridge3} alt="Sign Bridge demo screenshot" />
        <p>
        That is why I implemented Sign Bridge, to make learning ASL fun and accessible for everyone. However, sign bridge is not just a learning app, but it is a step toward making the world more inclusive. By promoting the integration of sign language into our everyday communication and embracing deafness not just as a disability but as part of a vibrant culture, we can create a society where communication is accessible to all.
        </p>
      </div>
    </section>
  );
}

export default SignBridge;
