"use client";
/* eslint-disable */
import React, { FormEvent, useEffect } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/UI/consultation/map"), {
  ssr: false,
});
import SubmitButton from "./SubmitButton";
import { addCommasToNumber } from "@/utils/digits";

type Form = {
  type: number;
  vals: any[];
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export default function Form({ type, vals }: Form) {
  const [
    name,
    setName,
    price,
    setPrice,
    length,
    setLength,
    requestType,
    setRequestType,
    rooms,
    setRooms,
    vitals,
    setVitals,
    handleVitalsArr,
    clientPrefer,
    setClientPrefer,
    floorPrefer,
    setFloorPrefer,
    deadline,
    setDeadline,
    visitMethod,
    setVisitMethod,
    description,
    setDescription,
    rent,
    setRent,
    mortgage,
    setMortgage,
    mapSelection,
    setMapSelection,
    typeOfFunctionality,
    setTypeOfFunctionality,
    setEnvTypePrefer,
    landLocation,
    setLandLocation,
    landFunctionality,
    setLandFunctionality,
    sendReq,
    phone,
    setPhone,
  ] = vals;

  // set buy value by default on land section
  useEffect(() => {
    if (type === 4) setRequestType("خرید");
  }, [type]);

  return (
    <div className="max-w-3xl mx-auto py-6">
      <form className="space-y-6" dir="rtl" onSubmit={(e) => handleSubmit(e)}>
        {/* Full Name and Phone Number Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              نام کامل <span className="text-red-400">*</span>
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors  text-gray-100 placeholder-gray-400"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              شماره تماس <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors text-gray-100 placeholder-gray-400"
                type="text"
                name="phone"
                id="phone"
                dir="ltr"
                maxLength={11}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="شماره تماس"
              />
              {/* <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                +98
              </span> */}
            </div>
          </div>
        </div>

        {/* Type of Request and Length Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              نوع درخواست
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="requestType"
                  value="خرید"
                  checked={requestType === "خرید" || type === 4}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                />
                <span className="text-gray-300">خرید</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="requestType"
                  value="اجاره"
                  onChange={(e) => setRequestType(e.target.value)}
                  checked={requestType === "اجاره"}
                  disabled={type === 4}
                  className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                />
                <span className="text-gray-300">اجاره</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              متراژ مورد نظر (متر)
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors  text-gray-100 placeholder-gray-400"
              type="text"
              name="length"
              id="length"
              onChange={(e) => setLength(addCommasToNumber(e.target.value))}
              value={length}
              placeholder="مثلا: ۱۵۰ متر"
            />
          </div>
        </div>

        {/* Budget Section */}
        {requestType === "اجاره" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                اجاره (تومان)
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors text-gray-100 placeholder-gray-400"
                type="text"
                name="rent"
                id="rent"
                onChange={(e) => setRent(addCommasToNumber(e.target.value))}
                value={rent}
                placeholder="مثلا: ۸۰۰ میلیون"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                رهن (تومان)
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors  text-gray-100 placeholder-gray-400"
                type="text"
                name="mortgage"
                id="mortgage"
                onChange={(e) => setMortgage(addCommasToNumber(e.target.value))}
                value={mortgage}
                placeholder="مثلا: ۸۰۰ میلیون"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              بودجه مورد نظر (تومان)
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors text-gray-100 placeholder-gray-400"
              type="text"
              name="budget"
              id="budget"
              onChange={(e) => setPrice(addCommasToNumber(e.target.value))}
              value={price}
              placeholder="مثلا: ۸۰۰ میلیون"
            />
          </div>
        )}

        {/* Number of Rooms and Environment Type Preference Section */}
        {(type === 1 || type === 2 || type === 3) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                تعداد اتاق
              </label>
              <div className="flex flex-wrap gap-4">
                {["1", "2", "3", "4+"].map((num) => (
                  <label
                    key={num}
                    className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rooms"
                      value={num}
                      checked={rooms === num}
                      onChange={(e) => setRooms(e.target.value)}
                      className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                    />
                    <span className="text-gray-300">
                      {num === "4+" ? "۴ به بالا" : num}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {(type === 2 || type === 3) && (
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  نوع فضای کاری
                </label>
                <select
                  name="env"
                  id="env"
                  onChange={(e) => setEnvTypePrefer(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors  text-gray-100">
                  <option value="اصلی" className=" text-gray-100">
                    خیابان اصلی
                  </option>
                  <option value="فرعی" className=" text-gray-100">
                    خیابان فرعی
                  </option>
                  <option
                    value="پاساژ و مجتمع تجاری"
                    className=" text-gray-100">
                    پاساژ و مجتمع تجاری
                  </option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* Type of Functionality Section */}
        {type === 2 && (
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              نوع کاربری
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors text-gray-100 placeholder-gray-400"
              type="text"
              name="typeOfFunctionality"
              id="typeOfFunctionality"
              value={typeOfFunctionality}
              onChange={(e) => setTypeOfFunctionality(e.target.value)}
              placeholder="رستوران، فروشگاه، بیمه ..."
            />
          </div>
        )}

        {/* Land Functionality and Land Location Section */}
        {type === 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                کاربری زمین
              </label>
              <div className="flex flex-wrap gap-4">
                {["بایر", "باغ و کشاورزی", "سایر"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="landFunctionality"
                      value={option}
                      checked={landFunctionality === option}
                      onChange={(e) => setLandFunctionality(e.target.value)}
                      className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                موقعیت مکانی زمین
              </label>
              <div className="flex flex-wrap gap-4">
                {["داخل شهر", "بیرون شهر"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="landLocation"
                      value={option}
                      checked={landLocation === option}
                      onChange={(e) => setLandLocation(e.target.value)}
                      className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vital Requirements Section */}
        {(type === 1 || type === 2 || type === 3) && (
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              امکانات ضروری
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "پارکینگ",
                "آسانسور",
                "انباری",
                "حیاط / بالکن",
                "اتاق مستر",
                "روف گاردن",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={item}
                    checked={vitals.includes(item)}
                    onChange={() => handleVitalsArr(item, vitals, setVitals)}
                    className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500 rounded"
                  />
                  <span className="text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Client Preference and Floor Preference Section */}
        {(type === 1 || type === 2 || type === 3) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {type === 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  نوع ملک
                </label>
                <div className="flex flex-wrap gap-4">
                  {["ویلایی", "آپارتمان", "مجتمع مسکونی"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="propertyType"
                        value={option}
                        checked={clientPrefer === option}
                        onChange={(e) => setClientPrefer(e.target.value)}
                        className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                      />
                      <span className="text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {(type === 1 || type === 2 || type === 3) && (
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  طبقه مورد نظر
                </label>
                <div className="flex flex-wrap gap-4">
                  {["پایین", "بالا"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="floor"
                        value={option}
                        checked={floorPrefer === option}
                        onChange={(e) => setFloorPrefer(e.target.value)}
                        className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                      />
                      <span className="text-gray-300">
                        {option === "پایین" ? "طبقه پایینی" : "طبقه بالایی"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Deadline Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            فرصت مورد نیاز
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["فوری", "دو هفته", "یک ماه", "بلند مدت"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="deadline"
                  value={option}
                  checked={deadline === option}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                />
                <span className="text-gray-300">
                  {option === "بلند مدت" ? "بلند مدت / سرمایه گذاری" : option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            محله مورد نظر
          </label>
          <Map mapSelection={mapSelection} setMapSelection={setMapSelection} />
        </div>

        {/* Visit Method Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            طریقه آشنایی با هومینکس
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["اینستاگرام", "تلگرام", "دوستان", "سایر"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="visitMethod"
                  value={option}
                  checked={visitMethod === option}
                  onChange={(e) => setVisitMethod(e.target.value)}
                  className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-500"
                />
                <span className="text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Explanation Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            توضیحات تکمیلی
          </label>
          <textarea
            name="explanation"
            id="explanation"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-colors  text-gray-100 placeholder-gray-400 h-24"
            placeholder="توضیحات خود را وارد کنید"
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          title={`ثبت درخواست مشاوره ${
            ["مسکونی", "تجاری", "اداری", "زمین"][type - 1]
          }`}
          handleFunc={sendReq}
        />
      </form>
    </div>
  );
}
