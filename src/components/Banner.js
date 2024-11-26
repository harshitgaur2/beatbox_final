import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <h1>Your Event, Your Way</h1>
      <div className="search-area">
        <select>
          <option>Select Event</option>
        </select>
        <select>
          <option>Select Location</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
    </header>
  );
};

export default Banner;
