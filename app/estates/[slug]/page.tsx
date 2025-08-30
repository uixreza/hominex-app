import { Metadata } from "next";
import SinglePage from "@/components/Estates/SinglePage/SinglePage";
import { notFound, redirect } from "next/navigation";
import { url_v1 } from "@/config/urls";
import { NextPage } from "next";

// Define the interface for the estate data
export interface Estate {
  id?: number;
  title: string;
  pricePerMeter: string;
  publishedDate: string;
  overallPrice: string;
  isFavorited: boolean;
  estateCode: string;
  propertyType: string;
  buildDate: string;
  rooms: number;
  bathrooms: number;
  floors: number;
  apartmentsPerFloor: number;
  geographicalDirection: string;
  apartmentArea: string;
  overallArea: string;
  documentType: string;
  floorForSale: number;
  features: {
    elevator: boolean;
    warehouse: boolean;
    parking: boolean;
    loan: boolean;
    balcony: boolean;
  };
  description: string;
  images: string[];
  owner: {
    name: string;
    phoneNumber: string;
    realEstateName: string;
    rating: number;
    profilePicture: string;
  };
  location: {
    latitude: number;
    longitude: number;
    address: string;
    sector: string;
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Validate slug
  if (!slug || isNaN(Number(slug))) {
    console.error("Invalid property ID:", slug);
    return {
      title: "ملک یافت نشد | هومینکس",
      description: "ملک درخواستی یافت نشد.",
    };
  }

  const id = slug;

  try {
    const response = await fetch(url_v1(`/properties/${id}`), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      return {
        title: "ملک یافت نشد | هومینکس",
        description: "ملک درخواستی یافت نشد.",
      };
    }

    const result = await response.json();
    if (!result.success || !result.data) {
      console.error("API response unsuccessful or no data:", result);
      return {
        title: "ملک یافت نشد | هومینکس",
        description: "ملک درخواستی یافت نشد.",
      };
    }

    const property = result.data;

    // Construct SEO-optimized metadata
    const title = property.title || "Property Details | MyApp";
    const description = property.description
      ? `${property.description.slice(0, 160)}...`
      : `View details for this ${
          property.property_info?.property_category_label || "property"
        } in MyApp`;
    const keywords = [
      property.property_info?.property_category_label || "property",
      property.specifications?.building_area
        ? `${property.specifications.building_area} sqm`
        : "real estate",
      property.location?.city || "property location",
      property.price_info?.formatted_price
        ? `price ${property.price_info.formatted_price}`
        : "affordable property",
      "real estate",
      "property for sale",
    ]
      .filter(Boolean)
      .join(", ");

    type ImageProps = {
      image_url: string;
    };

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://hominow.ir/estates/${slug}`,
        images:
          property.images?.length > 0
            ? property.images.map((img: ImageProps) => ({
                url: img.image_url,
                width: 800,
                height: 600,
                alt: property.title || "Property Image",
              }))
            : [
                {
                  url: "/assets/svg/default.svg",
                  width: 800,
                  height: 600,
                  alt: "Default Property Image",
                },
              ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images:
          property.images?.length > 0
            ? property.images[0].image_url
            : "/assets/svg/default.svg",
      },
    };
  } catch (error) {
    console.error("Error generating metadata for ID:", id, error);
    return {
      title: "ملک یافت نشد | هومینکس",
      description: "The requested property could not be found.",
    };
  }
}

const BlogPostPage: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params;

  // Validate slug (assuming slug is the property ID)
  if (!slug || isNaN(Number(slug))) {
    console.error("Invalid property ID:", slug);
    notFound();
  }

  const id = slug;

  try {
    const response = await fetch(url_v1(`/properties/${id}`), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      if (response.status === 404) {
        notFound();
      } else if (response.status === 403) {
        redirect("/unauthorized");
      } else {
        throw new Error(`Failed to fetch property: ${response.statusText}`);
      }
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      console.error("API response unsuccessful or no data:", result);
      notFound();
    }

    const property = result.data;

    // Map API data to the estate structure
    const estate: Estate = {
      id: Number(id),
      title: property.title || "بدون عنوان",
      pricePerMeter: property.price_info?.price_per_meter
        ? new Intl.NumberFormat("fa-FA").format(
            property.price_info.price_per_meter
          )
        : "نامشخص",
      publishedDate: property.published_at
        ? new Date(property.published_at).toLocaleDateString("fa-IR")
        : "نامشخص",
      overallPrice: property.price_info?.formatted_price || "نامشخص",
      estateCode: property.id?.toString() || "نامشخص",
      propertyType: property.property_info?.property_category_label || "نامشخص",
      isFavorited: property.isFavorited,
      buildDate:
        property.specifications?.construction_year?.toString() || "نامشخص",
      rooms: property.specifications?.rooms_count || 0,
      bathrooms: property.interior_specs?.wc_count || 0,
      floors: property.specifications?.total_floors || 0,
      apartmentsPerFloor: 2,
      geographicalDirection:
        property.specifications?.property_direction === "south"
          ? "جنوبی"
          : "شمالی",
      apartmentArea: property.specifications?.building_area?.toString() || "0",
      overallArea: property.specifications?.land_area?.toString() || "0",
      documentType:
        property.specifications?.document_status === "single_deed"
          ? "سند تک برگ"
          : "نامشخص",
      floorForSale: property.specifications?.floor_number || 0,
      features: {
        elevator:
          property.interior_specs?.building_amenities?.includes("رﻮﺴﻧﺎﺳآ") ||
          false,
        warehouse:
          property.interior_specs?.building_amenities?.includes("یرﺎﺒﻧا") ||
          false,
        parking:
          property.interior_specs?.building_amenities?.includes("ﮓﻨﯿﮐرﺎﭘ") ||
          false,
        loan: property.price_info?.mortgage_price !== null,
        balcony:
          property.interior_specs?.building_amenities?.includes("ﻦﮑﻟﺎﺑ") ||
          false,
      },
      description: property.description || "بدون توضیحات",
      images:
        property.images?.length > 0
          ? property.images.map((img: { image_url: string }) => img.image_url)
          : ["/assets/svg/default.svg"],
      owner: {
        name: property.consultant_info?.name || "نامشخص",
        phoneNumber: property.consultant_info?.contact_phone || "نامشخص",
        realEstateName: property.consultant_info?.company_name || "نامشخص",
        rating: property.consultant_info?.is_verified ? 4 : 3,
        profilePicture:
          property.consultant_info?.profile_image_url ||
          "/assets/svg/default.svg",
      },
      location: {
        latitude: property.location?.latitude || 37.493,
        longitude: property.location?.longitude || 57.32,
        sector: property.location.sector || undefined,
        address: property.location.address || undefined,
      },
    };

    return <SinglePage estate={estate} />;
  } catch (error) {
    console.error("Error fetching property for ID:", id, error);
    notFound();
  }
};

export default BlogPostPage;
