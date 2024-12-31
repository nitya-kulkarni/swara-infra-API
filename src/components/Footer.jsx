import React from "react";
import "../styles/Footer.css"; // Assuming the CSS is in the same directory

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
      <a href="/" aria-label="Home">
        <img src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png" alt="Swara Infra Logo" className="footer-logo" /></a>
        <h1>Swara Infra</h1>
        <div className="social-links2">
          <a href="https://www.instagram.com/swarainfra" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://wa.me/8217563914" aria-label="WhatsApp">
  <i className="fab fa-whatsapp"></i>
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
        <p>© 2024 Swara Infra, Inc. All Rights Reserved</p>
      </div>
      <div className="footer-column">
        <h4>Address</h4>
        <p>
          Hubballi Office: Shop No 17, Second Floor, Ridhi Sidhi Complex,
          Opp. Giants School Akshay Park, Gokul Road Hubballi
        </p>
        <p>Phone No: +91 9538675322<br></br>+91 9902718498</p>
        <p>Email ID: swarainfra1@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;