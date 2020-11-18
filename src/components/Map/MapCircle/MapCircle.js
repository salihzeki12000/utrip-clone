import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFavorites } from "../../../context/favorites-context";
// @ts-ignore
import styles from "./MapCircle.module.scss";
import colors from "../../../styles/categoryColors";
import CategoryIcon from "../../CategoryIcon/CategoryIcon";
import { Favorite } from "@material-ui/icons";

export default function MapCircle({ item, $hover }) {
  const { destinationSlug } = useParams();
  const [favorites] = useFavorites();
  const favorite = favorites.favorites.indexOf(item.slug) >= 0;

  return (
    <Link
      to={`/${destinationSlug}/${item.slug}`}
      className={styles.mapCircle}
      style={{ backgroundColor: colors[item.category] }}
    >
      {$hover ? (
        <div
          className={styles.itemHover}
          style={{ borderColor: colors[item.category] }}
        >
          <p className={styles.itemName}>{item.name}</p>
          <div
            className={styles.itemImage}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
        </div>
      ) : null}
      {favorite ? (
        <Favorite className={styles.favorite} style={{ fontSize: 10 }} />
      ) : null}
      <CategoryIcon
        category={item.category}
        style={{ color: "#fff", fontSize: 10 }}
      />
    </Link>
  );
}
