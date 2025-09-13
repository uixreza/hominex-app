import React from "react";
import Button from "@/components/UI/estates/Button";
import LikeButton from "@/components/UI/estates/LikeButton";
import { Property } from "@/app/estates/page";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { Colorless } from "../UI/Badges";
import { GoGitCompare } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setItem, deleteItem } from "@/Redux/Slices/compareItems";
import { TbExchangeOff } from "react-icons/tb";
type T = {
  filteredProperties: Property[];
  formatPrice: (price: number) => string;
};

export default function Properties({ filteredProperties, formatPrice }: T) {
  const compareItems = useSelector((state: RootState) => state.compare.items);
  const dispatch = useDispatch<AppDispatch>();

  // handle function
  const handleAddToCompare = (id: number) => {
    if (!compareItems.includes(id)) {
      dispatch(setItem(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property, i) => (
          <div
            key={i}
            className="rounded-lg text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
            <Image
              src={property.image || "/assets/img/not.jpg"}
              alt={property.address}
              width={1000}
              height={1000}
              unoptimized={true}
              className="w-full h-48 object-cover hover:scale-105 transition-all"
            />
            <div className="p-4 relative">
              <h3 className="text-lg font-semibold mb-3">
                {property.address}{" "}
              </h3>
              <p className="text-gray-300 flex flex-row gap-2 items-center">
                <CiMoneyBill /> {formatPrice(property.price!)}
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

              {/* compare button */}
              {compareItems.includes(property.id) ? (
                <TbExchangeOff
                  className="absolute left-5 top-5 w-6 h-6 cursor-pointer transition-colors hover:text-black hover:bg-blue-400 p-1 rounded-sm"
                  onClick={() => handleAddToCompare(property.id)}
                />
              ) : (
                <GoGitCompare
                  className="absolute left-5 top-5 w-6 h-6 cursor-pointer transition-colors hover:text-black hover:bg-blue-400 p-1 rounded-sm"
                  onClick={() => handleAddToCompare(property.id)}
                />
              )}
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
