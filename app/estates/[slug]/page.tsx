import { Metadata } from "next";
import SinglePage from "@/components/Estates/SinglePage/SinglePage";
import { notFound, redirect } from "next/navigation";
import { url_v1 } from "@/config/urls";
import { NextPage } from "next";

// Reuse your Estate type as defined
export type EstateProps = {
  id?: number;
  title?: string;
  description?: string;
  pricePerMeter?: string;
  publishedDate?: string;
  overallPrice?: string;
  estateCode?: string;
  propertyType?: string;
  isFavorited?: boolean;
  buildDate?: string;
  rooms?: number;
  bathrooms?: number;
  floors?: number;
  apartmentsPerFloor?: number;
  geographicalDirection?: string;
  apartmentArea?: string;
  overallArea?: string;
  documentType?: string;
  floorForSale?: number;
  features?: {
    elevator?: boolean;
    warehouse?: boolean;
    parking?: boolean;
    loan?: boolean;
    balcony?: boolean;
  };
  images: string[];
  owner: {
    name: string;
    consultant_id: number;
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
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ──────────────────────────────
// SEO Metadata
// ──────────────────────────────
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || isNaN(Number(slug))) {
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
      return {
        title: "ملک یافت نشد | هومینکس",
        description: "ملک درخواستی یافت نشد.",
      };
    }

    const result = await response.json();

    const property = result?.data;

    if (!result.success || !property) {
      return {
        title: "ملک یافت نشد | هومینکس",
        description: "ملک درخواستی یافت نشد.",
      };
    }

    const title = property.title || "جزئیات ملک | هومینکس";
    const description = property.description
      ? `${property.description.slice(0, 160)}...`
      : "جزئیات ملک ارائه نشده است.";
    const keywords = [
      property.property_info?.property_category_label,
      `${property.specifications?.building_area || ""} متر`,
      property.location?.city,
      property.price_info?.formatted_price,
      "ملک",
      "فروش",
      "آپارتمان",
    ]
      .filter(Boolean)
      .join(", ");

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://hominex.ir/estates/${slug}`,
        images:
          property.images?.length > 0
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              property.images.map((img: any) => ({
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
    console.error("Error generating metadata:", error);
    return {
      title: "خطا در دریافت اطلاعات ملک | هومینکس",
      description: "امکان دریافت اطلاعات ملک وجود ندارد.",
    };
  }
}

// ──────────────────────────────
// Page Component
// ──────────────────────────────
const BlogPostPage: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params;

  if (!slug || isNaN(Number(slug))) {
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
      if (response.status === 404) {
        notFound();
      } else if (response.status === 403) {
        redirect("/unauthorized");
      } else {
        throw new Error(`Fetch failed: ${response.statusText}`);
      }
    }

    const result = await response.json();
    console.log(result);
    const property = result?.data;

    if (!result.success || !property) {
      notFound();
    }

    const estate: EstateProps = {
      id: Number(id),
      title: property.title || "بدون عنوان",
      pricePerMeter: property.price_info?.price_per_meter
        ? new Intl.NumberFormat("fa-IR").format(
            property.price_info.price_per_meter
          )
        : "نامشخص",
      publishedDate: property.published_at
        ? new Date(property.published_at).toLocaleDateString("fa-IR")
        : "نامشخص",
      overallPrice: property.price_info?.formatted_price || "نامشخص",
      estateCode: property.id?.toString() || "نامشخص",
      propertyType: property.property_info?.property_category_label || "نامشخص",
      isFavorited: property.stats?.is_favorited ?? false,
      buildDate:
        property.specifications?.construction_year?.toString() || "نامشخص",
      rooms: property.specifications?.rooms_count ?? 0,
      bathrooms: property.interior_specs?.wc_count ?? 0,
      floors: property.specifications?.total_floors ?? 0,
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
      floorForSale: property.specifications?.floor_number ?? 0,
      features: {
        elevator:
          property.interior_specs?.building_amenities?.includes("رﻮﺴﻧﺎﺳآ") ??
          false,
        warehouse:
          property.interior_specs?.building_amenities?.includes("یرﺎﺒﻧا") ??
          false,
        parking:
          property.interior_specs?.building_amenities?.includes("ﮓﻨﯿﮐرﺎﭘ") ??
          false,
        loan: property.price_info?.mortgage_price !== null,
        balcony:
          property.interior_specs?.building_amenities?.includes("ﻦﮑﻟﺎﺑ") ??
          false,
      },
      description: property.description || "بدون توضیحات",
      images:
        property.images?.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            property.images.map((img: any) => img.image_url)
          : ["/assets/svg/default.svg"],
      owner: {
        name: property.consultant_info?.name || "نامشخص",
        consultant_id: property.consultant_info.consultant_id || 1,
        phoneNumber: property.consultant_info?.contact_phone || "نامشخص",
        realEstateName: property.consultant_info?.company_name || "نامشخص",
        rating: property.consultant_info?.is_verified ? 4 : 3,
        profilePicture:
          property.consultant_info?.profile_image_url ||
          "/assets/svg/default.svg",
      },
      location: {
        latitude: property.location?.latitude ?? 37.493,
        longitude: property.location?.longitude ?? 57.32,
        address: property.location?.address,
        sector: property.location?.sector, // sector not available in the API
      },
    };

    return <SinglePage estate={estate} />;
  } catch (error) {
    console.error("Error loading property:", error);
    notFound();
  }
};

export default BlogPostPage;
