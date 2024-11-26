import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company Logo</h4>
        <p>Social Media Links</p>
      </div>
      <div className="footer-section">
        <h4>Artists</h4>
        <ul>
          <li>Arijit Singh</li>
          <li>RJ Mahvish</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
