import React from 'react';
import useIntersectionObserver from '../utilities/userIntersectionObserver';
import '../assets/css/skills.css';

const skills = [
    { name: 'DotNet Core', iconClass: 'devicon-dotnetcore-plain colored' },
    { name: 'Xamarin', iconClass: 'devicon-xamarin-original colored' },
    { name: 'React', iconClass: 'devicon-react-original colored' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
    { name: 'Python', iconClass: 'devicon-python-plain colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
    { name: 'Azure', iconClass: 'devicon-azure-plain colored' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
    { name: 'Git', iconClass: 'devicon-git-plain colored' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
    { name: 'CircleCI', iconClass: 'devicon-circleci-plain colored' },
    { name: 'Jest', iconClass: 'devicon-jest-plain colored' },
    { name: 'GraphQL', iconClass: 'devicon-graphql-plain colored' },
    { name: 'Java', iconClass: 'devicon-java-plain colored' }
];

const SkillsSection = () => {
    const isVisible = useIntersectionObserver({
        threshold: 0.5, // Adjust the threshold as needed
    });

    return (
        <section id="skills" className={`Skills ${isVisible ? 'fadeIn' : ''}`}>
            <h2 className='skillsHeading'>Skills</h2>
            <div className="Skills-container">
                {skills.map((skill, index) => (
                    <div className="Skills-tile hoverable" key={index}>
                        <i className={skill.iconClass}></i>
                        <span className="tooltiptext">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
