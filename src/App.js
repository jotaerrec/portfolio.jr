import React from 'react'
import './App.css';
import Home from './components/home/home.js'
import About from './components/about/about.js'

function App() {
  return (
      <div>
      <p className="copyright-text hidden md:flex text-gray-200 md:fixed -left-16 animate__animated animate__fadeIn">&copy; 2021 Javier Rodriguez</p>
      <Home/> 
      <About/> 
    </div>
    
  );
}

export default App;
