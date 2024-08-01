import React from 'react';
import { SocialIcon } from 'react-social-icons';

const ContactSection = () => (
    <section id="contact" className="Contact">
        <h2>Contact</h2>
        <p>
            Feel free to reach out to me at{' '}
            <a href="mailto:zee816558@gmail.com">zee816558@gmail.com</a>
        </p>
        <p>
            <SocialIcon url="tel:+923430421728" /> +923430421728
        </p>
        <div className="social-icons">
            <SocialIcon url="https://www.linkedin.com/in/zeeshanjavaid1997" target="_blank" />
            <SocialIcon url="https://www.facebook.com/MS18RCP43633245902032FE/" target="_blank" />
            <SocialIcon url="https://www.instagram.com/zeeshanformanite/" target="_blank" />
        </div>
    </section>
);

export default ContactSection;
