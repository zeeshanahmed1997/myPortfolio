import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Navbar = ({ darkMode, toggleTheme, navbarOpen, toggleNavbar, resume }) => (
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
                <li><a href={resume} download>Resume</a></li> {/* Added Resume link */}
            </ul>
            <label className="Theme-toggle">
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                <span className="slider"></span>
            </label>
        </nav>
    </header>
);

export default Navbar;
