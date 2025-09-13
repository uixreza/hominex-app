"use client";

import Image from "next/image";
import { MdOutlinePhoneInTalk, MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EstateProps } from "@/app/estates/[slug]/page";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { Filters, Property } from "@/app/estates/page";
import { cities } from "@/public/assets/iranian_cities_fa";
import { url_v1 } from "@/config/urls";
import { GrSelect } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import { clearItems } from "@/Redux/Slices/compareItems";
const FilterSection = React.lazy(() => import("@/components/Estates/Filters"));
const PropertiesSection = React.lazy(
  () => import("@/components/Estates/PropertiesCard")
);

type Consultant = {
  id: number;
  name: string;
  company_name: string;
  bio: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_telegram: string;
  contact_instagram: string | null;
  profile_image_url: string | null;
  properties_count: number;
  office_address: string | null;
  office_staff_count: number | null;
};

export const fakeEstate: EstateProps = {
  id: 101,
  title: "آپارتمان لوکس در شمال تهران",
  description:
    "یک آپارتمان شیک و مدرن با منظره عالی و امکانات کامل، مناسب خانواده‌های پرجمعیت.",
  pricePerMeter: "50,000,000 تومان",
  publishedDate: "2025-09-13",
  overallPrice: "5,000,000,000 تومان",
  estateCode: "T101-NT",
  propertyType: "آپارتمان",
  isFavorited: false,
  buildDate: "1402/05/12",
  rooms: 3,
  bathrooms: 2,
  floors: 5,
  apartmentsPerFloor: 2,
  geographicalDirection: "جنوبی-غربی",
  apartmentArea: "100 متر مربع",
  overallArea: "120 متر مربع",
  documentType: "سند رسمی",
  floorForSale: 3,
  features: {
    elevator: true,
    warehouse: true,
    parking: true,
    loan: false,
    balcony: true,
  },
  images: [
    "/assets/img/estate1.jpg",
    "/assets/img/estate2.jpg",
    "/assets/img/estate3.jpg",
  ],
  owner: {
    name: "رضا کمالی",
    consultant_id: 18,
    phoneNumber: "09123456789",
    realEstateName: "املاک هدیه",
    rating: 4.8,
    profilePicture: "/assets/img/profile-reza.jpg",
  },
  location: {
    latitude: 35.7596,
    longitude: 51.3289,
    address: "خیابان ولیعصر، نرسیده به تجریش، پلاک ۱۲۳",
    sector: "شمال تهران",
  },
};

