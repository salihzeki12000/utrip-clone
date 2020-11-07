import React from "react";
// @ts-ignore
import styles from "./ItemCard.module.scss";
import colors from "../../styles/categoryColors";

export default function ItemCard({ item }) {
  const size = "small";
  return (
    <div
      // to={item.slug}
      className={`${styles.itemCardWrapper} ${styles[size]}`}
      style={{ borderColor: colors.food }}
    >
      <div
        className={styles.itemCard}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className={styles.itemNameWrapper}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <p className={styles.itemPhrase}>This is a phrase</p>
        </div>
      </div>
    </div>
  );
}
