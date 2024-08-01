import React from 'react';

const ProjectsSection = ({ projects }) => (
    <section id="projects" className="Projects">
        <h2>Projects</h2>
        <div className="container">
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-4" style={{ margin: '20px' }}>
                        <div className="card">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <div className="technologies">
                                    {Object.entries(project.technologies).map(([category, techs], index) => (
                                        <div key={index} className="tech-category" style={{ textAlign: 'center', justifyContent: 'center' }}>
                                            <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
                                            <ul>
                                                {techs.map((tech, idx) => (
                                                    <li key={idx} className="tech-item">{tech}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;
