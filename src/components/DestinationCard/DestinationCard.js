import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import styles from "./DestinationCard.css";

export default function DestinationCard({ destination, size }) {
  return (
    <Link
      to={destination.slug}
      className={`${styles.destinationCardWrapper} ${styles[size]}`}
    >
      <div
        className={styles.destinationCard}
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className={styles.destinationNameWrapper}>
          <h2 className={styles.destinationName}>{destination.city}</h2>
        </div>
      </div>
    </Link>
  );
}