function RealEstateDetail() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop(); // Extract slug from URL (e.g., "19" from "/realEstates/19")

  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchConsultant(slug: string) {
      try {
        if (!slug || slug === "undefined") {
          console.error("Invalid consultant slug:", slug);
          setError("شناسه مشاور نامعتبر است.");
          setLoading(false);
          return;
        }

        const apiUrl = `/api/consultants/${slug}`;
        const res = await fetch(apiUrl, {
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          console.error(
            `Proxy HTTP error! Status: ${res.status}, StatusText: ${res.statusText}`
          );
          if (res.status === 404) {
            setError(
              "آدرس API یافت نشد. لطفاً بررسی کنید که مسیر API (/api/consultants/[slug]) به درستی تنظیم شده باشد."
            );
          } else {
            setError(`خطا در دریافت اطلاعات مشاور: ${res.statusText}`);
          }
          setLoading(false);
          return;
        }

        const json = await res.json();
        if (!json.success) {
          console.error(
            "Proxy error response:",
            json.message,
            json.raw || json.error
          );
          setError(json.message || "خطا در دریافت اطلاعات مشاور.");
          setLoading(false);
          return;
        }

        const consultantData = json?.data?.consultant;
        if (!consultantData) {
          console.error("Consultant data not found in response:", json);
          setError("مشاور یافت نشد.");
          setLoading(false);
          return;
        }

        setConsultant({
          id: consultantData.id ?? 0,
          name: consultantData.name ?? "Unknown",
          company_name: consultantData.company_name ?? "Unknown",
          bio: consultantData.bio ?? "No bio available",
          contact_phone: consultantData.contact_phone ?? "",
          contact_whatsapp: consultantData.contact_whatsapp ?? "",
          contact_telegram: consultantData.contact_telegram ?? "",
          contact_instagram: consultantData.contact_instagram ?? null,
          profile_image_url: consultantData.profile_image_url ?? null,
          properties_count: json.data.stats?.total_active ?? 0,
          office_address: consultantData.office_address ?? null,
          office_staff_count: consultantData.office_staff_count ?? null,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching consultant from proxy:", err);
        setError("خطا در دریافت اطلاعات مشاور: خطای سرور.");
        setLoading(false);
      }
    }

    if (slug) {
      fetchConsultant(slug);
    } else {
      console.error("No slug found in URL:", pathname);
      setError("شناسه مشاور نامعتبر است.");
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">در حال بارگذاری...</p>
      </div>
    );
  }

  if (error || !slug || slug === "undefined") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500">
            {error || "شناسه مشاور نامعتبر است. لطفاً آدرس را بررسی کنید."}
          </p>
          <p className="mt-4">
            <Link href="/realEstates" className="text-blue-500 underline">
              بازگشت به لیست مشاوران
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!consultant) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500">
            مشاور یافت نشد. لطفاً آدرس یا شناسه را بررسی کنید.
          </p>
          <p className="mt-4">
            <Link href="/realEstates" className="text-blue-500 underline">
              بازگشت به لیست مشاوران
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="absolute z-[-1] w-screen h-2/3 top-0 right-0">
        <Image
          src="/assets/img/Building.jpg"
          alt="Building view"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <div className="w-full">
        <div className="w-full gap-6 flex justify-center items-center flex-col py-10 sm:px-4">
          <Image
            src={consultant.profile_image_url || "/logo.png"}
            alt={consultant.name}
            width={500}
            height={500}
            unoptimized
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border-4 border-white object-cover"
          />

          <span className="text-xl sm:text-2xl md:text-3xl text-center">
            {consultant.company_name}
          </span>

          <p className="max-w-3xl text-justify leading-8 border-r-4 border-l-4 border-white px-4 text-sm sm:text-base">
            {consultant.bio}
          </p>

          <div className="flex flex-col justify-start w-full max-w-3xl mt-5 gap-6">
            <span className="border-r-4 border-orange-700 pr-4 text-xl sm:text-2xl">
              راه‌های ارتباطی
            </span>
            <ul className="flex flex-col gap-3 [&>*]:transition-all [&>*]:border [&>*]:border-white [&>*]:text-center [&>*]:py-4 [&>*]:flex [&>*]:flex-row [&>*]:gap-2 [&>*]:justify-center [&>*]:items-center [&>*]:cursor-pointer">
              {consultant.contact_phone && (
                <li className="hover:bg-white/10 relative">
                  <MdOutlinePhoneInTalk className="text-orange-600 absolute right-4 w-4 h-5" />
                  {consultant.contact_phone}
                </li>
              )}
              {consultant.office_address && (
                <li className="hover:bg-white/10 text-sm sm:text-base relative">
                  <IoLocationOutline className="text-orange-600 absolute right-4 w-4 h-5" />
                  {consultant.office_address}
                </li>
              )}
              {consultant.contact_telegram && (
                <li className="hover:bg-white/10 relative">
                  <TbBrandTelegram className="text-orange-600 absolute right-4 w-4 h-5" />
                  {consultant.contact_telegram}
                </li>
              )}
              {consultant.contact_instagram && (
                <li className="hover:bg-white/10 relative">
                  <MdOutlineAlternateEmail className="text-orange-600 absolute right-4 w-4 h-5" />
                  {consultant.contact_instagram}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default RealEstateDetail;
