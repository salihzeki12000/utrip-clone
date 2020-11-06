import React, { useRef } from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
// @ts-ignore
import styles from "./Discovery.css";
// @ts-ignore
import destinations from "../../data/destinations";

const scrollToRefObject = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

export default function Discovery() {
  const destinationsRef = useRef(null);
  const executeScroll = () => scrollToRefObject(destinationsRef);

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Experience the World</h1>
        <div className={styles.actions}>
          <input
            className={styles.destinationSearch}
            type="text"
            placeholder="Enter a Destination"
          />
          <span className={styles.actionSeparator}>or</span>
          <button onClick={executeScroll} className={styles.inspireButton}>
            Let Us Inspire You
          </button>
        </div>
      </div>
      <div className={styles.destinations} ref={destinationsRef}>
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
