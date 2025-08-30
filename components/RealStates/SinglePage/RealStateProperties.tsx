"use client";

import React, { useMemo, useState, useEffect, Suspense } from "react";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";

const FilterSection = React.lazy(() => import("@/components/Estates/Filters"));
const PropertiesSection = React.lazy(
  () => import("@/components/Estates/PropertiesCard")
);

import { cities } from "@/public/assets/iranian_cities_fa";
import { Filters, Property } from "@/app/estates/page";
import { url_v1 } from "@/config/urls";

const RealStateProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<Filters>({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    city: cities.includes("بجنورد") ? "بجنورد" : cities[0] || "",
    propertyType: "",
    transactionType: "",
    isFeatured: false,
    sortBy: "newest",
  });

  // Format number with commas
  const formatNumberWithCommas = (value: string): string => {
    const cleanedValue = value.replace(/[^0-9]/g, "");
    if (!cleanedValue) return "";
    return parseInt(cleanedValue).toLocaleString("en-EN");
  };

  // Fetch properties whenever filters change
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const queryParams = new URLSearchParams();

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
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        const result = await response.json();
        if (result.success) {
          const mappedProperties: Property[] = result.data.properties.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (prop: any) => ({
              id: prop.id,
              image: prop.primary_image_url,
              price: prop.total_price,
              address: prop.title,
              city: prop.city,
              bedrooms: prop.rooms_count,
              bathrooms: prop.amenities.includes("حمام") ? 1 : 0,
              sqft: prop.building_area,
              type: prop.transaction_type_label,
              propertyType: prop.property_type,
              minArea: prop.land_area?.toString() || "",
              maxArea: prop.building_area?.toString() || "",
              minPrice: prop.total_price?.toString() || "",
              maxPrice: prop.total_price?.toString() || "",
              priceRange: prop.formatted_price,
              isFeatured: prop.is_featured || false,
            })
          );
          setProperties(mappedProperties);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
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

  // Client-side filtering fallback
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const minPrice = filters.minPrice
        ? parseInt(filters.minPrice.replace(/,/g, ""))
        : null;
      const maxPrice = filters.maxPrice
        ? parseInt(filters.maxPrice.replace(/,/g, ""))
        : null;

      return (
        (!minPrice || property.price! >= minPrice) &&
        (!maxPrice || property.price! <= maxPrice) &&
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

  const formatPrice = (price: number) =>
    `${new Intl.NumberFormat("fa-FA").format(price)} تومان`;

  return (
    <div className="min-h-screen bg-transparent">
      <main className="max-w-7xl mx-auto sm:px-1 py-6">
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
      </main>
    </div>
  );
};

export default RealStateProperties;
