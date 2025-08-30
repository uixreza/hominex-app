import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" mb-10 flex flex-col text-white items-center ">
      <div className="max-w-md w-full text-center">
        <Image
          src="/assets/svg/notFound.svg"
          alt="صفحه یافت نشد"
          width={300}
          height={300}
          className="mx-auto mb-6"
        />
        <h2 className={"text-3xl md:text-4xl font-bold mb-4"}>
          صفحه مورد نظر یافت نشد 👾
        </h2>
        <p className="mb-8">
          به نظر می‌رسد صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده
          است.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
          <FaHome className="w-5 h-5" />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
