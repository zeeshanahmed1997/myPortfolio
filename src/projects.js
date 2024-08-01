import projectImage1 from './assets/images/ecommerce.png';
import projectImage2 from './assets/images/linscriptum.png';
import projectImage3 from './assets/images/lotusai.png';

const projects = [
    {
        id: 1,
        title: 'Ecommerce Store',
        shortDescription: 'A customizable eCommerce platform with dynamic color schemes and advanced features.',
        fullDescription: 'This eCommerce app offers a highly customizable and dynamic shopping experience with features like dynamic color schemes, customizable categories, theme variability, advanced search, real-time inventory updates, secure payment integration, and detailed analytics.',
        technologies: ['React JS', 'CSS', 'Bootstrap', 'ASP.NET Core Web API', 'MySql'],
        image: projectImage1,
    },
    {
        id: 2,
        title: 'Linscriptum',
        shortDescription: 'A comprehensive medical app for managing prescriptions, orders, and healthcare communication.',
        fullDescription: 'Linscriptum streamlines healthcare management by integrating features such as medicine ordering, prescription management, order history, and real-time chat with doctors and pharmacies.',
        technologies: ['React JS', 'CSS', 'Bootstrap', 'ASP.NET Core Web API', 'MySql'],
        image: projectImage2,
    },
    {
        id: 3,
        title: 'Lotus Ai',
        shortDescription: 'A time tracking tool for legal professionals with a focus on client confidentiality and accuracy.',
        fullDescription: 'Lotus Ai is a reliable time tracking tool designed for legal professionals, offering intuitive design, client confidentiality, effortless integration, accurate time tracking, and customizable settings.',
        technologies: ['React JS', 'CSS', 'Bootstrap', 'ASP.NET Core Web API', 'MySql'],
        image: projectImage3,
    },
];

export default projects;
