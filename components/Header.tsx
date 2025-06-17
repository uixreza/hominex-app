"use client";
import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { routes } from "@/config/routes.json";

const Header = () => {
  const pathname = usePathname();
  const notify = () => toast("درحال انتقال به صفحه ورود 🔒");
  return (
    <div className="fixed top-5 text-white z-10 flex justify-between items-center py-2 pr-4 pl-9 mt-3 h-auto rounded-2xl bg-[var(--box)]/40  backdrop:blur-3xl bg-opacity-40 shadow-black/20 container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 ">
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
        <div className="lg:flex flex-col hidden ">
          <span className="font-bold">هومینکس</span>
        </div>
      </div>

      {/* menu */}
      <div className="">
        <ul className="flex gap-10 mr-[-90px] sm:mr-0 justify-center [&>li]:cursor-pointer [&>li]:relative">
          {routes.map((item, i) => (
            <li className="group flex flex-col items-center">
              <Link
                href={item.route}
                className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
                {item.title}
              </Link>
              {pathname === item.route && (
                <span className="absolute bottom-[-15px] w-1.5 h-1.5 rounded-full bg-white mt-2 block"></span>
              )}
            </li>
          ))}
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
