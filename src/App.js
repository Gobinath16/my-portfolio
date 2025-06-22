import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Experience from './components/experience';
import Projects from './components/projects';


function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Sidebar setActiveSection={setActiveSection} />

      <div className="content-area">
        {activeSection === 'home' && (
          <>
            <Header />
            <AboutMe />
          </>
        )}

        {activeSection === 'career' && (
          <>
            <Experience />
          </>
        )}

        {activeSection === 'projects' && (
          <>
            <Projects /> 
          </>
        )}
      </div>
    </div>
  );
}

export default App;
