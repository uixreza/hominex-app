/* eslint-disable */
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useState, useRef } from "react";

interface FeatureProperties {
  id: number | string;
  name: string;
  [key: string]: string | number | boolean | undefined;
}

interface IMap {
  mapSelection: FeatureProperties[] | null;
  setMapSelection: (value: FeatureProperties[] | null) => void;
}

const defaultStyle = {
  color: "#b4b4b4",
  weight: 2,
  opacity: 1,
  fillColor: "#7b7b7b",
  fillOpacity: 0.2,
};

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position: [number, number] = [37.493, 57.32];

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

  const onEachFeature = (feature: any, layer: any) => {
    layer.bindPopup(`
    <div style="font-family: 'Modam', sans-serif; font-weight: 500;">
      ${feature.properties.name || "Unnamed Feature"}
    </div>
  `);

    layer.on({
      click: (e: any) => {
        // For popup
        setClickedFeature({
          latlng: e.latlng,
          properties: feature.properties,
        });

        const isMultiSelect =
          e.originalEvent.ctrlKey || e.originalEvent.metaKey;

        setMapSelection((prev: FeatureProperties[] | null) => {
          const currentSelection = Array.isArray(prev) ? [...prev] : [];

          const featureIndex = currentSelection.findIndex(
            (f) => f.id === feature.properties.id
          );

          if (featureIndex >= 0) {
            // Already selected → remove it
            currentSelection.splice(featureIndex, 1);
          } else {
            // Not selected → add it
            currentSelection.push(feature.properties);
          }

          const newSelection =
            currentSelection.length > 0 ? currentSelection : null;

          // Update styles immediately
          geoJsonLayerRef.current?.eachLayer((l: any) => {
            if (l.feature) {
              l.setStyle(getFeatureStyle(l.feature, newSelection));
            }
          });

          return newSelection;
        });
      },
    });
  };

  // Update the style function to properly check selection
  const getFeatureStyle = (
    feature: any,
    selectionOverride?: FeatureProperties[] | null
  ) => {
    const selection = selectionOverride ?? mapSelection;
    const isSelected = selection?.some((f) => f.id === feature.properties.id);
    return isSelected
      ? { ...defaultStyle, color: "#ff0000", weight: 3, fillOpacity: 0.5 }
      : defaultStyle;
  };

  // Update styles when selection changes
  useEffect(() => {
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.eachLayer((layer: any) => {
        if (layer.feature) {
          layer.setStyle(getFeatureStyle(layer.feature));
        }
      });
    }
  }, [mapSelection]);

  // Rest of your existing code remains the same...
  // Bouncy effect, return statement, etc.

  return (
    <MapContainer
      center={position}
      zoom={28}
      minZoom={12}
      style={{ height: "400px", width: "100%", borderRadius: "5px" }}
      className="shadow-lg rounded-xl shadow-black/20 border border-white/20"
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
          style={getFeatureStyle}
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
