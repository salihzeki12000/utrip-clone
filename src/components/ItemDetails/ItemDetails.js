import React from "react";
import { useParams, Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
// @ts-ignore
import pois from "../../data/pois";
// @ts-ignore
import styles from "./ItemDetails.module.scss";
import colors from "../../styles/categoryColors";
import useWindowDimensions from "../../hooks/windowDimensions";
import MapCircle from "../Map/MapCircle/MapCircle";
import CategoryIcon from "../../components/CategoryIcon/CategoryIcon";
import {
  ArrowBack,
  Facebook,
  Language,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";

export default function ItemDetails() {
  const { itemSlug, destinationSlug } = useParams();
  const { width } = useWindowDimensions();
  const item = pois.filter((poi) => poi.slug == itemSlug)[0];

  return (
    <div>
      <Link to={`/${destinationSlug}`} className={styles.backButtonWrapper}>
        <button className={styles.backButton} aria-label="Back">
          <ArrowBack style={{ fontSize: 16, marginRight: 5 }} /> Back
        </button>
      </Link>
      <div className={styles.content}>
        <div
          className={styles.details}
          style={{ borderColor: colors[item.category] }}
        >
          <div
            className={styles.itemBadge}
            style={{ backgroundColor: colors[item.category] }}
          >
            <CategoryIcon
              category={item.category}
              style={{ marginBottom: 4 }}
            />
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
              <a
                href={`https://maps.google.com/?q=${item.location}`}
                target="_blank"
                rel="noreferrer"
                className={styles.contactType}
              >
                <Room className={styles.contactIcon} style={{ fontSize: 20 }} />
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.location : "Address"}
                </span>
              </a>
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className={styles.contactType}
              >
                <Language
                  className={styles.contactIcon}
                  style={{ fontSize: 20 }}
                />
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.website : "Website"}
                </span>
              </a>
              <a href={`tel:${item.phone}`} className={styles.contactType}>
                <Phone
                  className={styles.contactIcon}
                  style={{ fontSize: 20 }}
                />
                <span className={styles.contactLabel}>
                  {width >= 1200 ? item.phone : "Phone"}
                </span>
              </a>
            </div>
            {width >= 1200 ? (
              <div className={styles.social}>
                <h4>Share</h4>
                <div className={styles.socialIcons}>
                  <Facebook className={styles.socialIcon} />
                  <Twitter className={styles.socialIcon} />
                  <LinkIcon className={styles.socialIcon} />
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
            defaultZoom={16}
          >
            {pois.map((poi) => (
              <MapCircle
                key={poi.slug}
                lat={poi.lat}
                lng={poi.lng}
                item={poi}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
