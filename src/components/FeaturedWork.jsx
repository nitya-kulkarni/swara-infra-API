import React, { useEffect } from 'react';
import '../styles/FeaturedWork.css';  // Assuming your CSS is in FeaturedWork.css
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

const ProjectCard = ({ imgSrc, title, description, buildingName }) => {
  return (
    <div className="project-card1" data-aos="fade-up" data-aos-duration="1000">
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens once
    });
  }, []);

  const projects = [
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/2.jpg',
      buildingName: 'Luxury',
      description: 'Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.'
    },
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/1.jpg',
      buildingName: 'Apartment',
      description: 'Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.'
    },
    {
      imgSrc: 'https://themes247.net/html5/construction-template/demo/assets/img/projects/5.jpg',
      buildingName: 'Duplex',
      description: 'Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.'
    }
  ];

  return (
    <div className="featured-work">
      <h2 data-aos="fade-up" data-aos-duration="1000">Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            buildingName={project.buildingName}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
