/* eslint-disable */
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useState, useRef } from "react";

interface FeatureProperties {
  id: number;
  name: string;
  // Add other properties you expect
  [key: string]: any; // For any additional dynamic properties
}
interface IMap {
  mapSelection: FeatureProperties | null;
  setMapSelection: (value: FeatureProperties) => void;
}
const defaultStyle = {
  color: "#b4b4b4", // Default blue border color
  weight: 2, // Border thickness
  opacity: 1, // Border opacity
  fillColor: "#7b7b7b", // Fill color
  fillOpacity: 0.2, // Fill transparency
};

// Fix default icon issue in Next.js (TypeScript safe)
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position: [number, number] = [37.493, 57.32]; // Bojnurd coordinates

// Helper component to fit map to GeoJSON bounds
type FitBoundsProps = { geoData: any };
const FitBounds: React.FC<FitBoundsProps> = ({ geoData }) => {
  const map = useMap();
  useEffect(() => {
    if (geoData) {
      const geojsonLayer = L.geoJSON(geoData);
      const bounds = geojsonLayer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }
  }, [geoData, map]);
  return null;
};

const MapComponent = ({ mapSelection, setMapSelection }: IMap) => {
  const [geoData, setGeoData] = useState<any>(null);
  const [clickedFeature, setClickedFeature] = useState<any>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON>(null);
  const mapRef = useRef<L.Map | null>(null);
  useEffect(() => {
    fetch("/assets/mahalle_21kh_M_FeaturesToJSO.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  // Bouncy effect: return to center after drag or zoom
  useEffect(() => {
    if (mapInstance) {
      const handleMoveOrZoomEnd = () => {
        mapInstance.flyTo(position, 12, { animate: true, duration: 1 });
      };
      mapInstance.on("moveend", handleMoveOrZoomEnd);
      mapInstance.on("zoomend", handleMoveOrZoomEnd);
      return () => {
        mapInstance.off("moveend", handleMoveOrZoomEnd);
        mapInstance.off("zoomend", handleMoveOrZoomEnd);
      };
    }
  }, [mapInstance]);

  // leaflet font change function
  const onEachFeature = (feature: any, layer: any) => {
    layer.bindPopup(`
    <div style="font-family: 'Modam', sans-serif; font-weight: 500;">
      ${feature.properties.name || "Unnamed Feature"}
    </div>
  `);
    layer.on({
      click: (e: any) => {
        setClickedFeature({
          latlng: e.latlng,
          properties: feature.properties,
        });
      },
    });
    layer.on({
      click: () => {
        // Reset previous selections' styles
        if (geoJsonLayerRef.current) {
          geoJsonLayerRef.current.eachLayer((l: any) => {
            l.setStyle({ color: "#b4b4b4", weight: 2 }); // Default style
          });
        }

        // Highlight clicked feature
        layer.setStyle({ color: "#ff0000", weight: 2 }); // Selected style

        // Store selection
        setMapSelection(feature.properties);
      },
    });
  };

  return (
    <MapContainer
      center={position}
      zoom={28}
      minZoom={12}
      style={{ height: "400px", width: "100%" }}
      touchZoom={false}
      keyboard={false}
      boxZoom={false}
      zoomControl={false}
      whenReady={() => {
        if (mapRef.current) {
          setMapInstance(mapRef.current);
        }
      }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {geoData && (
        <GeoJSON
          data={geoData}
          onEachFeature={onEachFeature}
          style={defaultStyle} // Add this line
          ref={(ref) => {
            if (ref) geoJsonLayerRef.current = ref;
          }}
        />
      )}
      {geoData && <FitBounds geoData={geoData} />}
      {clickedFeature && (
        <Popup
          position={clickedFeature.latlng}
          eventHandlers={{
            remove: () => setClickedFeature(null),
          }}>
          {/* Only show the section name. Adjust the property key as needed. */}
          <div>
            {clickedFeature.properties.name ||
              clickedFeature.properties.Name ||
              clickedFeature.properties.NAM ||
              "نام نامشخص"}
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};
export default MapComponent;
