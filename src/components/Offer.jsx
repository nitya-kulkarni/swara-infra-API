import React from "react";
import "../styles/Offer.css";

const Offer = () => {
  return (
    <div className="container">
      {/* WHAT WE OFFER Section */}
      <section className="offer-section">
        <h2>WHAT WE OFFER</h2>
        <div className="cards">
          <div className="card1">
            <img
              src="https://www.housespace.in/img/sections/services/building-contruction.jpg"
              alt="The Green Building"
            />
            <h3>Architecture</h3>
            <p>
              Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel
              diam scelerisque, pretium urna.
            </p>
            <button>READ MORE</button>
          </div>
          <div className="card1">
            <img
              src="https://st4.depositphotos.com/1007034/40271/i/450/depositphotos_402718606-stock-photo-architecture-project-showing-different-design.jpg"
              alt="House Renovation"
            />
            <h3>Design</h3>
            <p>
              Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel
              diam scelerisque, pretium urna.
            </p>
            <button>READ MORE</button>
          </div>
          <div className="card1">
            <img
              src="https://img.freepik.com/free-photo/high-angle-measuring-tools-still-life_23-2150440970.jpg?uid=R173554599&ga=GA1.1.1281800808.1725295084&semt=ais_hybrid"
              alt="Design & Construction"
            />
            <h3>Construction</h3>
            <p>
              Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel
              diam scelerisque, pretium urna.
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </section>

      {/* AWESOME FACTS Section */}
      <section className="facts-section">
        <h2>The Construction Company</h2>
        <h3>AWESOME FACTS</h3>
        <div className="facts">
          <div className="fact">
            <h4>13691+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="fact">
            <h4>1725+</h4>
            <p>Satisfied Clients</p>
          </div>
          <div className="fact">
            <h4>984+</h4>
            <p>Workers Employed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
