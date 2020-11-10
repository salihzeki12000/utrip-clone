import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import useWindowDimensions from "../../hooks/windowDimensions";
// @ts-ignore
import destinations from "../../data/destinations";
// @ts-ignore
import pois from "../../data/pois";
// @ts-ignore
import styles from "./Destination.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

export default function Destination() {
  const [showMap, setShowMap] = useState(false);
  const { destinationSlug } = useParams();
  const { width } = useWindowDimensions();
  const destination = destinations.filter(
    (destination) => destination.slug === destinationSlug
  )[0];

  const columns = width >= 1200 ? 4 : 3;
  let { path } = useRouteMatch();

  useEffect(() => {
    // TODO: Figure out why react-router-dom is scrolling to position of previous page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <h1 className={styles.heroTitle}>{destination.city}</h1>
      </div>
      <div className={styles.controls}>
        <button
          className={styles.mapToggle}
          onClick={() => setShowMap(!showMap)}
        >
          Map
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <Switch>
          <Route exact path={path}>
            <div
              className={`${styles.itemsWrapper} ${
                showMap ? styles.openMap : ""
              }`}
            >
              <div
                className={`${styles.items} ${showMap ? styles.openMap : ""}`}
              >
                {pois.map((poi, i) => {
                  let size = (i % 16) % 5 == 0 ? "large" : "small";
                  if (columns == 3) {
                    size = (i % 9) % 4 == 0 ? "large" : "small";
                  }
                  if (showMap) {
                    size = "half";
                  }
                  return <ItemCard key={poi.slug} item={poi} size={size} />;
                })}
              </div>
              {showMap ? <div className={styles.mapWrapper}></div> : null}
            </div>
          </Route>
          <Route path={`${path}/:itemSlug`}>
            <div className={styles.itemDetailsWrapper}>
              <ItemDetails />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
