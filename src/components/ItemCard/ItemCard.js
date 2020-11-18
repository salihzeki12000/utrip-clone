import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// @ts-ignore
import styles from "./ItemCard.module.scss";
import colors from "../../styles/categoryColors";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";

export default function ItemCard({ item, size }) {
  let { url } = useRouteMatch();
  const [hoverFavorite, setHoverFavorite] = useState();

  const toggleFavorite = (e) => {
    e.preventDefault();
    console.log(item.slug);
  };

  return (
    <Link
      to={`${url}/${item.slug}`}
      className={`${styles.itemCardWrapper} ${styles[size]}`}
      style={{ borderColor: colors[item.category] }}
      aria-label={item.name}
    >
      <div
        className={styles.itemCard}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className={styles.itemDetails}>
          <div className={styles.itemNameWrapper}>
            <SvgIcon
              component={hoverFavorite ? Favorite : FavoriteBorder}
              className={styles.favorite}
              onMouseEnter={() => setHoverFavorite(true)}
              onMouseLeave={() => setHoverFavorite(false)}
              onClick={toggleFavorite}
            />
            <span className={styles.itemName}>{item.name}</span>
          </div>
          <span className={styles.itemPhrase}>{item.phrase}</span>
        </div>
      </div>
    </Link>
  );
}
