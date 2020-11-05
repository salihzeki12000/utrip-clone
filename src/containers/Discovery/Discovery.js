import React from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import "./Discovery.css";
// @ts-ignore
import destinations from "../../data/destinations";

export default function Discovery() {
  return (
    <div>
      <div className="discoveryHero">
        <h1 className="heroTitle">Experience the World</h1>
      </div>
      <div className="destinations">
        {destinations.map((destination, i) => {
          const size = (i + 1) % 4 >= 2 ? "large" : "small";
          return (
            <DestinationCard
              key={destination.slug}
              size={size}
              destination={destination}
            />
          );
        })}
      </div>
    </div>
  );
}
