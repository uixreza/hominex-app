import React from "react";
import Image from "next/image";

const sections = [
  {
    img: "/assets/img/estate.jpg",
    alt: "estate",
    text: "هومینکس با تحلیل داده‌های بازار و استفاده از فناوری‌های نوین، بهترین فرصت‌های سرمایه‌گذاری را برای شما شناسایی می‌کند.",
  },
  {
    img: "/assets/img/isometric2.webp",
    alt: "isometric",
    text: "تیم مشاورین ما با تجربه و تخصص بالا، شما را در تمامی مراحل خرید، فروش یا اجاره ملک همراهی می‌کنند.",
  },
  {
    img: "/assets/img/wallpaper.jpg",
    alt: "wallpaper",
    text: "با هومینکس، به اطلاعات دقیق و به‌روز بازار املاک دسترسی داشته باشید و تصمیمات هوشمندانه‌تری بگیرید.",
  },
];

export default function Information() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}>
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src={section.img}
              alt={section.alt}
              width={400}
              height={250}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full text-right flex items-center">
            <p className="text-lg font-medium leading-relaxed">
              {section.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
