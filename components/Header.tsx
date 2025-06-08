import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white flex justify-between items-center py-2 px-4 mt-3 h-auto rounded-2xl bg-[var(--header-background)] w-[90%] max-w-[1400px] border-2 border-green mx-auto">
      {/* logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.png"} alt="logo" width={60} height={60} />
        <div className="flex flex-col">
          <span className="font-bold">هومینکس</span>
          <span>مسیری برای رسیدن به خانه های آینده</span>
        </div>
      </div>

      {/* menu */}
      <div className=" mr-[-40px]">
        <ul className="flex gap-10 justify-center">
          <li>بازار املاک</li>
          <li>مشاوره خرید</li>
          <li>معرفی محله</li>
          <li>ویژگی خانه من</li>
          <li></li>
        </ul>
      </div>

      {/* profile */}
      <div>
        <FaRegUser />
      </div>
    </div>
  );
};

export default Header;
