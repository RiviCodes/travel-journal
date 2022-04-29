import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <section className="card-container">
      <div className="picture-container">
        <img src={`../images/${props.item.imageUrl}`} alt="location" />
      </div>
      <div>
        <img
          src={`../images/${props.item.locationIcon}`}
          className="location-icon"
        />
        <span className="card--location">{props.item.location}</span>
        <a
          href={props.item.googleMapsUrl}
          target="_blank"
          className="card--mapsUrl"
        >
          View on Google Maps
        </a>
        <p className="card--title">{props.item.title}</p>
        <span className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p className="card--description">{props.item.description}</p>
      </div>
    </section>
  );
}
