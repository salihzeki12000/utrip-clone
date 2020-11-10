import React from "react";
// @ts-ignore
import styles from "./MapCircle.module.scss";
import colors from "../../../styles/categoryColors";

export default function MapCircle({ item }) {
  console.log(item.category, colors[item.category]);
  return (
    <div
      className={styles.mapCricle}
      style={{ backgroundColor: colors[item.category] }}
    >
      {item.name}
    </div>
  );
}
