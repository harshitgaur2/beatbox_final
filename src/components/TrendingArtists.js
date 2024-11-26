import React from "react";
import "./TrendingArtists.css";

const artists = [
  { id: 1, name: "Arijit Singh", img: "arijit.jpg" },
  { id: 2, name: "RJ Mahvish", img: "mahvish.jpg" },
  { id: 3, name: "Coldplay", img: "coldplay.jpg" },
  { id: 4, name: "Harsh Gujral", img: "harsh.jpg" },
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
