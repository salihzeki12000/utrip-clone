import React from "react";
// @ts-ignore
import styles from "./MapCircle.module.scss";
import colors from "../../../styles/categoryColors";
import { Restaurant } from "@material-ui/icons";

export default function MapCircle({ item, $hover }) {
  return (
    <div
      className={styles.mapCircle}
      style={{ backgroundColor: colors[item.category] }}
    >
      <Restaurant style={{ color: "#fff", fontSize: 10 }} />
      {$hover ? item.name : ""}
    </div>
  );
}
