import React from "react";
import { useHistory, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
// @ts-ignore
import items from "../../data/items";
// @ts-ignore
import styles from "./ItemDetails.module.scss";
import colors from "../../styles/categoryColors";
import useWindowDimensions from "../../hooks/windowDimensions";
import MapCircle from "../../components/Map/MapCircle/MapCirlce";

export default function ItemDetails() {
  const { itemSlug } = useParams();
  const history = useHistory();
  const { width } = useWindowDimensions();
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
        <div
          className={styles.details}
          style={{ borderColor: colors[item.category] }}
        >
          <div
            className={styles.itemBadge}
            style={{ backgroundColor: colors[item.category] }}
          >
            X
          </div>
          <div
            className={styles.itemImage}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
          <div className={styles.left}>
            <div className={styles.itemHeader}>
              <h2 className={styles.name}>{item.name}</h2>
              <p className={styles.phrase}>{item.phrase}</p>
            </div>
            <div className={styles.contact}>
              <div className={styles.contactType}>
                <div className={styles.contactIcon}>X</div>
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.location : "Address"}
                </span>
              </div>
              <div className={styles.contactType}>
                <div className={styles.contactIcon}>X</div>
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.website : "Website"}
                </span>
              </div>
              <div className={styles.contactType}>
                <div className={styles.contactIcon}>X</div>
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.phone : "Phone"}
                </span>
              </div>
            </div>
            {width >= 1200 ? (
              <div className={styles.social}>
                <h4>Share</h4>
                <div className={styles.socialIcons}>
                  <div className={styles.socialIcon}>X</div>
                  <div className={styles.socialIcon}>X</div>
                  <div className={styles.socialIcon}>X</div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={styles.about}>
            <h3 className={styles.aboutHeader}>About</h3>
            <p className={styles.aboutContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Euismod nisi porta lorem mollis aliquam ut porttitor. Velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus.
              Ultrices in iaculis nunc sed augue. A cras semper auctor neque
              vitae tempus quam pellentesque. Tincidunt augue interdum velit
              euismod in pellentesque massa placerat. Etiam erat velit
              scelerisque in dictum non. Lobortis mattis aliquam faucibus purus.
              Netus et malesuada fames ac. Non arcu risus quis varius quam
              quisque id diam. Enim facilisis gravida neque convallis a cras
              semper auctor neque.
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
