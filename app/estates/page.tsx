"use client";
import React, { useState, useMemo } from "react";
import Button from "@/components/UI/estates/Button";
import LikeButton from "@/components/UI/estates/LikeButton";
import { TbBuildingEstate } from "react-icons/tb";
import {
  Blue,
  Yellow,
  Green,
  Indigo,
  Red,
  Purple,
} from "@/components/UI/Badges";

interface Property {
  id: number;
  image: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

export default function Page() {
  const properties = useMemo<Property[]>(
    () => [
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "تهران",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
      },
      {
        id: 2,
        image: "/assets/img/khaneman.png",
        price: 650000,
        address: "خیابان آزادی، پلاک ۴۵۶",
        city: "اصفهان",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2000,
      },
      {
        id: 3,
        image: "/assets/img/khaneman.png",
        price: 350000,
        address: "خیابان شریعتی، کوچه کاج، پلاک ۷۸۹",
        city: "شیراز",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1200,
      },
    ],

    []
  );

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    city: "",
  });

  // Function to format number with commas (e.g., 1000000 -> 1,000,000)
  const formatNumberWithCommas = (value: string): string => {
    // Remove non-digits and parse
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (!cleanedValue) return "";
    // Format with commas
    return parseInt(cleanedValue).toLocaleString("en-EN");
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Format numeric inputs for minPrice and maxPrice
    if (name === "minPrice" || name === "maxPrice") {
      const formattedValue = formatNumberWithCommas(value);
      setFilters((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredProperties = properties.filter((property) => {
    // Remove commas for parsing
    const minPrice = filters.minPrice
      ? parseInt(filters.minPrice.replace(/,/g, ""))
      : null;
    const maxPrice = filters.maxPrice
      ? parseInt(filters.maxPrice.replace(/,/g, ""))
      : null;

    return (
      (!minPrice || property.price >= minPrice) &&
      (!maxPrice || property.price <= maxPrice) &&
      (!filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms)) &&
      (!filters.bathrooms ||
        property.bathrooms >= parseInt(filters.bathrooms)) &&
      (!filters.city ||
        property.city.toLowerCase().includes(filters.city.toLowerCase()))
    );
  });

  const formatPrice = (price: number) =>
    `${new Intl.NumberFormat("fa-FA").format(price)} تومان`;

  return (
    <div className="min-h-screen bg-transparent">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-1 py-6 ">
        {/* Filter Section */}
        <section className="text-white rounded-xl p-6 mb-6 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
          <h2 className="text-3xl mb-10  font-bold text-right flex flex-row-reverse justify-end items-center gap-3">
            فیلتر ملک <TbBuildingEstate />
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
            dir="rtl">
            {/* حداقل قیمت */}
            <div>
              <label className="block text-sm font-medium  text-right mb-3">
                حداقل قیمت
              </label>
              <input
                type="text"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="مثلاً ۱۰۰٬۰۰۰ تومان"
                className="block w-full rounded-lg border outline-none border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* حداکثر قیمت */}
            <div>
              <label className="block text-sm font-medium  text-right mb-3">
                حداکثر قیمت
              </label>
              <input
                type="text"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="مثلاً ۱٬۰۰۰٬۰۰۰ تومان"
                className="block w-full rounded-lg border outline-none border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* تعداد اتاق خواب */}
            <div>
              <label className="block text-sm font-medium  text-right mb-3">
                تعداد اتاق خواب
              </label>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="block w-full outline-none rounded-lg border-2 border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="">فرقی ندارد</option>
                <option value="1" className="text-black">
                  ۱+
                </option>
                <option value="2" className="text-black">
                  ۲+
                </option>
                <option value="3" className="text-black">
                  ۳+
                </option>
                <option value="4" className="text-black">
                  ۴+
                </option>
              </select>
            </div>

            {/* تعداد سرویس بهداشتی */}
            <div>
              <label className="block text-sm font-medium text-right mb-3">
                تعداد سرویس بهداشتی
              </label>
              <select
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleFilterChange}
                className="block w-full t rounded-lg outline border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="" className="text-black">
                  فرقی ندارد
                </option>
                <option value="1" className="text-black">
                  ۱+
                </option>
                <option value="2" className="text-black">
                  ۲+
                </option>
                <option value="3" className="text-black">
                  ۳+
                </option>
              </select>
            </div>

            {/* شهر */}
            <div>
              <label className="block text-sm font-medium  text-right mb-3">
                شهر
              </label>
              <input
                type="text"
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
                placeholder="مثلاً تهران یا مشهد"
                className="block w-full rounded-lg outline-none border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* list of badges */}
          <div className="mt-5 flex-auto gap-3">
            {(filters.minPrice || filters.maxPrice) && (
              <Blue
                value={` از ${filters.minPrice || 0} -  تا ${
                  filters.maxPrice || 0
                }`}
              />
            )}
            {/* room count */}
            {filters.bedrooms && (
              <Purple value={`${filters.bedrooms} اتاق خواب`} />
            )}

            {/* bathroom count */}
            {filters.bathrooms && (
              <Yellow value={`${filters.bathrooms} سرویس بهداشتی`} />
            )}

            {/* city */}
            {filters.city && <Indigo value={`شهر ${filters.city}`} />}
          </div>
        </section>

        {/* Property Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, i) => (
              <div
                key={property.id}
                className=" rounded-lg text-white overflow-hidden hover:shadow-lg transition-shadow duration-300 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {formatPrice(property.price)}
                  </h3>
                  <p className="text-gray-600">{property.address}</p>
                  <p className="text-gray-600">{property.city}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    {property.bedrooms} Beds | {property.bathrooms} Baths |{" "}
                    {property.sqft} Sqft
                  </p>
                  <div className="flex flex-row gap-3">
                    <Button title={"مشاهده ملک"} />
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
      </main>
    </div>
  );
}
