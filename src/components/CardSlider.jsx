import React from "react";
import Slider from "react-slick";
import "../styles/CardSlider.css"; // Import the CSS for the slider

const CardSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: "1.Select any package",
      icon: "📦", // Replace with actual icons/images
    },
    {
      title: "2.Review & compare briefly",
      icon: "📝",
    },
    {
      title: "3.Download to know",
      icon: "⬇",
    },
    {
      title: "4.Customize requirements",
      icon: "⚙",
    },
  ];

  return (
    <div className="slider-container">
      <h2>How It Works</h2>
      <p>Convenience, & Transparency at your fingertips.</p>
      <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <div key={index} className="slider-card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;