"use client";
import React, { useMemo, Suspense } from "react";
import EstatesSkeleton from "@/components/UI/skeleton/EstatesSkeleton";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
const RealEstatesSection = React.lazy(
  () => import("@/components/Estates/RealStatesCard")
);

export interface RealEstatesProps {
  id: number;
  name: string;
  image: string;
}

export default function Page() {
  const realEstates = useMemo<RealEstatesProps[]>(
    () => [
      {
        id: 1,
        name: "مشاور املاک خانه آینده",
        image: "/assets/img/KhaneAyande.png",
      },
    ],

    []
  );

  return (
    <div className=" bg-transparent">
      {/* Main Content */}
      <main className="max-w-7xl  sm:px-1 py-6 ">
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
              <li>آگهی های ثبت شده توسط هر ماشور رو ببینی</li>
              <li>با سوابق و شماره تماس مستقیم هر مشاور آشنا بشی.</li>
              <li>مطمئن باشی که پشتیبانی واقعی در کنارته.</li>
            </ul>
          </div>
          <RealEstatesSection realEstates={realEstates} />
        </Suspense>
        {/* Property Grid */}
      </main>
    </div>
  );
}
