import Image from "next/image";
import { Metadata } from "next";
import { MdOutlinePhoneInTalk, MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import RealStateProperties from "@/components/RealStates/SinglePage/RealStateProperties";

// --- Metadata (runs on server, good for SEO)
export const metadata: Metadata = {
  title: `مشاوره املاک `,
  description: `صفحه مشاوره املاک `,
};

export default async function Page() {
  return (
    <div className="">
      {/* Background with gradient overlay */}
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

      {/* Content */}
      <div className="w-full">
        <div className="w-full gap-6 flex justify-center items-center flex-col py-10 sm:px-4">
          {/* Logo */}
          <Image
            src={"/assets/img/KhaneAyande.png"}
            alt="لوگو مشاور املاک"
            width={500}
            height={500}
            unoptimized={true}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border-4 border-white"
          />

          {/* Title */}
          <span className="text-xl sm:text-2xl md:text-3xl text-center">
            مشاور املاک خانه آینده
          </span>

          {/* Description */}
          <p className="max-w-3xl text-justify leading-8 border-r-4 border-l-4 border-white px-4 text-sm sm:text-base">
            خانه آینده، مشاور املاک مدرن و هم‌مسیر آینده‌نگری در بازار مسکن. ما
            با تحلیل دقیق، فایل‌های باکیفیت و مشاوره تخصصی، به خریداران و
            فروشندگان کمک می‌کنیم تا انتخابی هوشمند داشته باشند. از مشاوران
            محترم دعوت می‌کنیم برای همکاری در فروش فایل‌ها، به ما بپیوندند و با
            هم، معاملات موفق‌تری رقم بزنیم. در تمامی فایل ها از همکاری با
            مشاوران استقبال میشود و برای دیدن درخواستی ها روی آگهی مربوط به
            درخواستی ها کلیک کنید.
          </p>

          {/* Contact Section */}
          <div className="flex flex-col justify-start w-full max-w-3xl mt-5 gap-6">
            <span className="border-r-4 border-orange-700 pr-4 text-xl sm:text-2xl">
              راه های ارتباطی
            </span>
            <ul className="flex flex-col gap-3 [&>*]:transition-all [&>*]:border [&>*]:border-white [&>*]:text-center [&>*]:py-4 [&>*]:flex [&>*]:flex-row [&>*]:gap-2 [&>*]:justify-center [&>*]:items-center [&>*]:cursor-pointer">
              <li className="hover:bg-white/10 relative">
                <MdOutlinePhoneInTalk className="text-orange-600 absolute right-4 w-4 h-5" />{" "}
                09157723523
              </li>
              <li className="hover:bg-white/10 text-sm sm:text-base relative">
                <IoLocationOutline className="text-orange-600 absolute right-4 w-4 h-5" />{" "}
                بجنورد ، خیابان امیریه شمالی ، نبش امامی 15
              </li>
              <li className="hover:bg-white/10 relative">
                <TbBrandTelegram className="text-orange-600 absolute right-4 w-4 h-5" />{" "}
                father_angel@
              </li>
              <li className="hover:bg-white/10 relative">
                <MdOutlineAlternateEmail className="text-orange-600 absolute right-4 w-4 h-5" />{" "}
                rokuro.mgh@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* list of properties */}
      <RealStateProperties />
    </div>
  );
}
