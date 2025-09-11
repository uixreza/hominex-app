"use client";
import React, { useEffect, useState, Suspense } from "react";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { url_v1 } from "@/config/urls";
const RealEstatesSection = React.lazy(
  () => import("@/components/Estates/RealStatesCard")
);

export interface RealEstatesProps {
  id: number;
  name: string;
  image: string | null;
  company_name: string;
  bio: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_telegram: string;
  contact_instagram: string;
  properties_count: number;
  office_address: string | null;
  office_staff_count: number | null;
}

export default function Page() {
  const [realEstates, setRealEstates] = useState<RealEstatesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const res = await fetch(url_v1("/consultants"), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store", // ensures fresh data in Next.js app router
        });

        const json = await res.json();
        if (json?.data?.consultants) {
          const consultants: RealEstatesProps[] = json.data.consultants.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (c: any) => ({
              id: c.id,
              name: c.name,
              image: c.profile_image_url, // null if no image
              company_name: c.company_name,
              bio: c.bio,
              contact_phone: c.contact_phone,
              contact_whatsapp: c.contact_whatsapp,
              contact_telegram: c.contact_telegram,
              contact_instagram: c.contact_instagram,
              properties_count: c.properties_count,
              office_address: c.office_address,
              office_staff_count: c.office_staff_count,
            })
          );
          setRealEstates(consultants);
        }
      } catch (err) {
        console.error("Error fetching consultants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultants();
  }, []);

  return (
    <div className="bg-transparent">
      {/* Main Content */}
      <main className="max-w-7xl sm:px-1 py-6">
        <Suspense fallback={<EstatesSkeleton />}>
          <div className="flex flex-col gap-5 mb-10">
            <SplitText
              text="با مشاوران املاک حرفه ای شهر آشنا شوید"
              className="text-2xl font-semibold text-right"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="right"
            />
            <span>
              در هومینکس آگهی ها فقط توسط مشاورین تأیید شده ثبت میشن افرادی که
              سابقه ی کار حرفه ای شناخت دقیق از مناطق شهر و تعهد به صداقت دارن.
              در این بخش میتونی:
            </span>
            <ul className="list-disc mr-10 flex flex-col gap-1">
              <li>آگهی های ثبت شده توسط هر مشاور رو ببینی</li>
              <li>با سوابق و شماره تماس مستقیم هر مشاور آشنا بشی.</li>
              <li>مطمئن باشی که پشتیبانی واقعی در کنارته.</li>
            </ul>
          </div>

          {loading ? (
            <EstatesSkeleton />
          ) : (
            <RealEstatesSection realEstates={realEstates} />
          )}
        </Suspense>
        {/* Property Grid */}
      </main>
    </div>
  );
}
