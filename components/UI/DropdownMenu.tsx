import React from "react";
import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuLandPlot } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import Link from "next/link";

type componentType = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownMenu = ({ setToggleMenu }: componentType) => {
  return (
    <div
      dir="rtl"
      className="mt-6 z-20 shadow-xl backdrop-blur-lg bg-opacity-70 bg-[var(--box)] backdrop:blur-3xl bg-opacity-40 shadow-black/30 p-5 rounded-2xl w-full  mx-auto">
      <div className=" grid grid-cols-2 gap-5 sm:grid-cols-3">
        {[
          {
            href: "https://hominex.ir/about/",
            icon: (
              <AiOutlineInfoCircle className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "درباره هومینکس",
          },
          {
            href: "https://hominex.ir/mahallat/",
            icon: (
              <LuLandPlot className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "معرفی محله",
          },
          {
            href: "#",
            icon: (
              <RiHome6Line className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "ویژگی خانه من",
          },
          {
            href: "/estates",
            icon: (
              <MdOutlineRealEstateAgent className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "بازار املاک",
          },
          {
            href: "/consultation",
            icon: (
              <MdOutlineSupportAgent className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "مشاوره خرید",
          },
          {
            href: "/realEstates",
            icon: (
              <FaLandmark className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "مشاورین املاک",
          },
          {
            href: "https://hominex.ir/blog/",
            icon: (
              <GrBlog className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "هومینکس مگ",
          },
          {
            href: "https://hominex.ir/account/dashboard/",
            icon: (
              <FiUser className="w-7 h-7 opacity-40 transition-opacity duration-200 group-hover:opacity-70" />
            ),
            label: "ورود / عضویت",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-500/10 border border-white hover:bg-gray-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => setToggleMenu(false)}>
            <span className="text-sm font-semibold text-white mb-3 text-center leading-tight">
              {item.label}
            </span>
            {item.icon}
            {item.label === "ویژگی خانه من" && (
              <span
                id="badge-dismiss-green"
                className="inline-flex absolute top-[-7px] animate-pulse left-[-15px] z-10  items-center px-2 py-1 me-2 text-[10px] font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900/50 dark:text-green-300">
                بزودی
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
