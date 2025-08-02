"use client";
import React, { useState, useMemo, Suspense, useEffect } from "react";
import { cities } from "@/public/assets/iranian_cities_fa";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";
const FilterSection = React.lazy(() => import("@/components/Estates/Filters"));
const PropertiesSection = React.lazy(
  () => import("@/components/Estates/Properties")
);

export interface Property {
  id: number;
  image: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  propertyType: string;
  minArea: string;
  maxArea: string;
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
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "تهران",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "بجنورد",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "بجنورد",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "بجنورد",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
      {
        id: 1,
        image: "/assets/img/khaneman.png",
        price: 45000,
        address: "خیابان ولیعصر، پلاک ۱۲۳",
        city: "بجنورد",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 15000,
        type: "خرید",
        propertyType: "زمین",
        minArea: "1000",
        maxArea: "2000",
        minPrice: "20000000",
        maxPrice: "300000000",
      },
    ],

    []
  );

  const [filters, setFilters] = useState(() => ({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    city: cities.includes("بجنورد") ? "بجنورد" : cities[0] || "",
  }));

  // Function to format number with commas (e.g., 1000000 -> 1,000,000)
  const formatNumberWithCommas = (value: string): string => {
    // Remove non-digits and parse
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (!cleanedValue) return "";
    // Format with commas
    return parseInt(cleanedValue).toLocaleString("en-EN");
  };

  useEffect(() => {
    console.log(filters.city);
  });
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
      <main className="max-w-7xl mx-auto sm:px-1 py-6 ">
        {/* Filter Section */}
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
        </Suspense>
        {/* Property Grid */}
      </main>
    </div>
  );
}
