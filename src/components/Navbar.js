import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.png"; // Import the SVG file

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to detect scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // User has scrolled down
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Artists</li>
        <li>Vendors</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>
          <button className="contact-btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
