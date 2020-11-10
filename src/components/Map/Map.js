import React from "react";
import GoogleMapReact from "google-map-react";
import MapCircle from "./MapCircle/MapCirlce";

export default function Map({ items }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBMuLSNHehI898XQW2UDuSNiHjK10RUNFg",
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
