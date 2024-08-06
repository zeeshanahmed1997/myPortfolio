import React from 'react';
import useIntersectionObserver from '../utilities/userIntersectionObserver';
import '../assets/css/skills.css';

const SkillsSection = () => {
    const isVisible = useIntersectionObserver({
        threshold: 0.5, // Adjust the threshold as needed
    });

    return (
        <section id="skills" className={`Skills ${isVisible ? 'fadeIn' : ''}`}>
            <h2 className='skillsHeading'>Skills</h2>
            <div className="Skills-container">
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-dotnetcore-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-xamarin-original colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-react-original colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-mysql-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-python-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-javascript-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-html5-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-azure-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-bootstrap-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-git-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-nodejs-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-docker-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-circleci-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-jest-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-graphql-plain colored"></i> </div>
                <div className="Skills-tile"> {/* Skill tile content */} <i className="devicon-java-plain colored"></i> </div>
            </div>
        </section>
    );
};

export default SkillsSection;
