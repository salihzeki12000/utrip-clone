import React from "react";
import { Link, useParams } from "react-router-dom";
// @ts-ignore
import styles from "./MapCircle.module.scss";
import colors from "../../../styles/categoryColors";
import CategoryIcon from "../../CategoryIcon/CategoryIcon";

export default function MapCircle({ item, $hover }) {
  const { destinationSlug } = useParams();
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
      <CategoryIcon
        category={item.category}
        style={{ color: "#fff", fontSize: 10 }}
      />
    </Link>
  );
}
