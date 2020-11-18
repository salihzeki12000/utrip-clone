import React, { useEffect, useState } from "react";
import { useFavorites } from "../../context/favorites-context";
import ItemCard from "../ItemCard/ItemCard";
// @ts-ignore
import styles from "./ItemGrid.module.scss";

export default function ItemGrid({ items, columns, showMap, favoritesGrid }) {
  const [favorites] = useFavorites();
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => favorites.favorites.indexOf(item.slug) >= 0
    );

    setFavoriteItems(filteredItems);
  }, [items, favorites.favorites]);

  if (favoritesGrid && !favoriteItems.length) {
    return (
      <div className={styles.emptyFavorites}>
        You haven&apos;t selected any favorites yet.
      </div>
    );
  } else if (favoritesGrid) {
    items = favoriteItems;
  }

  return (
    <div className={`${styles.gridWrapper} ${showMap ? styles.openMap : ""}`}>
      <div className={styles.items}>
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
    </div>
  );
}
