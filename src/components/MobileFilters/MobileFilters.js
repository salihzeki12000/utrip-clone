import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
// @ts-ignore
import styles from "./MobileFilters.module.scss";

export default function MobileFilters({ width }) {
  let { url } = useRouteMatch();
  const history = useHistory();

  const onNavChange = (e) => {
    history.push(e.target.value);
  };

  if (width < 800) {
    return (
      <div className={styles.MobileFilters}>
        <select
          className={styles.dropdownNav}
          onChange={onNavChange}
          aria-label="Navigation"
        >
          <option value={url} aria-label="Things to Do">
            Things to Do
          </option>
          <option value={`${url}/favorites`} aria-label="Favorites">
            Favorites
          </option>
        </select>
        <input
          type="search"
          placeholder="Search"
          className={styles.search}
          aria-label="Search"
        />
      </div>
    );
  }

  return null;
}
