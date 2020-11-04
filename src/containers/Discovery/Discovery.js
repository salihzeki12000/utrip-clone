import React from "react";
import { Link } from "react-router-dom";
import "./Discovery.css";

export default function Discovery() {
  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">Experience the World</h1>
      </div>
      <ul>
        <li>
          <Link to="/seattle-wa">Seattle</Link>
        </li>
        <li>
          <Link to="/portland-or">Portland</Link>
        </li>
        <li>
          <Link to="/taipei-tw">Taipei</Link>
        </li>
      </ul>
    </div>
  );
}
