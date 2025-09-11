import Image from "next/image";
import { Metadata } from "next";
import { MdOutlinePhoneInTalk, MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { url_v1 } from "@/config/urls";
import { use } from "react";

type Consultant = {
  id: number;
  name: string;
  company_name: string;
  bio: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_telegram: string;
  contact_instagram: string;
  profile_image_url: string | null;
  properties_count: number;
  office_address: string | null;
  office_staff_count: number | null;
};

export const metadata: Metadata = {
  title: `مشاوره املاک`,
  description: `صفحه مشاوره املاک`,
};

// Fetch consultant
async function getConsultant(slug: string): Promise<Consultant | null> {
  try {
    const res = await fetch(url_v1(`/consultants/${slug}/`), {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error("Error fetching consultant:", err);
    return null;
  }
}

// ✅ Let Next.js infer the type
export default function CategoryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const consultant = use(getConsultant(id));

  if (!consultant) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>مشاور یافت نشد</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="absolute z-[-1] w-screen h-2/3 top-0 right-0">
        <Image
          src={"/assets/img/Building.jpg"}
          alt="Building view"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
      </div>

      <div className="w-full">
        <div className="w-full gap-6 flex justify-center items-center flex-col py-10 sm:px-4">
          <Image
            src={
              consultant.profile_image_url || "/assets/img/default-profile.png"
            }
            alt={consultant.name}
            width={500}
            height={500}
            unoptimized={true}
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
              راه های ارتباطی
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
    </div>
  );
}
