"use client";
import React from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Mag() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="flex flex-row [&>div]:w-1/2 justify-between gap-4 my-5">
      <div className="flex flex-col">
        <span className="font-bold text-3xl mb-5">هومینکس مگ</span>
        <span>
          در دنیای پرتحول املاک و ساخت‌وساز، اطلاعات دقیق و به‌روز ، کلید
          تصمیم‌گیری‌های بهتر است. هومینکس مگ جایی است که می‌توانید جدیدترین
          اخبار، تحلیل‌های بازار، راهنمای خرید و آموزش‌های تخصصی را دنبال کنید
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="group cursor-pointer carousel__cell number-slide1 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
              <div className="group cursor-pointer carousel__cell number-slide2 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
              <div className="group cursor-pointer carousel__cell number-slide3 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
              <div className="group cursor-pointer carousel__cell number-slide4 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
              <div className="group cursor-pointer carousel__cell number-slide5 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
              <div className="group cursor-pointer carousel__cell number-slide6 relative w-full h-40 overflow-hidden rounded-xl">
                <Image
                  src="/assets/img/estate.jpg"
                  alt="img"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
                <div className="transition-all absolute lg:bottom-[-5rem] group-hover:bottom-0 right-0 p-5 texthere w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                  <p className="text-[20px]">خرید ملک آسان تر از همیشه!!؟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
