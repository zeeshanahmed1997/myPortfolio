import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/images/profile-photo.jpg';
import resume from './assets/documents/Zeeshan.pdf'; // Import your resume file here
import projects from './projects'; // Import the projects data
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AboutMe from './components/AboutMe'; // Import the AboutMe component

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const [introText, setIntroText] = useState('');
  const [welcomeTextCompleted, setWelcomeTextCompleted] = useState(false);
  const welcomeMessage = "Welcome to My ";
  const introMessage = "Hi, I'm Zeeshan Javaid, a passionate software developer with expertise in web and mobile applications.";

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        navbarOpen={navbarOpen}
        toggleNavbar={toggleNavbar}
        resume={resume}
      />
      <HomeSection
        profilePhoto={profilePhoto}
        welcomeText={welcomeMessage}
        introText={introMessage}
      />
      <AboutMe /> {/* Add the AboutMe component here */}
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </div>
  );
}

export default App;
