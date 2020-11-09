import React from "react";
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
  const { destinationSlug } = useParams();
  const { width } = useWindowDimensions();
  const destination = destinations.filter(
    (destination) => destination.slug === destinationSlug
  )[0];

  const columns = width >= 1200 ? 4 : 3;
  let { path } = useRouteMatch();

  return (
    <div>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <h1 className={styles.heroTitle}>{destination.city}</h1>
      </div>
      <div className={styles.items}>
        {pois.map((poi, i) => {
          let size = (i % 16) % 5 == 0 ? "large" : "small";
          if (columns == 3) {
            size = (i % 9) % 4 == 0 ? "large" : "small";
          }
          return <ItemCard key={poi.slug} item={poi} size={size} />;
        })}
      </div>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:itemSlug`}>
          <div className={styles.itemDetailsWrapper}>
            <ItemDetails />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
