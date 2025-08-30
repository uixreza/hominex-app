import React from "react";
import Image from "next/image";
import { RealEstatesProps } from "@/app/realEstates/page";
type T = {
  realEstates: RealEstatesProps[];
};

export default function RealEstates({ realEstates }: T) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {realEstates.map((item, i) => (
        <a
          href={`/realEstates/${item.id}`}
          key={i}
          className="h-fit  overflow-hidden cursor-pointer rounded-lg text-white  hover:shadow-lg transition-shadow duration-300 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
          <Image
            src={
              item.image && item.image.trim() !== ""
                ? item.image
                : "/assets/img/not.jpg"
            }
            alt={item.name || "property"}
            width={1000}
            height={1000}
            className="w-full h-[350px] object-cover hover:scale-105 transition-all"
          />
          <div className=" text-center w-full bg-white text-black text-lg py-2 font-bold">
            {item.name}
          </div>
        </a>
      ))}
    </section>
  );
}
