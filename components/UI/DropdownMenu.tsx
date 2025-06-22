import React from "react";
import { FiUser } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const DropdownMenu = () => {
  return (
    <ul className=" bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 p-4 rounded-3xl flex flex-col gap-2 absolute bottom-[-18rem] w-[13rem]">
      <li className="cursor-pointer flex items-center gap-2">درباره هومینکس</li>
      <li className="cursor-pointer flex items-center gap-2">معرفی محله</li>
      <li className="cursor-pointer flex items-center gap-2">ویژگی خانه من</li>
      <li className="cursor-pointer flex items-center gap-2">
        <MdOutlineRealEstateAgent />
        بازار املاک
      </li>
      <li className="cursor-pointer flex items-center gap-2">
        <CiSquareQuestion />
        مشاوره خرید
      </li>
      <li className="cursor-pointer flex items-center gap-2">
        <GrBlog />
        هومینکس مگ
      </li>

      <span className="w-1/2 bg-gray-400 rounded-2xl h-[3px] my-3"></span>

      <li className="cursor-pointer flex items-center gap-2">
        <FiUser />
        ورود / عضویت
      </li>
    </ul>
  );
};

export default DropdownMenu;
