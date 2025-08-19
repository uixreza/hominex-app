import React from "react";
import Button from "@/components/UI/estates/Button";
import LikeButton from "@/components/UI/estates/LikeButton";
import { Property } from "@/app/estates/page";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { Colorless } from "../UI/Badges";

type T = {
  filteredProperties: Property[];
  formatPrice: (price: number) => string;
};

export default function Properties({ filteredProperties, formatPrice }: T) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property, i) => (
          <div
            key={i}
            className=" rounded-lg text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
            <Image
              src={property.image}
              alt={property.address}
              width={1000}
              height={1000}
              className="w-full h-48 object-cover hover:scale-105 transition-all"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">
                {property.address}{" "}
              </h3>
              <p className="text-gray-300 flex flex-row gap-2 items-center">
                <CiMoneyBill /> {formatPrice(property.price)}
              </p>
              <p className="text-gray-400 flex flex-row gap-2 items-center">
                <IoLocationOutline /> {property.city}
              </p>
              <p className="text-gray-500 text-sm mt-5 flex flex-row gap-2 items-center">
                <Colorless value={`${property.bedrooms} تخت`} /> •
                <Colorless value={`${property.bathrooms} حمام`} /> •
                <Colorless value={`${property.sqft} مساحت`} />
              </p>
              <div className="flex flex-row gap-3">
                <Button title={"مشاهده ملک"} id={property.id} />
                <LikeButton id={i} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-white">
          ملکی با این مشخصات یافت نشد 🥲
        </p>
      )}
    </section>
  );
}
