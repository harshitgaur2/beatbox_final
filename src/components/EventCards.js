import React from "react";
import "./EventCards.css";
import corporateImage from "./corporate_event.png";
import bday from "./bday.png";
import anni from "./anni.png";

const events = [
  { id: 1, title: "Destination Wedding", img: "destination_wed.png" },
  { id: 2, title: "Corporate Event", img: corporateImage},
  { id: 3, title: "Birthday Party", img: bday },
  { id: 4, title: "Anniversary Party", img: anni },
];

const EventCards = () => {
  return (
    <section className="event-cards">
      <h2>Choose Your Event</h2>
      <div className="card-container">
        {events.map((event) => (
          <div key={event.id} className="card">
            <img src={event.img} alt={event.title} />
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCards;
