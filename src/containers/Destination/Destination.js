import React from "react";
import { useParams } from "react-router-dom";
// @ts-ignore
import destinations from "../../data/destinations";
// @ts-ignore
import styles from "./Destination.css";

export default function Destination() {
  const { destinationSlug } = useParams();
  const destination = destinations.filter(
    (destination) => destination.slug === destinationSlug
  )[0];

  return (
    <div>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <h1 className={styles.heroTitle}>{destination.city}</h1>
      </div>
      <p>There&apos;s a bunch of stuff to do here</p>
    </div>
  );
}
