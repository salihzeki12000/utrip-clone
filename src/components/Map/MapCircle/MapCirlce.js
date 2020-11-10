import React from "react";
// @ts-ignore
import styles from "./MapCircle.module.scss";
import colors from "../../../styles/categoryColors";

export default function MapCircle({ item, $hover }) {
  return (
    <div
      className={styles.mapCircle}
      style={{ backgroundColor: colors[item.category] }}
    >
      {$hover ? item.name : ""}
    </div>
  );
}
