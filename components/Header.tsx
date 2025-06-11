import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-white flex justify-between items-center py-2 pr-4 pl-9 mt-3 h-auto rounded-2xl bg-[var(--header-background)] container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 border border-white/30">
      {/* logo */}
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image
            className="cursor-pointer"
            src={"/logo.png"}
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="flex flex-col">
          <span className="font-bold">هومینکس</span>
          <span>مسیری برای رسیدن به خانه های آینده</span>
        </div>
      </div>

      {/* menu */}
      <div className="">
        <ul className="flex gap-10 mr-[-90px] justify-center [&>li]:cursor-pointer">
          <li>بازار املاک</li>
          <Link href={"/consultation"}>مشاوره خرید</Link>
          <li>معرفی محله</li>
          <li>ویژگی خانه من</li>
          <li></li>
        </ul>
      </div>

      {/* profile */}
      <a href="https://hominex.ir/account/dashboard/">
        <div className="cursor-pointer transition-all transition-normal hover:bg-white p-3 rounded-sm hover:text-black">
          <FaRegUser />
        </div>
      </a>
    </div>
  );
};

export default Header;
