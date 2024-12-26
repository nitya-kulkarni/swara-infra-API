import React from "react";
import "../styles/MainServices.css";

const data = [
  {
    image: "https://previews.123rf.com/images/kadmy/kadmy1506/kadmy150600519/41576316-construction-worker-mason-bricklayer-installing-red-brick-with-trowel-putty-knife-outdoors.jpg",
    title: "More Than Bricks and Mortar:",
    description:
      "Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.",
  },
  {
    image: "https://www.shutterstock.com/image-photo/structural-engineer-architect-foreman-worker-600nw-2462684023.jpg",
    title: "Comfort and Safety:",
    description:
      "Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.",
  },
  {
    image: "https://india.materialimmaterial.com/cdn/shop/products/07_5cde1e70-e2cb-4dd7-839c-3e70ab74faf2_1445x.jpg?v=1668784470",
    title: "Memories and Nostalgia:",
    description:
      "Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.",
  },
  {
    image: "https://img.freepik.com/free-photo/inspectors-with-sketch_1098-15451.jpg?semt=ais_hybrid",
    title: "Personalization and Expression:",
    description:
      "Vestibulum eu libero volutpat, porta quam, tempus sem. Donec sodales quam id lorem lobortis.",
  },
];

const Cards = () => {
  return (
  <div className="main-services-container">
      {/* Add heading line here */}
      <h2 className="main-services-heading">Main Services</h2>
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className={`card-content ${index % 2 === 0 ? "image-left" : "image-right"}`}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-text">
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
