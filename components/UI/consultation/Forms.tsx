"use client";
import React from "react";
import Map from "../consultation/map";
import SubmitButton from "./SubmitButton";
import { addCommasToNumber } from "@/utils/digits";

interface IForm {
  vals: any[];
}

export function Residential({ vals }: IForm) {
  const [
    price,
    setPrice,
    length,
    setLength,
    requestType,
    setRequestType,
    rooms,
    setRooms,
  ] = vals;
  return (
    <>
      {/* type of request section */}
      <div className="flex flex-col gap-2 mt-4">
        <span className="mb-2">نوع درخواست : </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="requestType"
              value="buy"
              checked={requestType === "buy"}
              onChange={(e) => setRequestType(e.target.value)}
              className="accent-green-600"
            />
            <span>خرید</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="requestType"
              value="rent"
              checked={requestType === "rent"}
              onChange={(e) => setRequestType(e.target.value)}
              className="accent-blue-600"
            />
            <span>اجاره</span>
          </label>
        </div>
      </div>

      {/* number of rooms section */}
      <div className="flex flex-col gap-2 mt-4">
        <span className="mb-2">تعداد اتاق خواب :</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="1"
              checked={rooms === "1"}
              onChange={(e) => setRooms(e.target.value)}
              className="accent-green-600"
            />
            <span>1</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="2"
              checked={rooms === "2"}
              onChange={(e) => setRooms(e.target.value)}
              className="accent-green-600"
            />
            <span>2</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="3"
              checked={rooms === "3"}
              onChange={(e) => setRooms(e.target.value)}
              className="accent-green-600"
            />
            <span>3</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="4+"
              checked={rooms === "4+"}
              onChange={(e) => setRooms(e.target.value)}
              className="accent-green-600"
            />
            <span>4 یا بیشتر</span>
          </label>
        </div>
      </div>

      {/* lendth seciton */}
      <div className="flex flex-col gap-2 mt-4">
        <span>متراژ مورد نظر ( متر ) : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="length"
          id="length"
          onChange={(e) => setLength(addCommasToNumber(e.target.value))}
          value={length}
          placeholder="مثلا : 150 متر"
        />
      </div>

      {/* budget seciton */}
      <div className="flex flex-col gap-2 mt-4">
        <span>بودجه مورد نظر ( تومان ) : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="budget"
          id="budget"
          onChange={(e) => setPrice(addCommasToNumber(e.target.value))}
          value={price}
          placeholder="مثلا : 800 میلیون"
        />
      </div>

      {/* phone number seciton
      <div className="relative flex flex-col gap-2 mt-4">
        <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
          *
        </span>
        <span>شماره تماس : </span>
        <div className="relative">
          <input
            className="border-b-2 pb-2 px-10 outline-none w-1/3 sm:w-1/2"
            type="text"
            name="budget"
            id="budget"
            dir="ltr"
            maxLength={10}
            placeholder="شماره تماس"
          />
          <span className="opacity-60 absolute right-[46%] select-none">
            | 98+
          </span>
        </div>
      </div> */}
      {/* vital requirements */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>امکانات ضوروی : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="parking">
            <input
              className="ml-2"
              type="checkbox"
              name="parking"
              id="parking"
            />
            پارکینگ
          </label>
          <label htmlFor="elevator">
            <input
              className="ml-2"
              type="checkbox"
              name="elevator"
              id="elevator"
            />
            آسانسور
          </label>
          <label htmlFor="warehouse">
            <input
              className="ml-2"
              type="checkbox"
              name="warehouse"
              id="warehouse"
            />
            انباری
          </label>
          <label htmlFor="yard">
            <input className="ml-2" type="checkbox" name="yard" id="yard" />
            حیاط / بالکن
          </label>
        </div>
      </div>

      {/* clients prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه ملکی را ترجیح میدهید</span>
        <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
          *
        </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="villa"
              className="accent-green-600"
            />
            <span>ویلایی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="apartment"
              className="accent-green-600"
            />
            <span>آپارتمان</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="complex"
              className="accent-green-600"
            />
            <span>مجتمع مسکونی</span>
          </label>
        </div>
      </div>

      {/* floor prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه طبقه ای را برای سکونت ترجیح می دهید</span>
        <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
          *
        </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="floor"
              className="accent-green-600"
            />
            <span>طبقه پایینی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="floor"
              className="accent-green-600"
            />
            <span>طبقه بالایی</span>
          </label>
        </div>
      </div>

      {/* deadline */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>فرصت مورد نیاز شما برای پیداکردن فایل و قرار داد نهایی!؟</span>
        <div className="flex flex-row gap-5">
          <label htmlFor="emergency">
            <input
              className="ml-2"
              type="checkbox"
              name="emergency"
              id="emergency"
            />
            فوری
          </label>
          <label htmlFor="twoWeeks">
            <input
              className="ml-2"
              type="checkbox"
              name="twoWeeks"
              id="twoWeeks"
            />
            دو هفته
          </label>
          <label htmlFor="oneMonth">
            <input
              className="ml-2"
              type="checkbox"
              name="oneMonth"
              id="oneMonth"
            />
            یک ماه
          </label>
          <label htmlFor="longTerm">
            <input
              className="ml-2"
              type="checkbox"
              name="longTerm"
              id="longTerm"
            />
            بلند مدت و سرمایه گذاری
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>
          <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
            *
          </span>
          <Map />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="checkbox"
              name="instagram"
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="checkbox"
              name="telegram"
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="checkbox"
              name="friends"
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input className="ml-2" type="checkbox" name="other" id="other" />
            سایر
          </label>
        </div>
      </div>

      {/* explanation section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>توضیحات تکمیلی : </span>
        <textarea
          name="explanation"
          id="explanation"
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد مسکونی" />
    </>
  );
}

export function Commercial() {
  return (
    <>
      {/* type of request section */}
      <div className="flex flex-col gap-2 mt-4">
        <span className="mb-2">نوع درخواست : </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="requestType"
              value="buy"
              className="accent-green-600"
            />
            <span>خرید</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="requestType"
              value="rent"
              className="accent-blue-600"
            />
            <span>اجاره</span>
          </label>
        </div>
      </div>

      {/* lendth seciton */}
      <div className="flex flex-col gap-2 mt-4">
        <span>متراژ مورد نظر ( متر ) : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="length"
          id="length"
          placeholder="مثلا : 150 متر"
        />
      </div>

      {/* budget seciton */}
      <div className="flex flex-col gap-2 mt-4">
        <span>بودجه مورد نظر ( تومان ) : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="budget"
          id="budget"
          placeholder="مثلا : 800 میلیون"
        />
      </div>
      {/* Type of functionality seciton */}
      <div className="flex flex-col gap-2 mt-4">
        <span>نوع کاربری : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="typeOfFunctionality"
          id="typeOfFunctionality"
          placeholder="رستوران ، فروشگاه ، رستوران ، بیمه ..."
        />
      </div>

      {/* floor prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه طبقه ای را برای سکونت ترجیح می دهید</span>
        <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
          *
        </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="floor"
              className="accent-green-600"
            />
            <span>طبقه پایینی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="floor"
              className="accent-green-600"
            />
            <span>طبقه بالایی</span>
          </label>
        </div>
      </div>

      {/* deadline */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>فرصت مورد نیاز شما برای پیداکردن فایل و قرار داد نهایی!؟</span>
        <div className="flex flex-row gap-5">
          <label htmlFor="emergency">
            <input
              className="ml-2"
              type="checkbox"
              name="emergency"
              id="emergency"
            />
            فوری
          </label>
          <label htmlFor="twoWeeks">
            <input
              className="ml-2"
              type="checkbox"
              name="twoWeeks"
              id="twoWeeks"
            />
            دو هفته
          </label>
          <label htmlFor="oneMonth">
            <input
              className="ml-2"
              type="checkbox"
              name="oneMonth"
              id="oneMonth"
            />
            یک ماه
          </label>
          <label htmlFor="longTerm">
            <input
              className="ml-2"
              type="checkbox"
              name="longTerm"
              id="longTerm"
            />
            بلند مدت و سرمایه گذاری
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>
          <span className="absolute right-[-17px] top-[2px] text-red-400 text-2xl">
            *
          </span>
          <Map />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="checkbox"
              name="instagram"
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="checkbox"
              name="telegram"
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="checkbox"
              name="friends"
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input className="ml-2" type="checkbox" name="other" id="other" />
            سایر
          </label>
        </div>
      </div>

      {/* explanation section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>توضیحات تکمیلی : </span>
        <textarea
          name="explanation"
          id="explanation"
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد تجاری" />
    </>
  );
}
export function Office() {
  return (
    <>
      <p>Form3</p>
    </>
  );
}
export function Land() {
  return (
    <>
      <p>Form4</p>
    </>
  );
}
