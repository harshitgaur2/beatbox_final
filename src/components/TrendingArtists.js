import React from "react";
import "./TrendingArtists.css";

// Import the images
import arijit from "./arijit.png";
import mahvesh from "./mahvesh.png";
import coldplay from "./coldplay.png";
import harsh from "./harsh.png";

const artists = [
  { id: 1, name: "Arijit Singh", img: arijit },
  { id: 2, name: "RJ Mahvish", img: mahvesh },
  { id: 3, name: "Coldplay", img: coldplay },
  { id: 4, name: "Harsh Gujral", img: harsh },
];

const TrendingArtists = () => {
  return (
    <section className="trending-artists">
      <h2>Trending Artists</h2>
      <div className="artist-container">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.img} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingArtists;
