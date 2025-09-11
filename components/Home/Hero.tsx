"use client";
import Button from "../UI/Button";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import { useRef } from "react";

export default function Hero() {
  const contextRef = useRef<HTMLDivElement>(null);
  const handleAnimationComplete = () => {
    if (contextRef.current) {
      contextRef.current.style.opacity = "1";
    }
  };

  return (
    <div className="lg:mt-[-8rem] flex lg:flex-row-reverse flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-20 lg:h-[100vh]">
      <div className="relative flex flex-col lg:mt-[2rem]">
        <span className="font-extrabold text-4xl xl:text-6xl mb-5">
          <div className="text-[var(--blue)] mb-2 text-5xl xl:text-6xl">
            مشاور
          </div>{" "}
          <BlurText
            text="#هوشمند_هومینکس"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="sm:text-4xl lg:text-6xl font-mono mt-3"
          />
        </span>
        <p
          className="leading-10 text-wrap text-xl lg:text-2xl text-justify opacity-0 transition-opacity"
          ref={contextRef}>
          هومینکس جایی است که خرید یا اجاره ملک، از دنیای حدس و گمان خارج میشود
          و وارد مسیر تحلیل ، مقایسه و تصمیم گیری آگاهانه میشود، ما این مسیر را
          با داده های واقعی و نگاه علمی برایتان هموار میکنیم.
        </p>
        <div className="pt-5 w-full flex justify-end items-center">
          <Button href="/about" title="درباره ما" icon={true} />
        </div>
        {/* <Image
          src={"/assets/svg/pppointed.svg"}
          width={300}
          height={300}
          alt="arrow icon"
          className="hidden md:block absolute left-32 bottom-[2rem]"
        /> */}
      </div>
      <div className="relative flex justify-center items-center">
        {/* Ambient effect only on md+ screens */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[290px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(120,0,32,0.45)_0%,rgba(120,0,32,0.0)_70%)]"></div>
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[290px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(10,25,49,0.45)_0%,rgba(10,25,49,0.0)_70%)]"></div>
        </div>
        <video
          src="/assets/Intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="relative  rounded-2xl w-full h-[450px] object-cover shadow-lg z-[-1]"
        />
        <div className="absolute w-full bottom-0 flex justify-center items-center py-3 rounded-br-md rounded-bl-md text-[15px] bg-[#5e768f] z-10">
          ir.<span className="font-bold">Hominex</span>
        </div>
      </div>
    </div>
  );
}
