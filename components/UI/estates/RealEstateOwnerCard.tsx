import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt, FaPhone } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
interface RealEstateOwnerCardProps {
  profilePicture?: string;
  realEstateName: string;
  ownerName: string;
  rating: number; // Rating out of 5 (e.g., 4.5)
  phoneNumber: string;
  setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RealEstateOwnerCard({
  profilePicture,
  realEstateName,
  ownerName,
  rating,
  phoneNumber,
  setChat,
}: RealEstateOwnerCardProps) {
  // Calculate full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-3 flex-col items-center sm:w-sm w-screen  sm:mx-auto">
      <div
        dir="rtl"
        className="p-6 sm:rounded-lg shadow-md transition-shadow duration-200 w-full max-w-sm mx-auto |backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative">
            <Image
              src={
                profilePicture || "https://via.placeholder.com/100?text=Profile"
              }
              alt={`${ownerName}'s profile`}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-400"
              width={100}
              height={100}
            />
            <span className="absolute bottom-[1rem] right-2 inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                />
                <path
                  fill="#fff"
                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                />
              </svg>
              <span className="sr-only">کاربرد تایید شده</span>
            </span>
          </div>

          {/* Real Estate Name */}
          <h2 className="text-xl font-semibold text-white mb-2">
            {realEstateName}
          </h2>

          {/* Owner Name */}
          <p className="text-gray-400 mb-3">{ownerName}</p>

          {/* Star Rating */}
          <div className="flex items-center mb-4">
            {[...Array(fullStars)].map((_, index) => (
              <FaStar
                key={`full-${index}`}
                className="w-5 h-5 text-yellow-400"
              />
            ))}
            {hasHalfStar && (
              <FaStarHalfAlt className="w-5 h-5 text-yellow-400" />
            )}
            {[...Array(emptyStars)].map((_, index) => (
              <FaStar
                key={`empty-${index}`}
                className="w-5 h-5 text-gray-300"
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({rating.toFixed(1)})
            </span>
          </div>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
            <FaPhone className="w-4 h-4 ml-2" />
            تماس
          </a>
          <button
            onClick={() => setChat(true)}
            className="flex cursor-pointer items-center justify-center w-full py-2 px-4 border-2 border-blue-500 text-blue-500 mt-3 hover:text-white rounded-md hover:bg-blue-500 transition-colors duration-200">
            <IoChatbubbleEllipsesOutline className="w-4 h-4 ml-2" />
            ارسال پیام
          </button>
        </div>
      </div>
      <span className="flex flex-row items-center gap-2 cursor-pointer font-light">
        گزارش تخلف <MdOutlineReportGmailerrorred />
      </span>
    </div>
  );
}
