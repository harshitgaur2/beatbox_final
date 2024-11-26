import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Company Logo</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Artists</li>
        <li>Vendors</li>
        <li>About</li>
        <li>Portfolio</li>
        <li><button className="contact-btn">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
