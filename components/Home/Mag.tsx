"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import Button from "../UI/Button";

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
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  useEffect(() => {
    setLoading(true);

    fetch("https://hominex.ir/wp-json/wp/v2/posts?per_page=5&_embed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("خطا در دریافت اطلاعات مقالات");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "خطا در دریافت اطلاعات");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex lg:flex-row flex-col lg:[&>div]:w-1/2 [&>div]:w-full lg:justify-between justify-center  lg:gap-4 gap-10 my-5">
      <div className="flex flex-col gap-3">
        <Link
          href={"https://hominex.ir/blog/"}
          className="font-extrabold text-4xl mb-5 flex items-center gap-3 cursor-pointer group">
          <span className="text-[var(--blue)]">هومینکس</span> مگ{" "}
          <FiLink className="text-[20px] group-hover:mr-3 transition-all" />
        </Link>
        <span className="leading-10 text-wrap text-xl lg:text-2xl text-justify">
          در دنیای پرتحول املاک و ساخت‌وساز، اطلاعات دقیق و به‌روز ، کلید
          تصمیم‌گیری‌های بهتر است. هومینکس مگ جایی است که می‌توانید جدیدترین
          اخبار، تحلیل‌های بازار، راهنمای خرید و آموزش‌های تخصصی را دنبال کنید
        </span>
        <Button href="https://hominex.ir/blog/" title="مشاهده" />
      </div>
      <div className="flex justify-center items-center">
        <div className="wrapper">
          <div className="scene sm:perspective-[500px] perspective-[200px]">
            {loading ? (
              <div className="carousel keen-slider flex items-center justify-center min-h-[10rem] text-[#7ecfff] text-lg">
                در حال بارگذاری...
              </div>
            ) : error ? (
              <div className="carousel keen-slider flex items-center justify-center min-h-[10rem] text-red-500 text-lg">
                {error}
              </div>
            ) : (
              <div className="carousel keen-slider" ref={sliderRef}>
                {posts.map((post, idx) => {
                  // Get image from _embedded if available
                  const img = "/assets/svg/mag.svg";
                  // post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                  return (
                    <Link
                      key={post.id}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group cursor-pointer carousel__cell SLIDES number-slide${
                        idx + 1
                      } relative w-full h-40 sm:h-56 md:h-64 lg:h-40 xl:h-56 2xl:h-64 overflow-hidden rounded-xl flex-shrink-0`}>
                      <div
                        className="relative w-full"
                        style={{ width: "100%", maxWidth: 480, height: 270 }}>
                        <Image
                          src={img}
                          alt={post.title?.rendered || "post"}
                          fill={false}
                          unoptimized={true}
                          width={0}
                          height={0}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          className="rounded-xl object-cover w-full h-full"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={idx === 0}
                        />
                      </div>
                      <div className="transition-all absolute bottom-0 group-hover:bottom-0 right-0 p-5 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent flex items-end">
                        <p
                          className="text-[16px] sm:text-[18px] md:text-[20px]"
                          dangerouslySetInnerHTML={{
                            __html: post.title?.rendered || "",
                          }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// api to work with
// https://hominex.ir/wp-json/wp/v2/posts
