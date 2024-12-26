import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUs.css";

// Import Images (Ensure these paths are correct)
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import featuring from "../assets/featuring.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2>About Us</h2>
          <p className="text-muted">
            Swarainfra turns that dream into reality. We're your one-stop shop
            for everything home construction. From expert civil engineers to a
            team that oversees every detail, we handle it all.
          </p>
        </div>

        {/* Card 1 */}
        <div className="card mb-5 shadow-sm">
          <div className="row no-gutters align-items-center">
            <div className="col-md-6">
              <img src={mission} alt="Mission" className="img-fluid fixed-image" />
            </div>
            <div className="col-md-6 p-4">
              <h3>Our Mission</h3>
              <p>
                We believe that just growing bigger isn’t growing better.
                Growing better means building a company and culture that endure
                and scale to meet the needs of our customers for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mb-5 shadow-sm">
          <div className="row no-gutters align-items-center flex-row-reverse">
            <div className="col-md-6">
              <img src={vision} alt="Vision" className="img-fluid fixed-image" />
            </div>
            <div className="col-md-6 p-4">
              <h3>Our Vision</h3>
              <p>
                Our vision at Swara Infra is to be recognized as the premier
                construction company, setting the standard for excellence in the
                industry. We envision a future where our innovative solutions,
                sustainable practices, and unwavering commitment to quality
                propel us to the forefront of construction innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mb-5 shadow-sm">
          <div className="row no-gutters align-items-center">
            <div className="col-md-6">
              <img
                src={featuring}
                alt="Featuring"
                className="img-fluid fixed-image"
              />
            </div>
            <div className="col-md-6 p-4">
              <h3>Featuring</h3>
              <p>
                New & Trending Designs, No Subcontracts, No Hidden Charges,
                Timely Delivery, Fair Pricing, High-quality work with No
                Compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;