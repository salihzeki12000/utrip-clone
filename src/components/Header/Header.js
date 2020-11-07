import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import styles from "./Header.module.scss";
// @ts-ignore
import logo from "../../assets/images/utrip_logo.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="utrip" />
      </Link>
    </div>
  );
}
