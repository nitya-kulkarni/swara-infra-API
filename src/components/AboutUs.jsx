import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import featuring from "../assets/featuring.jpg";
import headerBg from "../assets/header-bg.png"; 
import AOS from "aos";  
import "aos/dist/aos.css";  
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const cards = [
    {
      id: 1,
      title: "Mission",
      description:
        "Building Your Dream Home with Thikedaar.Com: From Blueprint to Reality. Thikedaar.Com offers a comprehensive home construction service that begins with your dream...",
      image: vision,
    },
    {
      id: 2,
      title: "Vision",
      description:
        "Our vision at Swara Infra is to be recognized as the premier construction company, setting the standard for excellence in the industry. We envision a future where our innovative solutions, sustainable practices.",
      image: mission,
    },
    {
      id: 3,
      title: "Featuring",
      description:
        "New & Trending Designs, No Subcontracts, No Hidden Charges, Timely Delivery, Fair Pricing, High-Quality Work with No Compromise.",
      image: featuring,
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div
        className="header"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
        data-aos="fade-up"  // Add animation effect for header
      >
        <div className="header-content">
          <h1>About Us</h1>
          <p>
            Swarainfra turns that dream into reality. We're your one-stop shop for everything home construction.
            <br />
            From expert civil engineers to a team that oversees every detail, we handle it all.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container1">
        {cards.map((card, index) => (
          <div className="card-wrapper" key={card.id}>
            <div
              className={`card ${index === 1 ? "card-left" : index % 2 === 0 ? "card-left" : "card-right"}`}
              data-aos={index === 1 ? "fade-left" : "fade-right"}  
            >
              {index % 2 === 0 && (
                <img src={card.image} alt={card.title} className="card-image" />
              )}
              <div className="card-content">
                <h1 className="card-number">0{card.id}</h1>
                <h2>{card.title}</h2>
                <div className="yellow-line"></div>
                <p>{card.description}</p>
              </div>
              {index % 2 !== 0 && (
                <img src={card.image} alt={card.title} className="card-image" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
