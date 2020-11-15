import React from "react";
import GoogleMapReact from "google-map-react";
import MapCircle from "./MapCircle/MapCircle";

export default function Map({ items }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      }}
      defaultCenter={{
        lat: items[0].lat,
        lng: items[0].lng,
      }}
      defaultZoom={15}
      yesIWantToUseGoogleMapApiInternals
    >
      {items.map((item) => (
        <MapCircle lat={item.lat} lng={item.lng} item={item} />
      ))}
    </GoogleMapReact>
  );
}
