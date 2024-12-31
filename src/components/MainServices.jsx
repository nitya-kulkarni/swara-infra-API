import React, { useEffect } from "react";
import "../styles/MainServices.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const data = [
  {
    image: "https://previews.123rf.com/images/kadmy/kadmy1506/kadmy150600519/41576316-construction-worker-mason-bricklayer-installing-red-brick-with-trowel-putty-knife-outdoors.jpg",
    title: "More Than Bricks and Mortar:",
    description:
      "Why Home is a Feeling We all know the saying, Home is where the heart is.A home transcends the physical. It's a feeling, an emotion that resonates deep within us.",
  },
  {
    image: "https://www.shutterstock.com/image-photo/structural-engineer-architect-foreman-worker-600nw-2462684023.jpg",
    title: "Comfort and Safety:",
    description:
      "The Soul of Home The walls of our homes hold memories, both big and small. They echo with the sounds of birthday parties and holiday gatherings.",
  },
  {
    image: "https://india.materialimmaterial.com/cdn/shop/products/07_5cde1e70-e2cb-4dd7-839c-3e70ab74faf2_1445x.jpg?v=1668784470",
    title: "Memories and Nostalgia:",
    description:
      "The Soul of Home The walls of our homes hold memories, both big and small.They echo with the sounds of birthday parties and holiday gatherings.",
  },
  {
    image: "https://img.freepik.com/free-photo/inspectors-with-sketch_1098-15451.jpg?semt=ais_hybrid",
    title: "Personalize and Expression:",
    description:
      "The Spirit of Home Our homes are a reflection of ourselves, a canvas on which we express our unique personalities.",
  },
];

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="main-services-container">
      {/* Add heading line here */}
      <h2 className="main-services-heading" data-aos="fade-up">
        Main Services
      </h2>
      <div className="card4-container">
        {data.map((item, index) => (
          <div
            className="card4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
          >
            <div
              className={`card4-content ${
                index % 2 === 0 ? "image-left" : "image-right"
              }`}
            >
              <img src={item.image} alt={item.title} className="card4-image" />
              <div className="card4-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;