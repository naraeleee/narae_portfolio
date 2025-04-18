import React from 'react';
import SignBridge1 from './images/signbridge.png';
import SignBridge2 from './images/signbridge2.png';
import SignBridge3 from './images/signbridge3.png';
import './SignBridge.css';

function SignBridge() {
  return (
    <section className="signbridge">
      <div className="first">
        <img className="signbridge-image1" src={SignBridge1} alt="Sign Bridge demo screenshot" />
        <p>
          Sign Bridge is a user-friendly React.js based web application that's all about making American Sign Language (ASL) easy and fun to learn, while also offering a handy translation feature. <br />
          We designed it with a big goal in mind: to shatter language barriers and create a stronger, more inclusive bond between the deaf and hearing communities.
        </p>
      </div>
      <div className="second">
      <img className="signbridge-image2" src={SignBridge2} alt="Sign Bridge demo screenshot" />
        <p>
          At the heart of Sign Bridge is an innovative, real-time Sign Language Recognition model trained by Python ML Frameworks (Tensorflow, Mediapipe, Numpy, OpenCV). <br />
          This means you can hop onto the Webcam Quiz feature and practice your ASL signs right there and then. It's interactive, engaging, and a great way to get hands-on experience. Plus, you'll be learning in a way that sticks, thanks to the immediate feedback and fun challenges.
        </p>
      </div>
      <div className="third">
      <img className="signbridge-image3" src={SignBridge3} alt="Sign Bridge demo screenshot" />
        <p>
          But that's not all. Sign Bridge also doubles as a translator, bridging the gap between spoken and sign language. <br />
          Whether you're learning ASL, teaching it, or just want to communicate more effectively with the deaf community, Sign Bridge is your go-to tool. It's more than just an app, it's a step towards a more inclusive world.
        </p>
      </div>
    </section>
  );
}

export default SignBridge;
