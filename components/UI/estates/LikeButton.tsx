import React from "react";
import { AiOutlineLike } from "react-icons/ai";
type Button = {
  id: number;
  active?: boolean;
};

export default function LikeButton({ id, active = false }: Button) {
  return (
    <button
      className={`mt-4  flex w-1/4 hover:ring-2 hover:ring-blue-300  flex-row items-center group justify-center gap-0  transition-all hover:gap-3 cursor-pointer font-bold border-2 border-blue-400 ${
        active ? "text-white bg-blue-400" : "text-blue-400"
      }  py-2 rounded-md 0`}>
      <AiOutlineLike className=" font-bold text-2xl" />
    </button>
  );
}
