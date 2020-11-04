import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// @ts-ignore
import logo from "../../assets/images/utrip_logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="utrip" />
      </Link>
    </div>
  );
}
