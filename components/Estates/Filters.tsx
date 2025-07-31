import React from "react";
import { TbBuildingEstate } from "react-icons/tb";
import { Blue, Yellow, Indigo, Purple } from "@/components/UI/Badges";
import { cities } from "@/public/assets/iranian_cities_fa";
import Dropdown from "../UI/estates/Dropdown";

type T = {
  filters: {
    minPrice: string;
    maxPrice: string;
    bedrooms: string;
    bathrooms: string;
    city: string;
  };
  handleFilterChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function Filters({ filters, handleFilterChange }: T) {
  return (
    <section className="text-white z-10 relative rounded-xl p-6 mb-6 | shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
      {/* dropdown menu */}
      <div className="flex justify-between">
        <h2 className="text-3xl mb-10  font-bold text-right flex flex-row-reverse justify-end items-center gap-3">
          فیلتر املاک <TbBuildingEstate />
        </h2>
        <Dropdown />
      </div>
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
            className="block w-full rounded-lg outline border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
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

          <select
            name="city"
            id="city"
            value={filters.city}
            onChange={handleFilterChange}
            className="block w-full rounded-lg outline-none border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
            {cities.map((city, i) => (
              <option key={i} value={city} className="text-black">
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* list of badges */}
      <div className="mt-5 flex-auto gap-3">
        {(filters.minPrice || filters.maxPrice) && (
          <Blue
            value={`از ${filters.minPrice || 0} -  تا ${filters.maxPrice || 0}`}
          />
        )}
        {/* room count */}
        {filters.bedrooms && <Purple value={`${filters.bedrooms} اتاق خواب`} />}

        {/* bathroom count */}
        {filters.bathrooms && (
          <Yellow value={`${filters.bathrooms} سرویس بهداشتی`} />
        )}

        {/* city */}
        {filters.city && <Indigo value={`شهر ${filters.city}`} />}
      </div>
    </section>
  );
}
