// projectsData.js
import project1Image from './images/signbridge.png';
import project2Image from './images/project2.jpg'; 
import project3Image from './images/project3.png';


const projects = [
  {
    title: 'Sign Bridge',
    image: project1Image,
    link: 'https://youtu.be/IVPJZt9UFqs?si=qnwcXd0lxd9eX0on',
    description: 'Implemented an interactive American Sign Language learning web application where users can utilize a webcam to demonstrate sign language and receive real-time feedbacks.\nTrained a Sign Language Recognition model with Convolutional Neural Network Python libraries (Pytorch, Numpy, Tensorflow, Mediapipe),\nwhere the model is capable of real-time hand motion recognition.',
  },
  {
    title: 'TTC Tracker',
    image: project3Image,
    description: 'Developed a solution to forecast the occurrence, location, and duration of delays within the TTC network. By accurately predicting when and where delays are most likely to occur, as well as estimating their length, the model will provide valuable insights for optimizing transit operations and enhancing the reliability of service across the city.'

  },
  {
    title: 'UTimetable',
    image: project2Image,
    link: 'https://youtu.be/bKnaXS9KRB8?si=dO8xwYFQvvpN4lfh',
    description: "Developed a Java-based application that empowers users to\ncreate accounts, manage their timetables, and employs advanced algorithms to identify overlapping free time slots among friends"
  },
 
];

export default projects;
