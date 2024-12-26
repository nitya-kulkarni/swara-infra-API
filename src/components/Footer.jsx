import React from "react";
import "../styles/Footer.css"; // Assuming the CSS is in the same directory

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png" alt="Swara Infra Logo" className="footer-logo" />
        <h1>Swara Infra</h1>
        <div className="social-links2">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Links</h4>
        <ul>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/Projects">Construction</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/packages">Packages</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Address</h4>
        <p>
          Hubballi Office: Shop No 17, Second Floor, Ridhi Sidhi Complex,
          Opp. Giants School Akshay Park, Gokul Road Hubballi
        </p>
        <p>Phone No: [Your Phone Number]</p>
        <p>Email ID: [Your Email ID]</p>
      </div>
    </footer>
  );
};

export default Footer;