import React from 'react';
import './App.css';
import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
       <Navbar/>
       <Hero/>
       <Featured/>

    </div>
  );
}

export default App;
