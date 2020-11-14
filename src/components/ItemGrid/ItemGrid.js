import React from "react";
import ItemCard from "../ItemCard/ItemCard";
// @ts-ignore
import styles from "./ItemGrid.module.scss";

export default function ItemGrid({ items, columns, showMap, favorites }) {
  if (favorites && !items.length) {
    return (
      <div className={styles.emptyFavorites}>
        You haven&apos;t selected any favorites yet.
      </div>
    );
  }

  return (
    <div className={`${styles.items} ${showMap ? styles.openMap : ""}`}>
      {items.map((poi, i) => {
        let size = (i % 16) % 5 == 0 ? "large" : "small";
        if (columns == 3) {
          size = (i % 9) % 4 == 0 ? "large" : "small";
        }
        if (showMap) {
          size = "half";
        }
        return <ItemCard key={poi.slug} item={poi} size={size} />;
      })}
    </div>
  );
}
