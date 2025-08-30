"use client";
import React, { useEffect } from "react";
import ImageSlider from "@/components/UI/estates/ImageSlider";
import { VscArrowSmallRight } from "react-icons/vsc";
import Link from "next/link";
import RealEstateOwnerCard from "@/components/UI/estates/RealEstateOwnerCard";
import EstateDetails from "@/components/UI/estates/EstateDetails";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Chatbox from "@/components/UI/estates/Chatbox";
import { useState } from "react";
import { url_v1 } from "@/config/urls";
import { successToast, infoToast } from "@/components/UI/Toasts";
import { Estate } from "@/app/estates/[slug]/page";

export default function SinglePage({ estate }: { estate: Estate }) {
  const [chat, setChat] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures client-side rendering
  }, []);
  console.log("here boy:", estate);
  if (!isClient) return null; // avoid server/client mismatch

  // bookmark button functionality
  const bookmark = async () => {
    try {
      const req = await fetch(url_v1(`/user/favorites/${estate.id}`), {
        method: "POST", // or POST depending on your API
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // Always try to parse JSON
      const data = await req.json();
      console.log(token);
      if (req?.ok) {
        successToast(data.message);
      } else {
        infoToast(data.message);
      }
      console.log(data);
    } catch (err) {
      console.error("Fetch error:", err);
      infoToast("خطا در اتصال به سرور.");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <span>{token}</span>
      <Link
        href={"/estates"}
        className="border border-gray-400 flex flex-row-reverse w-fit p-2 rounded-md shadow-md cursor-pointer hover:ring-1 ring-white transition-all justify-center items-center">
        بازگشت <VscArrowSmallRight />
      </Link>
      <div>
        <ImageSlider
          images={
            estate.images.length > 0
              ? estate.images
              : ["/assets/svg/default.svg"]
          }
        />
      </div>
      <div className="flex md:flex-row-reverse w-full flex-col items-center">
        <div className="flex flex-col gap-5">
          <RealEstateOwnerCard
            ownerName={estate.owner.name}
            phoneNumber={estate.owner.phoneNumber}
            realEstateName={estate.owner.realEstateName}
            rating={estate.owner.rating}
            profilePicture={estate.owner.profilePicture}
            setChat={setChat}
          />

          {/* map is here */}
          {/* <NoSSRWrapper
            latitude={estate.location.latitude}
            longitude={estate.location.longitude}
            zoom={10}
            geoJsonUrl={"/assets/mahalle_21kh_M_FeaturesToJSO.geojson"}
            popupContent={estate.owner.realEstateName}
          /> */}
        </div>
        <EstateDetails estate={estate} bookmark={bookmark} />
      </div>
      <Chatbox chat={chat} setChat={setChat} />
    </div>
  );
}
