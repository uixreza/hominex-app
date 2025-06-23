import React from "react";
import Link from "next/link";
type IButton = {
  title: string;
  href: string;
};

function Button({ title, href }: IButton) {
  return (
    <Link href={href}>
      <button
        className={` sm:text-[14px] text-[10px] bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 w-fit flex flex-row items-center justify-center gap-2 sm:px-4 sm:py-3 px-2 py-2 rounded-xl cursor-pointer border border-white/30 transition-all duration-200 hover:shadow-2xl`}>
        {title}
      </button>
    </Link>
  );
}

export default Button;
