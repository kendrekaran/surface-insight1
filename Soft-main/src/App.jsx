import React from 'react';// Import BrowserRouter and other routing components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project'
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    
      <div className="text-gray-200">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    
  );
}

export default App;
