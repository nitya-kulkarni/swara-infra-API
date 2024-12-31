// import React, { useState } from "react";
// import "../styles/Projects.css";

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("completed");

//   const completedProjects = [
//     { location: "New York", sqft: "2000 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Los Angeles", sqft: "2500 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Chicago", sqft: "1800 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Houston", sqft: "2200 sqft", img: "https://via.placeholder.com/150" },
//   ];

//   const ongoingProjects = [
//     { location: "San Francisco", sqft: "3000 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Miami", sqft: "2700 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Seattle", sqft: "2100 sqft", img: "https://via.placeholder.com/150" },
//     { location: "Denver", sqft: "1900 sqft", img: "https://via.placeholder.com/150" },
//   ];

//   const projects = activeTab === "completed" ? completedProjects : ongoingProjects;

//   return (
//     <div className="projects-container">
//       <h2>VIEW CONSTRUCTION</h2>
//       <h3>Delivering high-quality construction services...</h3>

//       <div className="tabs">
//         <button
//           className={activeTab === "completed" ? "active-tab" : ""}
//           onClick={() => setActiveTab("completed")}
//         >
//           Completed
//         </button>
//         <button
//           className={activeTab === "ongoing" ? "active-tab" : ""}
//           onClick={() => setActiveTab("ongoing")}
//         >
//           Ongoing
//         </button>
//       </div>

//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <img src={project.img} alt={`Project in ${project.location}`} />
//             <h4>{project.location}</h4>
//             <p>{project.sqft}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useState, useEffect } from 'react';
// import '../styles/construction.css';
import { Link } from 'react-router-dom';

function SwaraInfra() {
  const [activeTab, setActiveTab] = useState('completed');
  const [completedProjects, setCompletedProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === 'completed') {
      fetchCompletedProjects();
    } else if (activeTab === 'ongoing') {
      fetchOngoingProjects();
    }
  }, [activeTab]);

  const fetchCompletedProjects = async () => {
    try {
      const response = await fetch('http://localhost:8080/swarainfra/images/all');
      const data = await response.json();
      const projects = data.data.map(item => item.attributes);
      setCompletedProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching completed projects', error);
      setLoading(false);
    }
  };
  
  const fetchOngoingProjects = async () => {
    try {
      const response = await fetch('https://project-akshay.onrender.com/ongoing/');
      const data = await response.json();
      const projects = data.data.map(item => item.attributes);
      setOngoingProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching ongoing projects', error);
      setLoading(false);
    }
  };

  const showContent = (tab) => {
    setActiveTab(tab);
    setLoading(true);
  };

  document.addEventListener('DOMContentLoaded', function() {
    showContent('completed');
  });

  return (
    <div className="swara-container">
      <center><h2 style={{fontWeight: 'bold'}}>VIEW CONSTRUCTION </h2></center>
      <h3 style={{color:'blue',fontStyle:'italic', fontSize:'small', fontWeight: 'bold'}} className='swara-description'>(To discover the perfect plan for your needs, visit our detailed <Link to="/packages"> package page...</Link>)</h3>
      <center><h2 style={{fontWeight: 'bold', fontSize:25}} className="mainhome-subtitle">Delivering the high quality construction services...</h2>      </center>

      <div className="swara-projects-section">
        <h2><span style={{color:'blue',fontWeight: 'bold'}}>Our</span>  <span style={{color:'#FFD700', fontWeight: 'bold'}}>Projects</span></h2>
        <div className="swara-tabs">
          <span
            id="completed"
            className={`swara-tab ${activeTab === 'completed' ? 'swara-active' : ''}`}
            onClick={() => showContent('completed')}
          >
            Completed
          </span>
          <span
            id="ongoing"
            className={`swara-tab ${activeTab === 'ongoing' ? 'swara-active' : ''}`}
            onClick={() => showContent('ongoing')}
          >
            Ongoing
          </span>
        </div>

        {loading ? (
          <div className="swara-loading">
            <div className="swara-spinner"></div>
          </div>
        ) : activeTab === 'completed' ? (
          <div id="completed-content" className="swara-content swara-active">
            <section id="swara-properties">
              {completedProjects.map((project, index) => (
                <div className="swara-property" key={index}>
                  <a href="#" className="swara-image-link">
                    <img src={project.image_url} alt={`Property ${index + 1}`} className="swara-property-image" />
                  </a>
                  <div className="swara-property-details">
                    <div className="swara-details-container">
                      <ul className="swara-horizontal-content">
                        <li>Location<br />{project.location}</li>
                      </ul>
                    </div>
                    <a href="#" className="swara-know-more">Know More →</a><br/>
                  </div>
                </div> 
              ))}
            </section>
          </div>
        ) : (
          <div id="ongoing-content" className="swara-content swara-active">
            <section id="swara-properties">
              {ongoingProjects.map((project, index) => (
                <div className="swara-property" key={index}>
                  <a href="#" className="swara-image-link">
                    <img src={project.image_url} alt={`Property ${index + 1}`} className="swara-property-image" />
                  </a>
                  <div className="swara-property-details">
                    <div className="swara-details-container">
                      <ul className="swara-horizontal-content">
                        <li>Location<br />{project.location}</li>
                      </ul>
                    </div>
                    <a href="#" className="swara-know-more">Know More →</a>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwaraInfra;