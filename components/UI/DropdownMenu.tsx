import React from "react";
import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Link from "next/link";

const DropdownMenu = () => {
  return (
    <ul className="mt-1 z-20 shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]  backdrop:blur-3xl bg-opacity-40 shadow-black/20 p-4 rounded-3xl flex flex-col gap-2 w-[13rem]">
      <Link
        href={"https://hominex.ir/about/"}
        className="cursor-pointer flex items-center gap-2">
        درباره هومینکس
      </Link>
      <Link
        href={"https://hominex.ir/mahallat/"}
        className="cursor-pointer flex items-center gap-2">
        معرفی محله
      </Link>
      <li className="cursor-pointer flex items-center gap-2">ویژگی خانه من</li>
      <Link
        href={"https://hominex.ir/properties/"}
        className="cursor-pointer flex items-center gap-2">
        <MdOutlineRealEstateAgent />
        بازار املاک
      </Link>
      <Link
        href={"/consultation"}
        className="cursor-pointer flex items-center gap-2">
        <CiSquareQuestion />
        مشاوره خرید
      </Link>
      <Link
        href={"https://hominex.ir/blog/"}
        className="cursor-pointer flex items-center gap-2">
        <GrBlog />
        هومینکس مگ
      </Link>

      <span className="w-1/2 bg-gray-400 rounded-2xl h-[3px] my-3"></span>

      <Link
        href={"https://hominex.ir/account/dashboard/"}
        className="cursor-pointer flex items-center gap-2">
        <FiUser />
        ورود / عضویت
      </Link>
    </ul>
  );
};

export default DropdownMenu;
