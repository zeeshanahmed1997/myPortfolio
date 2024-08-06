import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../assets/css/contact.css'

const ContactSection = () => (
    <section id="contact" className="Contact">
        <div className="contact-header">
            <h2>Get in Touch</h2>
            <p>I'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
        </div>
        <div className="contact-info">
            <p className="contact-item">
                <SocialIcon url="mailto:zee816558@gmail.com" style={{ marginRight: '10px' }} />
                <a href="mailto:zee816558@gmail.com">zee816558@gmail.com</a>
            </p>
            <p className="contact-item">
                <SocialIcon url="tel:+923430421728" style={{ marginRight: '10px' }} />
                <a href="tel:+923430421728">+923430421728</a>
            </p>
        </div>
        <div className="social-icons">
            <h3>Follow Me</h3>
            <div className="social-icon-links">
                <SocialIcon url="https://www.linkedin.com/in/zeeshanjavaid1997" target="_blank" style={{ margin: '10px' }} />
                <SocialIcon url="https://www.facebook.com/MS18RCP43633245902032FE/" target="_blank" style={{ margin: '10px' }} />
                <SocialIcon url="https://www.instagram.com/zeeshanformanite/" target="_blank" style={{ margin: '10px' }} />
            </div>
        </div>
    </section>
);

export default ContactSection;
