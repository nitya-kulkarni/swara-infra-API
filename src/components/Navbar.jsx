import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Updated to reflect unique CSS

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-social-links">
        <a href="https://www.instagram.com/swarainfra?igsh=MW5lNGRxOXNremNuZA==" aria-label="Instagram">
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

      {/* Hamburger Menu */}
      <div className="custom-hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`custom-nav-links ${isMenuOpen ? "custom-active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/packages" onClick={closeMenu}>
            Packages
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
