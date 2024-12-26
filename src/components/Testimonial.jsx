import React, { useState } from "react";
import "../styles/Testimonial.css";

const PartnersTestimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "This is a great company to work with. Their service is outstanding!",
      author: "Jane Doe",
      position: "CEO, Example Corp",
      image: "https://themes247.net/html5/construction-template/demo/assets/img/testimonials/3.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Excellent quality and great customer support. Highly recommended!",
      author: "John Smith",
      position: "Manager, ABC Ltd",
      image: "https://themes247.net/html5/construction-template/demo/assets/img/testimonials/2.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      text: "Professional and reliable services. Great experience overall.",
      author: "Emily Clark",
      position: "Director, Tech Solutions",
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

  return (
    <div className="container">
      <div className="content">
        {/* Partners Section */}
        <div className="partners-section">
          <h2>Our Partners</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <img
                src="https://www.swarainfra.homes/static/media/Acc-removebg-preview.e93f3be7f4e82697aaa8.png"
                alt="Partner 1"
              />
              <p>Partner 1</p>
            </div>
            <div className="partner-card">
              <img
                src="https://www.swarainfra.homes/static/media/Kajaria-removebg-preview.f92111de18baf73b88eb.png"
                alt="Partner 2"
              />
              <p>Partner 2</p>
            </div>
            <div className="partner-card">
              <img
                src="https://www.swarainfra.homes/static/media/kamdenu-removebg-preview.37bb867c618e4a9bf62a.png"
                alt="Partner 3"
              />
              <p>Partner 3</p>
            </div>
            <div className="partner-card">
              <img
                src="https://www.swarainfra.homes/static/media/fixit-removebg-preview.f42fd6b5aaabeb31698e.png"
                alt="Partner 4"
              />
              <p>Partner 4</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonial-card">
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
          <div className="testimonial-buttons">
            <button onClick={prevTestimonial}>Previous</button>
            <button onClick={nextTestimonial}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
