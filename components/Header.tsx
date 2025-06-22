"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/config/routes.json";
import { CgMenuGridO } from "react-icons/cg";
import DropdownMenu from "./UI/DropdownMenu";

const Header = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
    console.log("heloo");
  };
  // const notify = () => toast("درحال انتقال به صفحه ورود 🔒");
  return (
    <div className="fixed top-0 sm:top-5 text-white z-10 flex justify-between items-center py-2 pr-4 sm:pl-9 px-5 sm:mt-3 h-auto sm:rounded-2xl bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 ">
      {/* hamb icon */}
      <CgMenuGridO
        onClick={() => handleToggleMenu()}
        className="text-3xl cursor-pointer sm:hidden block"
      />

      {/* dropDown menu */}
      {toggleMenu && <DropdownMenu />}
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
      <div className="hidden sm:flex">
        <ul className="flex gap-10 mr-[-90px] sm:mr-0 justify-center [&>li]:cursor-pointer [&>li]:relative">
          {routes.map((item, i) => (
            <li key={i} className="group flex flex-col items-center">
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
      {/* profile
      <a href="https://hominex.ir/account/dashboard/">
        <div
          onClick={notify}
          className="cursor-pointer transition-all transition-normal hover:bg-white sm:p-3 rounded-sm hover:text-black">
          <FiUser className="text-2xl" />
        </div>
      </a> */}
    </div>
  );
};

export default Header;
