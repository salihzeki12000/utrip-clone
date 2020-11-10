import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
// @ts-ignore
import styles from "./ItemCard.module.scss";
import colors from "../../styles/categoryColors";

export default function ItemCard({ item, size }) {
  let { url } = useRouteMatch();
  return (
    <Link
      to={`${url}/${item.slug}`}
      className={`${styles.itemCardWrapper} ${styles[size]}`}
      style={{ borderColor: colors[item.category] }}
    >
      <div
        className={styles.itemCard}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className={styles.itemNameWrapper}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <p className={styles.itemPhrase}>{item.phrase}</p>
        </div>
      </div>
    </Link>
  );
}
