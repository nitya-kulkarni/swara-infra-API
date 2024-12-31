import React, { useEffect } from "react";
import "../styles/CardSlider.css"; 

import AOS from "aos";
import "aos/dist/aos.css"; 

const CardSlider = () => {
  const cards = [
    {
      title: "1. Select any package",
      icon: "📦", 
    },
    {
      title: "2. Review & compare briefly",
      icon: "📝",
    },
    {
      title: "3. Download to know",
      icon: "⬇",
    },
    {
      title: "4. Customize requirements",
      icon: "⚙",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <div className="slider-container">
      <h2 data-aos="fade-up">How It Works</h2>
      <p data-aos="fade-up" data-aos-delay="100">Convenience, & Transparency at your fingertips.</p>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="slider-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`} 
          >
            <div className="card-icon" data-aos="fade-in">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
