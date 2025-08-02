import React, { useState } from "react";
import { TbBuildingEstate } from "react-icons/tb";
import { Blue, Yellow, Indigo, Purple } from "@/components/UI/Badges";
import { cities } from "@/public/assets/iranian_cities_fa";
import Dropdown from "../UI/estates/Dropdown";

type T = {
  filters: {
    id?: number;
    image?: string;
    price?: number;
    address?: string;
    city?: string;
    bedrooms?: number;
    bathrooms?: number;
    sqft?: number;
    type?: string;
    propertyType?: string;
    minArea?: string;
    maxArea?: string;
    minPrice: string;
    maxPrice: string;
  };
  handleFilterChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function Filters({ filters, handleFilterChange }: T) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // Define price ranges for dropdown
  const priceRanges = [
    { label: "همه قیمت‌ها", min: "", max: "" },
    { label: "تا 500 میلیون", min: "0", max: "500000000" },
    {
      label: "500 میلیون تا 1 میلیارد",
      min: "500000000",
      max: "1000000000",
    },
    {
      label: "1 میلیارد تا 2 میلیارد",
      min: "1000000000",
      max: "2000000000",
    },
    { label: "بیش از 2 میلیارد", min: "2000000000", max: "" },
  ];

  // Define area ranges for dropdown
  const areaRanges = [
    { label: "همه مساحت‌ها", min: "", max: "" },
    { label: "تا ۱۰۰ متر", min: "0", max: "100" },
    { label: "۱۰۰ تا ۲۰۰ متر", min: "100", max: "200" },
    { label: "۲۰۰ تا ۳۰۰ متر", min: "200", max: "300" },
    { label: "بیش از ۳۰۰ متر", min: "300", max: "" },
  ];

  // Define property types for dropdown
  const propertyTypes = ["همه", "زمین", "اداری", "تجاری", "مسکونی"];

  // Handle price range selection
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = priceRanges.find(
      (range) => range.label === e.target.value
    );
    if (selectedRange) {
      handleFilterChange({
        target: { name: "minPrice", value: selectedRange.min },
      } as React.ChangeEvent<HTMLSelectElement>);
      handleFilterChange({
        target: { name: "maxPrice", value: selectedRange.max },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  // Handle area range selection
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = areaRanges.find(
      (range) => range.label === e.target.value
    );
    if (selectedRange) {
      handleFilterChange({
        target: { name: "minArea", value: selectedRange.min },
      } as React.ChangeEvent<HTMLSelectElement>);
      handleFilterChange({
        target: { name: "maxArea", value: selectedRange.max },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  return (
    <section className="text-white z-10 relative rounded-xl p-6 mb-6 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
      {/* dropdown menu */}
      <div className="flex justify-between">
        <h2 className="text-3xl mb-10 font-bold text-right flex flex-row-reverse justify-end items-center gap-3">
          فیلتر املاک <TbBuildingEstate />
        </h2>
        <Dropdown />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        dir="rtl">
        {/* نوع */}
        <div>
          <label className="block text-sm font-medium text-right mb-3">
            نوع درخواست
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-gray-100">
            <option value="" className="text-black ">
              همه
            </option>
            <option value="خرید" className="text-black ">
              خرید
            </option>
            <option value="اجاره" className="text-black ">
              اجاره
            </option>
          </select>
        </div>

        {/* نوع ملک */}
        <div>
          <label className="block text-sm font-medium text-right mb-3">
            نوع ملک
          </label>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleFilterChange}
            className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400  text-gray-100">
            {propertyTypes.map((type, i) => (
              <option
                key={i}
                value={type === "همه" ? "" : type}
                className="text-black ">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* مساحت */}
        <div>
          <label className="block text-sm font-medium text-right mb-3">
            مساحت
          </label>
          <select
            name="areaRange"
            value={
              areaRanges.find(
                (range) =>
                  range.min === filters.minArea && range.max === filters.maxArea
              )?.label || "همه مساحت‌ها"
            }
            onChange={handleAreaChange}
            className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-gray-100">
            {areaRanges.map((range, i) => (
              <option key={i} value={range.label} className="text-black ">
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* قیمت */}
        <div>
          <label className="block text-sm font-medium text-right mb-3">
            قیمت
          </label>
          <select
            name="priceRange"
            value={
              priceRanges.find(
                (range) =>
                  range.min === filters.minPrice &&
                  range.max === filters.maxPrice
              )?.label ||
              filters.priceRange ||
              "همه قیمت‌ها"
            }
            onChange={(e) => {
              const selectedRange = priceRanges.find(
                (range) => range.label === e.target.value
              );
              if (selectedRange) {
                handleFilterChange({
                  target: { name: "minPrice", value: selectedRange.min },
                } as React.ChangeEvent<HTMLSelectElement>);
                handleFilterChange({
                  target: { name: "maxPrice", value: selectedRange.max },
                } as React.ChangeEvent<HTMLSelectElement>);
                handleFilterChange({
                  target: { name: "priceRange", value: selectedRange.label },
                } as React.ChangeEvent<HTMLSelectElement>);
              }
            }}
            className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-gray-100">
            {priceRanges.map((range, i) => (
              <option key={i} value={range.label} className="text-black">
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* شهر */}
        <div>
          <label className="block text-sm font-medium text-right mb-3">
            شهر
          </label>
          <select
            name="city"
            id="city"
            value={filters.city}
            onChange={handleFilterChange}
            className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400  text-gray-100">
            {cities.map((city, i) => (
              <option key={i} value={city} className="text-black ">
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* More Options Section */}
      {showMoreOptions && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4" dir="rtl">
          {/* تعداد اتاق خواب */}
          <div>
            <label className="block text-sm font-medium text-right mb-3">
              تعداد اتاق خواب
            </label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleFilterChange}
              className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400  text-gray-100">
              <option value="" className="text-black ">
                فرقی ندارد
              </option>
              <option value="1" className="text-black ">
                ۱+
              </option>
              <option value="2" className="text-black ">
                ۲+
              </option>
              <option value="3" className="text-black ">
                ۳+
              </option>
              <option value="4" className="text-black ">
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
              className="block w-full rounded-lg outline-none border border-gray-600 px-3 py-2 text-sm shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400  ">
              <option value="" className=" text-black ">
                فرقی ندارد
              </option>
              <option value="1" className=" text-black ">
                ۱+
              </option>
              <option value="2" className=" text-black ">
                ۲+
              </option>
              <option value="3" className=" text-black ">
                ۳+
              </option>
            </select>
          </div>
        </div>
      )}
      {/* More Options Button */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => setShowMoreOptions(!showMoreOptions)}
          className="w-full sm:w-auto px-4 py-2 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
          {showMoreOptions ? "گزینه های کمتر" : "گزینه‌های بیشتر"}
        </button>
      </div>
      {/* list of badges */}
      <div className="mt-5 flex flex-wrap gap-3">
        {(filters.minPrice || filters.maxPrice) && (
          <Blue
            value={`از ${
              filters.minPrice
                ? parseInt(filters.minPrice).toLocaleString("fa-IR")
                : 0
            } - تا ${
              filters.maxPrice
                ? parseInt(filters.maxPrice).toLocaleString("fa-IR")
                : "∞"
            }`}
          />
        )}
        {(filters.minArea || filters.maxArea) && (
          <Blue
            value={`مساحت از ${
              filters.minArea
                ? parseInt(filters.minArea).toLocaleString("fa-IR")
                : 0
            } - تا ${
              filters.maxArea
                ? parseInt(filters.maxArea).toLocaleString("fa-IR")
                : "∞"
            } متر`}
          />
        )}
        {filters.bedrooms && <Purple value={`${filters.bedrooms} اتاق خواب`} />}
        {filters.bathrooms && (
          <Yellow value={`${filters.bathrooms} سرویس بهداشتی`} />
        )}
        {filters.city && <Indigo value={`شهر ${filters.city}`} />}
        {filters.type && <Indigo value={`نوع درخواست ${filters.type}`} />}
        {filters.propertyType && (
          <Indigo value={`نوع ملک ${filters.propertyType}`} />
        )}
      </div>
    </section>
  );
}
