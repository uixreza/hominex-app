"use client";
import React, { useState, useMemo, Suspense, useEffect } from "react";
import { cities } from "@/public/assets/iranian_cities_fa";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";
const FilterSection = React.lazy(() => import("@/components/Estates/Filters"));
const PropertiesSection = React.lazy(
  () => import("@/components/Estates/PropertiesCard")
);
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
// import { clearItems } from "@/Redux/Slices/compareItems";
import { url_v1 } from "@/config/urls";
import { GrSelect } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import { clearItems } from "@/Redux/Slices/compareItems";
export interface Property {
  id: number;
  image: string;
  price: number | null; // Allow null for price
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  propertyType: string;
  minArea: string;
  maxArea: string;
  minPrice: string;
  maxPrice: string;
  priceRange: string;
  isFeatured: boolean;
}

export interface Filters {
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  city: string;
  propertyType?: string;
  transactionType?: string;
  isFeatured?: boolean;
  sortBy?: string;
}

export default function Page() {
  // redux states
  const compareItems = useSelector((state: RootState) => state.compare.items);
  const dispatch = useDispatch<AppDispatch>();

  // local states
  const [showComparePanel, setShowComparePanel] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [compareProperties, setCompareProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<Filters>(() => ({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    city: cities.includes("بجنورد") ? "بجنورد" : cities[0] || "",
    propertyType: "",
    transactionType: "",
    isFeatured: false,
    sortBy: "newest",
  }));

  // Fetch properties for compare panel (limited to 4 items)
  useEffect(() => {
    if (!compareItems || compareItems.length === 0) {
      setCompareProperties([]);
      return;
    }
    const fetchCompareProperties = async () => {
      try {
        // Limit to first 4 items
        const limitedCompareItems = compareItems.slice(0, 4);
        const results = await Promise.all(
          limitedCompareItems.map(async (id: number) => {
            const res = await fetch(url_v1(`/properties/${id}`));
            const result = await res.json();
            const prop = result.data;
            return {
              id: prop.id,
              image: prop.primary_image_url || "/assets/img/not.jpg",
              price: prop.total_price ?? 0,
              address: prop.title || "بدون عنوان",
              city: prop.city || "نامشخص",
              bedrooms: prop.rooms_count || 0,
              bathrooms: prop.amenities?.includes("حمام") ? 1 : 0,
              sqft: prop.building_area || 0,
              type: prop.transaction_type_label || "نامشخص",
              propertyType: prop.property_type || "نامشخص",
              minArea: prop.land_area?.toString() || "0",
              maxArea: prop.building_area?.toString() || "0",
              minPrice: (prop.total_price ?? 0).toString(),
              maxPrice: (prop.total_price ?? 0).toString(),
              priceRange: prop.formatted_price || "",
              isFeatured: prop.is_featured || false,
            };
          })
        );
        setCompareProperties(results);
      } catch (error) {
        console.error("Error fetching compare properties:", error);
        setCompareProperties([]);
      }
    };
    fetchCompareProperties();
  }, [compareItems]);

  // Function to format number with commas
  const formatNumberWithCommas = (value: string): string => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (!cleanedValue) return "";
    return parseInt(cleanedValue).toLocaleString("en-EN");
  };

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const queryParams = new URLSearchParams();

        // Add filters to query parameters
        if (filters.minPrice)
          queryParams.append("min_price", filters.minPrice.replace(/,/g, ""));
        if (filters.maxPrice)
          queryParams.append("max_price", filters.maxPrice.replace(/,/g, ""));
        if (filters.bedrooms) queryParams.append("rooms", filters.bedrooms);
        if (filters.city) queryParams.append("city", filters.city);
        if (filters.propertyType)
          queryParams.append("property_type", filters.propertyType);
        if (filters.transactionType)
          queryParams.append("transaction_type", filters.transactionType);
        if (filters.isFeatured) queryParams.append("is_featured", "true");
        queryParams.append("sort_by", filters.sortBy || "newest");
        queryParams.append("per_page", "20");
        queryParams.append("page", "1");

        const response = await fetch(
          url_v1(`/properties?${queryParams.toString()}`),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        if (result.success) {
          // Map API response to component's Property interface
          const mappedProperties: Property[] = result.data.properties
            .map(
              // eslint-disable-next-line
              (prop: any) => {
                // Handle null or undefined total_price
                const totalPrice = prop.total_price ?? 0; // Fallback to 0 if null
                return {
                  id: prop.id,
                  image: prop.primary_image_url || "/assets/img/not.jpg", // Fallback for image
                  price: totalPrice, // Allow null or number
                  address: prop.title || "بدون عنوان",
                  city: prop.city || "نامشخص",
                  bedrooms: prop.rooms_count || 0,
                  bathrooms: prop.amenities?.includes("حمام") ? 1 : 0,
                  sqft: prop.building_area || 0,
                  type: prop.transaction_type_label || "نامشخص",
                  propertyType: prop.property_type || "نامشخص",
                  minArea: prop.land_area?.toString() || "0",
                  maxArea: prop.building_area?.toString() || "0",
                  minPrice: totalPrice.toString(), // Safe, as totalPrice is now a number
                  maxPrice: totalPrice.toString(),
                  priceRange:
                    prop.formatted_price ||
                    formatNumberWithCommas(totalPrice.toString()),
                  isFeatured: prop.is_featured || false,
                };
              }
            )
            .filter((prop: Property) => prop.id); // Filter out invalid properties
          setProperties(mappedProperties);
        } else {
          console.error("API error:", result.message);
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "minPrice" || name === "maxPrice") {
      const formattedValue = formatNumberWithCommas(value);
      setFilters((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Filter properties client-side (optional fallback)
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const minPrice = filters.minPrice
        ? parseInt(filters.minPrice.replace(/,/g, ""))
        : null;
      const maxPrice = filters.maxPrice
        ? parseInt(filters.maxPrice.replace(/,/g, ""))
        : null;

      return (
        (!minPrice ||
          (property.price !== null && property.price >= minPrice)) &&
        (!maxPrice ||
          (property.price !== null && property.price <= maxPrice)) &&
        (!filters.bedrooms ||
          property.bedrooms >= parseInt(filters.bedrooms)) &&
        (!filters.bathrooms ||
          property.bathrooms >= parseInt(filters.bathrooms)) &&
        (!filters.city ||
          property.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (!filters.propertyType ||
          property.propertyType === filters.propertyType) &&
        (!filters.transactionType ||
          property.type === filters.transactionType) &&
        (!filters.isFeatured || property.isFeatured)
      );
    });
  }, [properties, filters]);

  // Format price for display
  const formatPrice = (price: number | null) =>
    price !== null
      ? `${new Intl.NumberFormat("fa-FA").format(price)} تومان`
      : "قیمت نامشخص";

  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-7xl mx-auto sm:px-1 py-6 relative">
        <Suspense fallback={<EstatesSkeleton />}>
          <FilterSection
            filters={{
              ...filters,
              bedrooms:
                filters.bedrooms === "" ? undefined : Number(filters.bedrooms),
              bathrooms:
                filters.bathrooms === ""
                  ? undefined
                  : Number(filters.bathrooms),
            }}
            handleFilterChange={handleFilterChange}
          />
          <PropertiesSection
            filteredProperties={filteredProperties}
            formatPrice={formatPrice}
          />

          {/* Compare items section */}
          {compareItems.length >= 2 && (
            <div>
              <div
                onClick={() => setShowComparePanel(true)}
                className={`gap-2 cursor-pointer transition-colors flex items-center justify-center flex-row p-2 rounded-2xl z-20 fixed bottom-10 left-10 shadow border-2 border-white font-bold ${
                  compareItems.length >= 4
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-blue-400 hover:bg-blue-600 hover:text-white text-black"
                }`}>
                <div className="absolute animate-ping"></div>
                <GrSelect /> مقایسه املاک
                {compareItems.length >= 4 && (
                  <span className="text-xs text-red-600 ml-2">
                    حداکثر ۴ ملک قابل مقایسه است
                  </span>
                )}
              </div>
              <div
                onClick={() => dispatch(clearItems())}
                className="bg-red-600 cursor-pointer group p-2 rounded-2xl z-20 fixed bottom-10 left-44 shadow border-2 border-white font-bold">
                <BiReset className="w-6 h-6 group-hover:animate-spin" />
              </div>
            </div>
          )}

          <div
            className={`fixed ${
              showComparePanel ? "bottom-0" : "bottom-[-100%]"
            } left-0 right-0 bg-gray-50 shadow-md p-4 sm:p-6 z-30 rounded-t-lg transition-all`}>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg text-gray-800">
                مقایسه املاک انتخاب‌شده
              </span>
              <button
                className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-red-600 transition text-sm sm:text-base"
                onClick={() => setShowComparePanel(false)}>
                بستن
              </button>
            </div>
            {compareProperties.length === 0 ? (
              <div className="text-center text-gray-600">
                هیچ ملکی برای مقایسه وجود ندارد
              </div>
            ) : (
              <>
                {compareItems.length > 4 && (
                  <div className="text-center text-red-600 mb-4">
                    فقط ۴ ملک اول نمایش داده می‌شود (حداکثر تعداد مجاز)
                  </div>
                )}
                {/* Desktop Vertical Table Layout */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="min-w-full table-auto text-center">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800 w-32">
                          ویژگی
                        </th>
                        {compareProperties.map((item) => (
                          <th
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                            ملک {item.id}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          تصویر
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300">
                            <img
                              src={item.image}
                              alt={item.address}
                              className="w-24 h-24 object-cover rounded-md border border-gray-200 mx-auto"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          عنوان
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.address}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          شهر
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.city}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          قیمت
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {formatPrice(item.price)}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          تعداد اتاق
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.bedrooms}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          تعداد حمام
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.bathrooms}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          متراژ
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.sqft}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          نوع ملک
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.propertyType}
                          </td>
                        ))}
                      </tr>
                      <tr className="even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition">
                        <td className="p-3 border-b border-gray-300 text-sm font-medium text-gray-800">
                          نوع معامله
                        </td>
                        {compareProperties.map((item) => (
                          <td
                            key={item.id}
                            className="p-3 border-b border-gray-300 text-gray-800">
                            {item.type}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Mobile Stacked Layout */}
                <div className="block sm:hidden overflow-y-auto max-h-[70vh]">
                  <div className="space-y-4">
                    {compareProperties.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex flex-col items-center">
                          <img
                            src={item.image}
                            alt={item.address}
                            className="w-20 h-20 object-cover rounded-md border border-gray-200 mb-2"
                          />
                          <div className="w-full space-y-2">
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                عنوان:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.address}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                شهر:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.city}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                قیمت:
                              </span>
                              <span className="text-xs text-gray-800">
                                {formatPrice(item.price)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                تعداد اتاق:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.bedrooms}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                تعداد حمام:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.bathrooms}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                متراژ:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.sqft}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                نوع ملک:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.propertyType}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                نوع معامله:
                              </span>
                              <span className="text-xs text-gray-800">
                                {item.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </Suspense>
      </main>
    </div>
  );
}
