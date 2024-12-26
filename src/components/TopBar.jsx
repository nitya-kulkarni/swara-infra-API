import React from "react";
import "../styles/TopBar.css";
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="social-links1">
      <Link to="*">
        <img src="https://swarainfra.homes/static/media/logo.b9aec6b0bfc6345fdc2e.png" alt="Swara Infra Logo" className="logo" alt="Swara Infra Logo"
          className="navbar-logo"   />
      </Link>
       <div className="logo-text">Swara Infra</div>
          
          </div>
        <div className="contact-info">
        {/* <a href="#" aria-label="Instagram">
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
          </a> */}
          
          <span>📞 +1 718-999-3939</span>
          <span>✉ contact@construction.com</span>
          <span>⏰ Mon-Fri: 7:00 - 7:00</span>
        </div>
    </div>
  );
};

export default TopBar;