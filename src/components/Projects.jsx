import React, { useState } from "react";
import "../styles/Projects.css"; 

const Projects = () => {
 
  const [activeTab, setActiveTab] = useState("completed");


  const completedProjects = [
    { location: "New York", sqft: "2000 sqft" },
    { location: "Los Angeles", sqft: "2500 sqft" },
    { location: "Chicago", sqft: "1800 sqft" },
    { location: "Houston", sqft: "2200 sqft" },
  ];

  const ongoingProjects = [
    { location: "San Francisco", sqft: "3000 sqft" },
    { location: "Miami", sqft: "2700 sqft" },
    { location: "Seattle", sqft: "2100 sqft" },
    { location: "Denver", sqft: "1900 sqft" },
  ];

  return (
    <div className="projects-container">
      <h2>VIEW CONSTRUCTION</h2>
      <p>
        {/* (To discover the perfect plan for your needs, visit our detailed{" "}
        <a href="/package">package page...</a>) */}
      </p>
      <h3>Delivering the high-quality construction services...</h3>

      <div className="tabs">
        <button
          className={activeTab === "completed" ? "active-tab" : ""}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
        <button
          className={activeTab === "ongoing" ? "active-tab" : ""}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing
        </button>
      </div>

      <div className="projects-grid">
        {activeTab === "completed" &&
          completedProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src="data:image/jpeg;base64,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"
                alt="Project"
                className="project-image"
              />
              <div className="project-details">
                <p>Location: {project.location}</p>
                <p>Sqft: {project.sqft}</p>
              </div>
            </div>
          ))}

        {activeTab === "ongoing" &&
          ongoingProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src="https://th.bing.com/th/id/OIP.Ds68vCqXo6G2Y8dmzMV7rAHaFg?w=243&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Project"
                className="project-image"
              />
              <div className="project-details">
                <p>Location: {project.location}</p>
                <p>Sqft: {project.sqft}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;