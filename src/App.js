import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/images/profile-photo.jpg';
import projectImage1 from './assets/images/profile-photo.jpg';
import projectImage2 from './assets/images/profile-photo.jpg';
import projectImage3 from './assets/images/profile-photo.jpg';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    shortDescription: 'A brief description of Project 1.',
    fullDescription: 'Detailed description of Project 1.',
    image: projectImage1,
  },
  {
    id: 2,
    title: 'Project 2',
    shortDescription: 'A brief description of Project 2.',
    fullDescription: 'Detailed description of Project 2.',
    image: projectImage2,
  },
  {
    id: 3,
    title: 'Project 3',
    shortDescription: 'A brief description of Project 3.',
    fullDescription: 'Detailed description of Project 3.',
    image: projectImage3,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

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

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`Navbar ${navbarOpen ? 'active' : ''}`}>
          <div className="hamburger" onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`navbar-collapse ${navbarOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <label className="Theme-toggle">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </nav>
        <section id="home" className="Home">
          <img src={profilePhoto} alt="Profile" className="Profile-photo" />
          <h1 className="App-title">Welcome to My Portfolio</h1>
          <p className="App-intro">
            Hi, I'm Zeeshan Javaid, a passionate software developer with expertise in web and mobile applications. Explore my work and get in touch!
          </p>
        </section>
        <section id="skills" className="Skills">
          <h2>Skills</h2>
          <div className="Skills-container">
            <div className="Skills-tile">ASP.NET Development</div>
            <div className="Skills-tile">MAUI & Xamarin.Forms</div>
            <div className="Skills-tile">React & Redux</div>
            <div className="Skills-tile">SQL & Database Management</div>
            <div className="Skills-tile">Machine Learning & AI</div>
          </div>
        </section>

        <section id="projects" className="Projects">
          <h2>Projects</h2>
          <div className="container">
            <div className="row">
              {projects.map((project) => (
                <div key={project.id} className="col-md-3">
                  <div className="card">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.shortDescription}</p>
                      <button className="btn btn-primary" onClick={() => openPopup(project)}>
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="Contact">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at{' '}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </section>
      </header>

      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={closePopup}>×</span>
            <img src={selectedProject.image} alt={selectedProject.title} className="popup-image" />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
