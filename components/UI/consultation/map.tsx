import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Fix default icon issue in Next.js (TypeScript safe)
if (typeof window !== "undefined") {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
}

const position: [number, number] = [35.6892, 51.389]; // Example: Tehran

const MapComponent = () => (
  <MapContainer
    center={position}
    zoom={13}
    style={{ height: "400px", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    />
    <Marker position={position}>
      <Popup>موقعیت نمونه</Popup>
    </Marker>
  </MapContainer>
);

export default MapComponent;
