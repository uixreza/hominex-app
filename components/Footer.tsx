"use client";
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
    <div className="w-full text-white z-10 flex flex-col lg:flex-row justify-between items-center p-4 sm:pl-9 px-5 sm:mt-3 h-auto sm:rounded-2xl bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 container mx-auto shadow-lg backdrop-blur-md bg-opacity-60 ">
      {/* about content */}
      <div className="flex flex-col items-start">
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
      <div className="bg-white lg:w-[0.1rem] lg:h-[10rem] w-[10rem] h-[0.1rem] my-20 lg:my-0 rounded-2xl relative flex justify-center">
        <LuArrowBigUpDash
          onClick={() => scrollTop()}
          className="absolute lg:bottom-[-2.5rem] bottom-[-1rem] p-1 bg-white transition-colors shadow-black/20 text-black text-3xl rounded-xl cursor-pointer"
        />
      </div>

      {/* address container */}
      <div className="lg:w-1/3 sm:w-1/2 w-full lg:h-[16rem] flex items-start flex-col">
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
          <div className="flex flex-row gap-5 mr-4 mt-3">
            <a href="https://trustseal.enamad.ir/?id=578965&Code=RBGUFTHNcR5l3JS6UtEQL9CzV5tLM97p">
              <img
                src={"assets/img/enamad.png"}
                alt="enamad logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
