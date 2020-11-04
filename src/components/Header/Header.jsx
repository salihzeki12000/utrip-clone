import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="headerLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
