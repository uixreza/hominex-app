"use client";
import React from "react";
import ImageSlider from "@/components/UI/estates/ImageSlider";
import { VscArrowSmallRight } from "react-icons/vsc";
import Link from "next/link";
import RealEstateOwnerCard from "@/components/UI/estates/RealEstateOwnerCard";
import EstateDetails from "@/components/UI/estates/EstateDetails";
import NoSSRWrapper from "@/components/UI/estates/NoSSRWrapper";
import Chatbox from "@/components/UI/estates/Chatbox";
import { useState } from "react";

export default function SinglePage() {
  const [chat, setChat] = useState<boolean>(false);
  const estate = {
    title: "واحد 120 متری واقع در خیام 8",
    pricePerMeter: "1.800.000",
    publishedDate: "19 اردی 1403",
    overallPrice: "890.000.000",
    estateCode: "3926397",
    propertyType: "آپارتمان",
    buildDate: "1398",
    rooms: 3,
    bathrooms: 2,
    floors: 5,
    apartmentsPerFloor: 2,
    geographicalDirection: "شمالی",
    apartmentArea: "120",
    overallArea: "150",
    documentType: "سند تک برگ",
    floorForSale: 3,
    features: {
      elevator: true,
      warehouse: false,
      parking: true,
      loan: false,
      balcony: true,
    },
    description:
      "این واحد در خیام 8 واقع شده و دارای نورگیری عالی، طراحی مدرن، و دسترسی آسان به مراکز خرید و حمل‌ونقل عمومی می‌باشد.",
  };
  return (
    <div className="flex flex-col w-full">
      <Link
        href={"/estates"}
        className="border border-gray-400 flex flex-row-reverse w-fit p-2 rounded-md shadow-md cursor-pointer hover:ring-1 ring-white transition-all justify-center items-center">
        بازگشت <VscArrowSmallRight />
      </Link>
      <div>
        <ImageSlider
          images={["/assets/img/khaneman.webp", "/assets/svg/default.svg"]}
        />
      </div>
      <div className="flex md:flex-row-reverse w-full flex-col items-center">
        <div className="flex flex-col gap-5">
          <RealEstateOwnerCard
            ownerName="aliza"
            phoneNumber="09931911212"
            realEstateName="Akhte"
            rating={3}
            profilePicture="/assets/svg/default.svg"
            setChat={setChat}
          />
          <NoSSRWrapper
            latitude={37.493}
            longitude={57.32}
            zoom={10}
            geoJsonUrl={"/assets/mahalle_21kh_M_FeaturesToJSO.geojson"}
            popupContent="مشاور املاک آخته"
          />
        </div>
        <EstateDetails estate={estate} />
      </div>
      <Chatbox chat={chat} setChat={setChat} />
    </div>
  );
}
