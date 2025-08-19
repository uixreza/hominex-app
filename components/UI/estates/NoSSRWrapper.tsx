// components/NoSSRWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const LightModeMap = dynamic(() => import("./LightModeMap"), {
  ssr: false,
});

type Props = {
  latitude: number;
  longitude: number;
  zoom: number;
  geoJsonUrl: string;
  popupContent: string;
};

export default function NoSSRWrapper({
  latitude,
  longitude,
  geoJsonUrl,
  popupContent,
}: Props) {
  return (
    <LightModeMap
      latitude={latitude}
      longitude={longitude}
      zoom={40}
      geoJsonUrl={geoJsonUrl}
      popupContent={popupContent}
    />
  );
}
