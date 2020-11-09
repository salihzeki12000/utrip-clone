import React from "react";
import { useHistory, useParams } from "react-router-dom";
// @ts-ignore
import pois from "../../data/pois";
// @ts-ignore
import styles from "./ItemDetails.module.scss";
import colors from "../../styles/categoryColors";

export default function ItemDetails() {
  const { itemSlug } = useParams();
  const history = useHistory();
  const item = pois.filter((poi) => poi.slug == itemSlug)[0];

  return (
    <div>
      <div className={styles.backButtonWrapper}>
        <button className={styles.backButton} onClick={() => history.goBack()}>
          Back
        </button>
      </div>
      <div
        className={styles.itemImage}
        style={{
          backgroundImage: `url(${item.image})`,
          borderColor: colors[item.category],
        }}
      />
      <div className={styles.itemHeader}>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.phrase}>{item.phrase}</p>
      </div>
    </div>
  );
}
