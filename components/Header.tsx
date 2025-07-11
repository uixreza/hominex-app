"use client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { routes } from "../config/routes.json";
import { TbMenu4 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import DropdownMenu from "../components/UI/DropdownMenu";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const notify = () => toast("درحال انتقال به صفحه ورود 🔒");
  return (
    <div className="container  z-20 fixed top-0 sm:top-5 text-white flex justify-between items-center py-2 pr-4 sm:pl-9 px-5 sm:mt-3 h-auto sm:rounded-2xl  mx-auto shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
      {/* hamb icon */}
      {toggleMenu ? (
        <TbMenu3
          onClick={() => handleToggleMenu()}
          className="text-3xl cursor-pointer lg:hidden block"
        />
      ) : (
        <TbMenu4
          onClick={() => handleToggleMenu()}
          className="text-3xl cursor-pointer lg:hidden block"
        />
      )}
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
      <div className="hidden lg:flex">
        <ul className="flex gap-8 mr-[-90px] sm:mr-0 justify-center [&>li]:cursor-pointer [&>li]:relative">
          {routes.map((item, i) => (
            <li key={i} className="group flex flex-col items-center">
              <Link
                href={item.route}
                className="relative z-10 transition-colors duration-300 group-hover:text-white/70">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="https://hominex.ir/account/dashboard/"
        className="sm:block hidden">
        <div
          onClick={notify}
          className="cursor-pointer transition-all transition-normal hover:bg-white sm:p-3 rounded-sm hover:text-black">
          <FiUser className="text-2xl" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
