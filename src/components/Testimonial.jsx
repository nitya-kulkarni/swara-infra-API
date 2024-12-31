import React, { useState, useEffect } from "react";
import "../styles/Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const PartnersTestimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "This is a great company to work with!",
      author: "Jane Doe",
      position: "CEO",
      image: "https://themes247.net/html5/construction-template/demo/assets/img/testimonials/3.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Excellent quality and great support!",
      author: "John Smith",
      position: "Manager",
      image: "https://themes247.net/html5/construction-template/demo/assets/img/testimonials/2.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      text: "Professional and reliable services.",
      author: "Clark",
      position: "Director",
      image: "https://themes247.net/html5/construction-template/demo/assets/img/testimonials/1.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[testimonialIndex];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="container">
      <div className="content">
        {/* Partners Section */}
        <div className="partners-section" data-aos="fade-up">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-card" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://www.swarainfra.homes/static/media/Acc-removebg-preview.e93f3be7f4e82697aaa8.png"
                alt="Partner 1"
              />
              <p>Partner 1</p>
            </div>
            <div className="partner-card" data-aos="fade-up" data-aos-delay="200">
              <img
                src="https://www.swarainfra.homes/static/media/Kajaria-removebg-preview.f92111de18baf73b88eb.png"
                alt="Partner 2"
              />
              <p>Partner 2</p>
            </div>
            <div className="partner-card" data-aos="fade-up" data-aos-delay="300">
              <img
                src="https://www.swarainfra.homes/static/media/kamdenu-removebg-preview.37bb867c618e4a9bf62a.png"
                alt="Partner 3"
              />
              <p>Partner 3</p>
            </div>
            <div className="partner-card" data-aos="fade-up" data-aos-delay="400">
              <img
                src="https://www.swarainfra.homes/static/media/fixit-removebg-preview.f42fd6b5aaabeb31698e.png"
                alt="Partner 4"
              />
              <p>Partner 4</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section" data-aos="fade-up" data-aos-duration="1500">
          <h2>Testimonials</h2>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <p>"{currentTestimonial.text}"</p>
            <div className="testimonial-author">
              <img src={currentTestimonial.image} alt="Author" />
              <div>
                <h4>{currentTestimonial.author}</h4>
                <p>{currentTestimonial.position}</p>
              </div>
              <span className="rating">{currentTestimonial.rating}</span>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="testimonial-buttons" data-aos="fade-up" data-aos-delay="300">
            <button onClick={prevTestimonial}>Previous</button>
            <button onClick={nextTestimonial}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
