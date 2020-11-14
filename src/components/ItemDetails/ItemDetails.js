import React from "react";
import { useHistory, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
// @ts-ignore
import items from "../../data/items";
// @ts-ignore
import styles from "./ItemDetails.module.scss";
import colors from "../../styles/categoryColors";
import MapCircle from "../../components/Map/MapCircle/MapCirlce";

export default function ItemDetails() {
  const { itemSlug } = useParams();
  const history = useHistory();
  const item = items.filter((poi) => poi.slug == itemSlug)[0];

  return (
    <div>
      <div className={styles.backButtonWrapper}>
        <button
          className={styles.backButton}
          onClick={() => history.goBack()}
          aria-label="Back"
        >
          Back
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
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
          <div className={styles.contact}>
            <div className={styles.contactType}>
              <div className={styles.contactIcon}>X</div>
              <span className={styles.contactLabel}>Address</span>
            </div>
            <div className={styles.contactType}>
              <div className={styles.contactIcon}>X</div>
              <span className={styles.contactLabel}>Website</span>
            </div>
            <div className={styles.contactType}>
              <div className={styles.contactIcon}>X</div>
              <span className={styles.contactLabel}>Phone</span>
            </div>
          </div>
          <div className={styles.about}>
            <h3 className={styles.aboutHeader}>About</h3>
            <p className={styles.aboutContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={{
              lat: item.lat,
              lng: item.lng,
            }}
            defaultZoom={15}
          >
            <MapCircle lat={item.lat} lng={item.lng} item={item} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
