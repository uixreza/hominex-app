import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RiLink } from "react-icons/ri";

export default function RealestatesBanner() {
  return (
    <div className="relative ">
      <Link href={"/realEstates"} className="rounded-md">
        <div className="p-3 absolute top-10 left-10 bg-gray-500/40 backdrop-blur-2xl rounded-full">
          <RiLink className="w-10 h-10 animate-pulse " />
        </div>
        <Image
          src={"/assets/img/realEstatesBanner.webp"}
          alt="مشاورین املاک"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}
