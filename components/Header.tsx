"use client";
import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const Header = () => {
  const pathname = usePathname();
  const notify = () => toast("درحال انتقال به صفحه ورود 🔒");
  return (
    <div className="text-white z-10 flex justify-between items-center py-2 pr-4 pl-9 mt-3 h-auto rounded-2xl bg-[var(--box)]/40  backdrop:blur-3xl bg-opacity-40 shadow-black/20 container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 ">
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
        </div>
      </div>

      {/* menu */}
      <div className="">
        <ul className="flex gap-10 mr-[-90px] justify-center [&>li]:cursor-pointer [&>li]:relative">
          <li className="group flex flex-col items-center">
            <Link
              href={"/"}
              className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
              بازار املاک
            </Link>
            {pathname === "/" && (
              <span className="absolute bottom-[-15px] w-1.5 h-1.5 rounded-full bg-white mt-2 block"></span>
            )}
          </li>
          <li className="group flex flex-col items-center">
            <Link
              href="/consultation"
              className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
              مشاوره خرید
            </Link>
            {pathname === "/consultation" && (
              <span className="absolute bottom-[-15px] w-1.5 h-1.5 rounded-full bg-white mt-2 block"></span>
            )}
          </li>
          <li className="group flex flex-col items-center">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
              معرفی محله
            </span>
            {pathname === "" && (
              <span className="absolute bottom-[-15px] w-1.5 h-1.5 rounded-full bg-white mt-2 block"></span>
            )}
          </li>
          <li className="group flex flex-col items-center">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
              ویژگی خانه من
            </span>
            {pathname === "" && (
              <span className="absolute bottom-[-15px] w-1.5 h-1.5 rounded-full bg-white mt-2 block"></span>
            )}
          </li>
          <li></li>
        </ul>
      </div>

      {/* profile */}
      <a href="https://hominex.ir/account/dashboard/">
        <div
          onClick={notify}
          className="cursor-pointer transition-all transition-normal hover:bg-white p-3 rounded-sm hover:text-black">
          <FaRegUser />
        </div>
      </a>
    </div>
  );
};

export default Header;
