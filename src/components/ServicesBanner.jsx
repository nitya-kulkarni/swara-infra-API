import React from "react";
import "../styles/ServicesBanner.css";
import ProgressBar from "./ProgressBar";

function ServicesBanner() {
  return (
    <section className="services-banner">
      <h2>We Build Professional and Smart Buildings</h2>
      <div className="services">
        <div className="service">
          <span className="service-text">Design and Build</span>
          <ProgressBar progress={75} />
        </div>
        <div className="service">
          <span className="service-text">Interior and Exterior</span>
          <ProgressBar progress={50} />
        </div>
        <div className="service">
          <span className="service-text">Electrical and Plumbing</span>
          <ProgressBar progress={90} />
        </div>
      </div>
    </section>
  );
}

export default ServicesBanner;