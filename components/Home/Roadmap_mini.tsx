import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoMdArrowDropleft } from "react-icons/io";

const sections = [
  {
    img: "/assets/img/mahallat.png",
    alt: "estate",
    title: "معرفی محله",
    text: "با تحلیل کامل بافت شهری، موقعیت جغرافیایی و دسترسی به خدمات شهری، تصویری شفاف از هر محله ارائه می‌دهیم تا شناخت دقیق‌تری پیش از تصمیم‌گیری داشته باشید.",
    dir: "right",
    link: "http://hominex.ir/mahallat",
  },
  {
    img: "/assets/img/khaneman.png",
    alt: "isometric",
    title: "ویژگی خانه من",
    text: "برای هر قطعه زمین یا ملک، داده‌های شهری و تحلیلی را ترکیب می‌کنیم تا به شما نشان دهیم دقیقاً با چه خانه‌ای روبه‌رو هستید؛ از امکانات و موقعیت تا کیفیت ساخت و ویژگی های فنی ملک.",
    dir: "left",
    link: "/",
  },
  {
    img: "/assets/img/takhmin.png",
    alt: "wallpaper",
    title: "تخمین قیمت ملک",
    text: "ما تنها به قیمت‌های سطح بازار اکتفا نمی‌کنیم؛ بلکه با ترکیب داده‌های اقتصادی، موقعیت جغرافیایی ملک و کیفیت ساخت‌وساز، تحلیلی چندبعدی ارائه می‌دهیم.",
    dir: "right",
    link: "/consultation",
  },
];

export default function Roadmap_mini() {
  return (
    <div className="flex sm:hidden flex-col gap-3 w-full">
      {sections.map((section, idx) => {
        const isRight = section.dir === "right";
        return (
          <div
            key={idx}
            className={`relative w-full lg:opacity-80 hover:opacity-100 group sm:rounded-2xl shadow-lg hover:shadow-none transition-all cursor-pointer bg-cover bg-center flex ${
              isRight ? "justify-start" : "justify-end"
            } min-h-[200px] md:min-h-[260px] overflow-hidden`}
            style={{
              backgroundImage: `url(${section.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
            }}>
            {section.link === "/" && (
              <span className="bg-blue-100 z-10 h-fit absolute left-3 top-3 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                بزودی ...
              </span>
            )}
            <Link
              href={section.link}
              className={`${
                isRight
                  ? " sm:rounded-tr-2xl sm:rounded-br-2xl sm:rounded-tl-none sm:rounded-bl-none"
                  : "sm:rounded-tl-2xl sm:rounded-bl-2xl"
              } absolute right-[-90vw] group-hover:right-0 transition-all sm:w-1/2 w-full  p-5 gap-5 h-full min-h-[inherit] flex flex-col justify-center bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20`}
              style={{ textDecoration: "none" }}>
              <span className="font-bold md:text-2xl lg:text-3xl flex flex-row">
                {section.title}
                <IoIosArrowRoundBack className="group-hover:opacity-100 opacity-0 transition-all group-hover:mr-3" />
              </span>
              <p className=" leading-5 lg:leading-8">{section.text}</p>
              <IoMdArrowDropleft className="absolute left-[-2rem] text-4xl" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
