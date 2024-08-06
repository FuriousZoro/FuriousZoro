import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import './App.css';
import WeatherApp from './components/practice';
import Navbar from './components/navbar';




function App() {
 
  return (
    <>
      <Navbar />
      <div className='weatherbg row'>
      <WeatherApp />
      </div>

    </>
  );
}

export default App;
