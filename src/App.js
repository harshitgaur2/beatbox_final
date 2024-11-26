import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import EventCards from "./components/EventCards";
import TrendingArtists from "./components/TrendingArtists";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <EventCards />
      <TrendingArtists />
      <Footer />
    </div>
  );
}

export default App;
