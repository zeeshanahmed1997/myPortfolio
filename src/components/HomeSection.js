import React from 'react';

const HomeSection = ({ profilePhoto, welcomeText, welcomeTextCompleted, introText }) => (
    <section id="home" className="Home">
        <img src={profilePhoto} alt="Profile" className="Profile-photo" />
        <h1 className="App-title">
            <span className={`typewriter ${welcomeTextCompleted ? 'no-cursor' : ''}`}>
                {welcomeText.split('portfolio').map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index === 0 && <span className="highlighted">portfolio</span>}
                    </React.Fragment>
                ))}
            </span>
        </h1>
        <p className="App-intro">{introText}</p>
    </section>
);

export default HomeSection;
