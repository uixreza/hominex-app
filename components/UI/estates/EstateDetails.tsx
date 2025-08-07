"use client";
import React, { useState } from "react";
import { FaShareAlt, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { YellowChildren } from "../Badges";
import { TbQrcode } from "react-icons/tb";

interface EstateDetailsProps {
  estate: {
    title: string;
    pricePerMeter: string;
    publishedDate: string;
    overallPrice: string;
    estateCode: string;
    propertyType: string;
    buildDate: string;
    rooms: number;
    bathrooms: number;
    floors: number;
    apartmentsPerFloor: number;
    geographicalDirection: string;
    apartmentArea: string;
    overallArea: string;
    documentType: string;
    floorForSale: number;
    features: {
      elevator: boolean;
      warehouse: boolean;
      parking: boolean;
      loan: boolean;
      balcony: boolean;
    };
    description: string;
  };
}

export default function EstateDetails({ estate }: EstateDetailsProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Handle sharing (copies current URL to clipboard)
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("لینک ملک کپی شد!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("خطا در کپی لینک!");
    }
  };

  // Toggle bookmark state
  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    // Add logic to save bookmark state (e.g., to localStorage or backend)
  };
  return (
    <div
      dir="rtl"
      className=" py-6 rounded-lg  transition-shadow duration-200 w-full max-w-full ml-30 mx-auto">
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
          title={isBookmarked ? "حذف از نشان‌شده‌ها" : "افزودن به نشان‌شده‌ها"}>
          {isBookmarked ? (
            <FaBookmark className="w-5 h-5" />
          ) : (
            <FaRegBookmark className="w-5 h-5" />
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
            <span className="font-medium">عنوان:</span> {estate.title}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">قیمت هر متر:</span>{" "}
            {estate.pricePerMeter}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تاریخ انتشار:</span>{" "}
            {estate.publishedDate}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">قیمت کل:</span> {estate.overallPrice}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium ml-2">کد ملک:</span>
            <YellowChildren>
              {estate.estateCode} <TbQrcode className="text-gray-100" />
            </YellowChildren>
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
            <span className="font-medium">نوع ملک:</span> {estate.propertyType}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">سال ساخت:</span> {estate.buildDate}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد اتاق:</span> {estate.rooms}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد حمام:</span> {estate.bathrooms}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">تعداد طبقات:</span> {estate.floors}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">واحد در هر طبقه:</span>{" "}
            {estate.apartmentsPerFloor}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">جهت جغرافیایی:</span>{" "}
            {estate.geographicalDirection}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">مساحت آپارتمان:</span>{" "}
            {estate.apartmentArea}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">مساحت کل:</span> {estate.overallArea}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">نوع سند:</span> {estate.documentType}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">طبقه برای فروش:</span>{" "}
            {estate.floorForSale}
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
            {estate.features.elevator ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">انباری:</span>{" "}
            {estate.features.warehouse ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">پارکینگ:</span>{" "}
            {estate.features.parking ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">وام:</span>{" "}
            {estate.features.loan ? "دارد" : "ندارد"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">بالکن:</span>{" "}
            {estate.features.balcony ? "دارد" : "ندارد"}
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
