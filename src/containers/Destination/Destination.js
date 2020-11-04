import React from "react";
import { useParams } from "react-router-dom";
// @ts-ignore
import destinations from "../../data/destinations";
import "./Destination.css";

export default function Destination() {
  const { destinationSlug } = useParams();
  const destination = destinations[destinationSlug];

  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <h1 className="hero-title">{destination.city}</h1>
      </div>
      <p>There's a bunch of stuff to do here</p>
    </div>
  );
}
