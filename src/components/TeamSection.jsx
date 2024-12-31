import React, { useEffect } from "react";
import Slider from "react-slick";
import "../styles/TeamSection.css";
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import AOS styles

const teamMembers = [
  {
    name: "Richard Wagner",
    role: "Civil Engineer",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/2.jpg",
  },
  {
    name: "Sarah Spence",
    role: "Construction Assistant",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/3.jpg",
  },
  {
    name: "John Halpern",
    role: "Construction Manager",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/4.jpg",
  },
  {
    name: "Tommy Atkins",
    role: "Electricians",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/3.jpg",
  },
  {
    name: "Alice Parker",
    role: "Design Engineer",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/2.jpg",
  },
  {
    name: "Michael Smith",
    role: "Structural Engineer",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/4.jpg",
  },
  {
    name: "Emma Brown",
    role: "Project Coordinator",
    image: "https://themes247.net/html5/construction-template/demo/assets/img/team/3.jpg",
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">Next</button>,  
    prevArrow: <button className="slick-prev">Previous</button>,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Animation happens once
    });
  }, []);

  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <Slider {...settings} className="team-carousel">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member"
            data-aos="fade-up"  // AOS effect for each team member
            data-aos-delay={`${index * 100}`}  // Stagger the animations
          >
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TeamSection;
