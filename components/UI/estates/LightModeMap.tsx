"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON as LeafletGeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GeoJSON as GeoJSONType } from "geojson";

// Fix Leaflet marker icon issue in Webpack (Next.js)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface LightModeMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  popupContent?: string;
  geoJsonData?: GeoJSONType; // Use GeoJSON type from @types/geojson
  geoJsonUrl?: string; // URL to GeoJSON file
}

export default function LightModeMap({
  latitude,
  longitude,
  zoom = 13,
  popupContent = "مشاوره املاک",
  geoJsonData,
  geoJsonUrl,
}: LightModeMapProps) {
  const position: [number, number] = [latitude, longitude];
  const [geoJson, setGeoJson] = useState<GeoJSONType | null>(
    geoJsonData || null
  );

  // Fetch GeoJSON from URL if provided
  useEffect(() => {
    if (geoJsonUrl) {
      fetch(geoJsonUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch GeoJSON");
          }
          return response.json();
        })
        .then((data: GeoJSONType) => {
          setGeoJson(data);
        })
        .catch((error) => {
          console.error("Error fetching GeoJSON:", error);
        });
    }
  }, [geoJsonUrl]);

  // Style for GeoJSON features
  const geoJsonStyle = () => ({
    color: "#1e40af", // Blue border
    weight: 2,
    fillColor: "#3b82f6", // Light blue fill
    fillOpacity: 0.3,
  });

  // Optional: Customize each feature (e.g., add popups)
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  return (
    <div
      dir="rtl"
      className="w-full z-0 max-w-[500px] h-[300px] bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden mx-auto">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="leaflet-container">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Marker position={position}>
          <Popup>{popupContent}</Popup>
        </Marker>
        {geoJson && (
          <LeafletGeoJSON
            data={geoJson}
            style={geoJsonStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </div>
  );
}
