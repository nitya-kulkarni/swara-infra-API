import React from 'react';
import '../styles/FeaturedWork.css';  // Assuming your CSS is in App.css

const ProjectCard = ({ imgSrc, title, description, buildingName }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="building-name">{buildingName}</div> {/* Building name on hover */}
    </div>
  );
};

const FeaturedWork = () => {
  const projects = [
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/2.jpg',
      buildingName: 'Luxury'
    },
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/1.jpg',
      buildingName: 'Appartment'
    },
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/5.jpg',
      buildingName: 'Duplex'
    }
  ];

  return (
    <div className="featured-work">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            buildingName={project.buildingName}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
