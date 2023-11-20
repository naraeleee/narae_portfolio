// projectsData.js
import project1Image from './images/project1.jpg'; // Adjust the path as needed
import project2Image from './images/project2.jpg'; // Adjust the path as needed

const projects = [
  {
    title: 'Sign Bridge',
    image: project1Image,
    description: 'Implemented an interactive American Sign Language learning web application where users can utilize a webcam to demonstrate sign language and receive real-time feedbacks.\nTrained a Sign Language Recognition model with Convolutional Neural Network Python libraries (Pytorch, Numpy, Tensorflow, Mediapipe),\nwhere the model is capable of real-time hand motion recognition.',
  },
  {
    title: 'UTimetable',
    image: project2Image,
    description: "Developed a Java-based application that empowers users to\ncreate accounts, manage their timetables, and employs advanced algorithms to identify overlapping free time slots among friends"
  },
];

export default projects;
