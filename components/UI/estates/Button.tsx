import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

type Button = {
  title: string;
  id: number;
};

export default function Button({ title, id }: Button) {
  return (
    <Link
      href={`/estates/${id}`}
      className="mt-4 w-3/4 flex flex-row items-center group justify-center gap-0 transition-all hover:gap-3 cursor-pointer font-bold bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
      {title}
      <IoIosArrowRoundBack className="font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all" />
    </Link>
  );
}
