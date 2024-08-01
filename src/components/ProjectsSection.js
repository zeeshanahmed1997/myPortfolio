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
                                    {project.technologies.map((tech, index) => (
                                        <div key={index} className="tech-tile">
                                            {tech}
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
