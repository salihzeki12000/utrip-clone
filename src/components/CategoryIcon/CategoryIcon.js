import React from "react";
import {
  AccountBalance,
  Brush,
  BeachAccess,
  LocalBar,
  LocalCafe,
  LocalMall,
  MusicNote,
  Restaurant,
  Room,
  Terrain,
} from "@material-ui/icons";

export default function CategoryIcon({ category, style }) {
  switch (category) {
    case "history":
      return <AccountBalance style={style} />;
    case "entertainment":
      return <MusicNote style={style} />;
    case "art":
      return <Brush style={style} />;
    case "nature":
      return <Terrain style={style} />;
    case "relaxation":
      return <BeachAccess style={style} />;
    case "shopping":
      return <LocalMall style={style} />;
    case "cuisine":
      return <LocalCafe style={style} />;
    case "food":
      return <Restaurant style={style} />;
    case "nightlife":
      return <LocalBar style={style} />;
    default:
      return <Room style={style} />;
  }
}
