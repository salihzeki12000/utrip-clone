import React from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

export default function DestinationCard({ destination }) {
  return (
    <Link to={destination.slug} className="destinationCardWrapper">
      <div
        className="destinationCard"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="destinationNameWrapper">
          <h2 className="destinationName">{destination.city}</h2>
        </div>
      </div>
    </Link>
  );
}
