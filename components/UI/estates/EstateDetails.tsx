"use client";
import React from "react";
import { FaShareAlt, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { YellowChildren } from "../Badges";
import { TbQrcode } from "react-icons/tb";
import { EstateProps } from "@/app/estates/[slug]/page";
interface EstateDetailsProps {
  estate: EstateProps;
  bookmark: () => void;
  marked: boolean;
}

export default function EstateDetails({
  estate,
  bookmark,
  marked,
}: EstateDetailsProps) {
  // Handle sharing (copies current URL to clipboard)
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Consider replacing alert with a toast notification for better UX
      alert("لینک ملک کپی شد!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("خطا در کپی لینک!");
    }
  };

  // Toggle bookmark state
  const handleBookmark = () => {
    // TODO: Add logic to save bookmark state to backend (e.g., POST to /api/v1/properties/{id}/favorite)
  };

  return (
    <div
      dir="rtl"
      className="py-6 rounded-lg transition-shadow duration-200 w-full max-w-full ml-30 mx-auto">
      {/* Action Icons */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={handleShare}
          className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          title="اشتراک‌گذاری">
          <FaShareAlt className="w-5 h-5" />
        </button>
        <button
          onClick={handleBookmark}
          className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          title={marked ? "حذف از نشان‌شده‌ها" : "افزودن به نشان‌شده‌ها"}>
          {marked ? (
            <FaBookmark className="w-5 h-5" onClick={() => bookmark()} />
          ) : (
            <FaRegBookmark className="w-5 h-5" onClick={() => bookmark()} />
          )}
        </button>
      </div>

      {/* Section 1: Basic Info */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          اطلاعات پایه
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">عنوان:</span>{" "}
            {estate.title || "بدون عنوان"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">قیمت هر متر:</span>{" "}
            {estate.pricePerMeter || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تاریخ انتشار:</span>{" "}
            {estate.publishedDate || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">قیمت کل:</span>{" "}
            {estate.overallPrice || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium ml-2">کد ملک:</span>
            <YellowChildren>
              {estate.estateCode || "نامشخص"}{" "}
              <TbQrcode className="text-gray-100" />
            </YellowChildren>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium ml-2">آدرس ملک:</span>
            {estate.location.address || "نامشخص"}
          </p>
        </div>
      </div>

      {/* Section 2: Property Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          جزئیات ملک
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">نوع ملک:</span>{" "}
            {estate.propertyType || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">سال ساخت:</span>{" "}
            {estate.buildDate || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد اتاق:</span>{" "}
            {estate.rooms || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد حمام:</span>{" "}
            {estate.bathrooms || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد طبقات:</span>{" "}
            {estate.floors || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">واحد در هر طبقه:</span>{" "}
            {estate.apartmentsPerFloor || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">جهت جغرافیایی:</span>{" "}
            {estate.geographicalDirection || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">مساحت آپارتمان:</span>{" "}
            {estate.apartmentArea || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">مساحت کل:</span>{" "}
            {estate.overallArea || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">نوع سند:</span>{" "}
            {estate.documentType || "نامشخص"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">طبقه برای فروش:</span>{" "}
            {estate.floorForSale || "نامشخص"}
          </p>
        </div>
      </div>

      {/* Section 3: Features */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          امکانات
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">آسانسور:</span>{" "}
            {estate.features?.elevator ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">انباری:</span>{" "}
            {estate.features?.warehouse ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">پارکینگ:</span>{" "}
            {estate.features?.parking ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">وام:</span>{" "}
            {estate.features?.loan ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">بالکن:</span>{" "}
            {estate.features?.balcony ? "دارد" : "ندارد"}
          </p>
        </div>
      </div>

      {/* Section 4: Description */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          توضیحات
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {estate.description || "توضیحاتی ارائه نشده است"}
        </p>
      </div>
    </div>
  );
}
