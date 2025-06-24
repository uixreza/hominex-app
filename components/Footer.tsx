"use client";
import Image from "next/image";
import React from "react";
import { LuArrowBigUpDash } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };

  return (
    <div className="w-full text-white z-10 flex justify-between items-center p-4 sm:pl-9 px-5 sm:mt-3 h-auto sm:rounded-2xl bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 ">
      {/* about content */}
      <div className="flex flex-col items-end">
        <ul>
          <li className="mt-5 max-w-sm">
            <span className="font-bold pr-3 | relative before:absolute before:content-[''] before:rounded-full before:bg-white/60 before:right-[-0.2rem] before:top-[0.5rem] before:w-2 before:h-2 | after:content-[''] after:w-[0.1rem] after:h-full after:absolute after:right-0 after:top-5 after:bg-white/60 after:rounded-2xl">
              درباره ما
            </span>
            <p className="mr-4 mt-3">
              هومینکس با هدف تحول در صنعت مسکن ایران، از هوش مصنوعی و مصالح نوین
              برای بهبود خرید، فروش و ساخت‌وساز استفاده می‌کند. ما با رویکردی
              شفاف و مبتنی بر فناوری، بدنبال افزایش آگاهی مردم در معاملات مسکن
              هستیم .
            </p>
          </li>
          <li className="mt-5 max-w-sm">
            <span className="font-bold pr-3 | relative before:absolute before:content-[''] before:rounded-full before:bg-white/60 before:right-[-0.2rem] before:top-[0.5rem] before:w-2 before:h-2 | after:content-[''] after:w-[0.1rem] after:h-full after:absolute after:right-0 after:top-5 after:bg-white/60 after:rounded-2xl">
              ارتباط
            </span>
            <p className="mr-4 mt-3">منتظر نظرات و انتقادات شما هستیم .</p>
            <p className="mr-4 mt-3 flex flex-row items-center gap-2">
              <MdOutlineMarkEmailUnread /> hominex.co@gmail.com
            </p>
            <p className="mr-4 mt-3 flex flex-row items-center gap-2">
              <FiPhoneCall /> 32231035 - 085
            </p>
          </li>
        </ul>
      </div>

      {/* middle content */}
      <div className="bg-white/60 w-[0.1rem] rounded-2xl h-1/2 relative flex justify-center">
        <LuArrowBigUpDash
          onClick={() => scrollTop()}
          className="absolute bottom-[-2.5rem] p-1  bg-white/60 hover:bg-whitetransition-colors shadow-black/20 text-black text-3xl rounded-xl cursor-pointer"
        />
      </div>

      {/* address container */}
      <div className="w-1/3">
        <div className="">
          <span className="font-bold pr-3 | relative before:absolute before:content-[''] before:rounded-full before:bg-white/60 before:right-[-0.2rem] before:top-[0.5rem] before:w-2 before:h-2 | after:content-[''] after:w-[0.1rem] after:h-full after:absolute after:right-0 after:top-5 after:bg-white/60 after:rounded-2xl">
            آدرس ما
          </span>
          <p className="mr-4 mt-3">
            بجنورد - خیابان امیریه شمالی - کوچه رضا امامی 15
          </p>
          <p></p>
        </div>
        <div className="mt-5 max-w-sm">
          <span className="font-bold pr-3 | relative before:absolute before:content-[''] before:rounded-full before:bg-white/60 before:right-[-0.2rem] before:top-[0.5rem] before:w-2 before:h-2 | after:content-[''] after:w-[0.1rem] after:h-full after:absolute after:right-0 after:top-5 after:bg-white/60 after:rounded-2xl">
            مجوز ها
          </span>
          <div className="flex flex-row gap-3 mr-4 mt-3">
            <Image
              src={"/assets/img/enamad.png"}
              alt="enamad logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/img/enamad.png"}
              alt="enamad logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/img/enamad.png"}
              alt="enamad logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
