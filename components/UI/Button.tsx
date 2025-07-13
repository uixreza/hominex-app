import React from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

type IButton = {
  title: string;
  href: string;
  icon?: boolean;
};

function Button({ title, href, icon }: IButton) {
  return (
    <Link href={href}>
      <button
        className={`group hover:gap-4 text-[18px] lg:text-2xl bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 ${
          icon
            ? "w-[10rem] mt-10 border-2 border-white font-bold"
            : "w-fit border border-white/30"
        } flex flex-row items-center justify-center gap-2 sm:px-4 sm:py-3 px-2 py-2 rounded-xl cursor-pointer  transition-all duration-200 hover:shadow-2xl`}>
        {title}
        <IoIosArrowRoundBack
          className={`${
            icon ? null : "lg:hidden lg:opacity-0"
          } group-hover:block transition-all opacity-100  group-hover:opacity-100`}
        />
      </button>
    </Link>
  );
}

export default Button;
