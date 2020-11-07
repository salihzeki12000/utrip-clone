import React, { useRef } from "react";
import Select from "react-select";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
// @ts-ignore
import destinations from "../../data/destinations";
// @ts-ignore
import styles from "./Discovery.module.scss";
import "./Select.scss";

const scrollToRefObject = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });

const options = [];
destinations.map((destination) => {
  options.push({ value: destination.slug, label: destination.city });
});

export default function Discovery({ history }) {
  const destinationsRef = useRef(null);
  const executeScroll = () => scrollToRefObject(destinationsRef);

  const handleSelect = (e) => {
    history.push(e.value);
  };

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Experience the World</h1>
        <div className={styles.actions}>
          <Select
            className="destination-search-container"
            classNamePrefix="destination-search"
            options={options}
            onChange={handleSelect}
            placeholder="Enter a Destination"
          />
          <span className={styles.actionSeparator}>or</span>
          <button className={styles.inspireButton} onClick={executeScroll}>
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
