import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Projects from './Projects';
import './App.css';
// import SignBridge from './SignBridge';
import Experience from './components/Experience';
import Cheer from './components/Cheer';


const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          {/* <Route path="/SignBridge" element={<SignBridge />} /> */}
          <Route path="/Cheer" element={<Cheer />} />
          {/* <Route path="/Projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

