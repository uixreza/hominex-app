"use client";
import React from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/UI/consultation/map"), {
  ssr: false,
});
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
              onChange={(e) => setRequestType(e.target.value)}
              checked={requestType === "rent"}
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
      {requestType === "rent" ? (
        <div className="w-full  gap-3">
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>اجاره ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="rent"
              id="rent"
              onChange={(e) => setRent(addCommasToNumber(e.target.value))}
              value={rent}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>رهن ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="mortgage"
              id="mortgage"
              onChange={(e) => setMortgage(addCommasToNumber(e.target.value))}
              value={mortgage}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
        </div>
      ) : (
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
      )}

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
              checked={vitals.includes("parking")}
              onChange={() => handleVitalsArr("parking", vitals, setVitals)}
              id="parking"
            />
            پارکینگ
          </label>
          <label htmlFor="elevator">
            <input
              className="ml-2"
              type="checkbox"
              name="elevator"
              checked={vitals.includes("elevator")}
              onChange={() => handleVitalsArr("elevator", vitals, setVitals)}
              id="elevator"
            />
            آسانسور
          </label>
          <label htmlFor="warehouse">
            <input
              className="ml-2"
              type="checkbox"
              name="warehouse"
              checked={vitals.includes("warehouse")}
              onChange={() => handleVitalsArr("warehouse", vitals, setVitals)}
              id="warehouse"
            />
            انباری
          </label>
          <label htmlFor="yard">
            <input
              className="ml-2"
              type="checkbox"
              name="yard"
              checked={vitals.includes("yard")}
              onChange={() => handleVitalsArr("yard", vitals, setVitals)}
              id="yard"
            />
            حیاط / بالکن
          </label>
          <label htmlFor="master">
            <input
              className="ml-2"
              type="checkbox"
              name="master"
              checked={vitals.includes("master")}
              onChange={() => handleVitalsArr("master", vitals, setVitals)}
              id="master"
            />
            اتاق مستر
          </label>
          <label htmlFor="garden">
            <input
              className="ml-2"
              type="checkbox"
              name="yard"
              checked={vitals.includes("garden")}
              onChange={() => handleVitalsArr("garden", vitals, setVitals)}
              id="garden"
            />
            روف گاردن
          </label>
        </div>
      </div>

      {/* clients prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه ملکی را ترجیح میدهید</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="villa"
              checked={clientPrefer === "villa"}
              onChange={(e) => setClientPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>ویلایی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="apartment"
              checked={clientPrefer === "apartment"}
              onChange={(e) => setClientPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>آپارتمان</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="complex"
              checked={clientPrefer === "complex"}
              onChange={(e) => setClientPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>مجتمع مسکونی</span>
          </label>
        </div>
      </div>

      {/* floor prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه طبقه ای را برای سکونت ترجیح می دهید</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="down"
              checked={floorPrefer === "down"}
              onChange={(e) => setFloorPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>طبقه پایینی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="up"
              checked={floorPrefer === "up"}
              onChange={(e) => setFloorPrefer(e.target.value)}
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
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="asap"
              checked={deadline === "asap"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>فوری</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="twoWeeks"
              checked={deadline === "twoWeeks"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>دو هفته</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="oneMonth"
              checked={deadline === "oneMonth"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>یک ماه</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="longTerm"
              checked={deadline === "longTerm"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>بلند مدت / سرمایه گذاری</span>
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>
          {/* map will render from map.tsx component */}
          <Map mapSelection={mapSelection} setMapSelection={setMapSelection} />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="radio"
              name="instagram"
              value="instagram"
              checked={visitMethod === "instagram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="radio"
              name="telegram"
              value="telegram"
              checked={visitMethod === "telegram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="radio"
              name="friends"
              value="friends"
              checked={visitMethod === "friends"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input
              className="ml-2"
              type="radio"
              name="other"
              value="other"
              checked={visitMethod === "other"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="other"
            />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد مسکونی" />
    </>
  );
}

export function Commercial({ vals }: IForm) {
  const [
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
    envTypePrefer,
    setEnvTypePrefer,
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
      {requestType === "rent" ? (
        <div className="w-full  gap-3">
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>اجاره ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="rent"
              id="rent"
              onChange={(e) => setRent(addCommasToNumber(e.target.value))}
              value={rent}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>رهن ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="mortgage"
              id="mortgage"
              onChange={(e) => setMortgage(addCommasToNumber(e.target.value))}
              value={mortgage}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
        </div>
      ) : (
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
      )}
      {/* Type of functionality section */}
      <div className="flex flex-col gap-2 mt-4">
        <span>نوع کاربری : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="typeOfFunctionality"
          id="typeOfFunctionality"
          value={typeOfFunctionality}
          onChange={(e) => setTypeOfFunctionality(e.target.value)}
          placeholder="رستوران ، فروشگاه ، رستوران ، بیمه ..."
        />
      </div>

      {/* env type prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه نوع فضای کاری را ترجیح میدهید:</span>
        <div className="flex flex-row gap-5">
          <select
            name="env"
            id="env"
            onChange={(e) => setEnvTypePrefer(e.target.value)}
            className="bg-[var(--box)]/40  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 w-[40%] px-4 py-3 rounded-xl cursor-pointer border border-white/30 transition-all duration-200 hover:shadow-2xl ">
            <option className="text-black font-bold" value="main">
              خیابان اصلی
            </option>
            <option className="text-black font-bold" value="peripheral">
              خیابان فرعی
            </option>
            <option className="text-black font-bold" value="passage">
              پاساژ و مجتمع تجاری
            </option>
          </select>
        </div>
      </div>
      {/* floor prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه طبقه ای را برای سکونت ترجیح می دهید</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="down"
              checked={floorPrefer === "down"}
              onChange={(e) => setFloorPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>طبقه پایینی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="up"
              checked={floorPrefer === "up"}
              onChange={(e) => setFloorPrefer(e.target.value)}
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
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="asap"
              checked={deadline === "asap"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>فوری</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="twoWeeks"
              checked={deadline === "twoWeeks"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>دو هفته</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="oneMonth"
              checked={deadline === "oneMonth"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>یک ماه</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="longTerm"
              checked={deadline === "longTerm"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>بلند مدت / سرمایه گذاری</span>
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>

          <Map mapSelection={mapSelection} setMapSelection={setMapSelection} />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="radio"
              name="instagram"
              value="instagram"
              checked={visitMethod === "instagram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="radio"
              name="telegram"
              value="telegram"
              checked={visitMethod === "telegram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="radio"
              name="friends"
              value="friends"
              checked={visitMethod === "friends"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input
              className="ml-2"
              type="radio"
              name="other"
              value="other"
              checked={visitMethod === "other"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="other"
            />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد تجاری" />
    </>
  );
}
export function Office({ vals }: IForm) {
  const [
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
      {requestType === "rent" ? (
        <div className="w-full  gap-3">
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>اجاره ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="rent"
              id="rent"
              onChange={(e) => setRent(addCommasToNumber(e.target.value))}
              value={rent}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>رهن ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="mortgage"
              id="mortgage"
              onChange={(e) => setMortgage(addCommasToNumber(e.target.value))}
              value={mortgage}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
        </div>
      ) : (
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
      )}
      {/* Type of functionality section */}
      <div className="flex flex-col gap-2 mt-4">
        <span>نوع کاربری : </span>
        <input
          className="border-b-2 pb-2 px-1 outline-none w-1/3 sm:w-1/2"
          type="text"
          name="typeOfFunctionality"
          id="typeOfFunctionality"
          value={typeOfFunctionality}
          onChange={(e) => setTypeOfFunctionality(e.target.value)}
          placeholder="رستوران ، فروشگاه ، رستوران ، بیمه ..."
        />
      </div>

      {/* floor prefer */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>چه طبقه ای را برای سکونت ترجیح می دهید</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="down"
              checked={floorPrefer === "down"}
              onChange={(e) => setFloorPrefer(e.target.value)}
              className="accent-green-600"
            />
            <span>طبقه پایینی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="floor"
              value="up"
              checked={floorPrefer === "up"}
              onChange={(e) => setFloorPrefer(e.target.value)}
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
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="asap"
              checked={deadline === "asap"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>فوری</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="twoWeeks"
              checked={deadline === "twoWeeks"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>دو هفته</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="oneMonth"
              checked={deadline === "oneMonth"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>یک ماه</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="longTerm"
              checked={deadline === "longTerm"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>بلند مدت / سرمایه گذاری</span>
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>

          <Map mapSelection={mapSelection} setMapSelection={setMapSelection} />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="radio"
              name="instagram"
              value="instagram"
              checked={visitMethod === "instagram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="radio"
              name="telegram"
              value="telegram"
              checked={visitMethod === "telegram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="radio"
              name="friends"
              value="friends"
              checked={visitMethod === "friends"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input
              className="ml-2"
              type="radio"
              name="other"
              value="other"
              checked={visitMethod === "other"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="other"
            />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد تجاری" />
    </>
  );
}
export function Land({ vals }: IForm) {
  const [
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
    envTypePrefer,
    setEnvTypePrefer,
    landLocation,
    setLandLocation,
    landFunctionality,
    setLandFunctionality,
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
      {requestType === "rent" ? (
        <div className="w-full  gap-3">
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>اجاره ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="rent"
              id="rent"
              onChange={(e) => setRent(addCommasToNumber(e.target.value))}
              value={rent}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
          <div className="flex w-full flex-col gap-2 mt-4">
            <span>رهن ( تومان ) : </span>
            <input
              className="border-b-2 pb-2 px-1 outline-none sm:w-1/2"
              type="text"
              name="mortgage"
              id="mortgage"
              onChange={(e) => setMortgage(addCommasToNumber(e.target.value))}
              value={mortgage}
              placeholder="مثلا : 800 میلیون"
            />
          </div>
        </div>
      ) : (
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
      )}
      {/* land functionality section */}
      <div className="flex flex-col gap-2 mt-4">
        <span>کاربری زمین : </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Land"
              value="Bayer"
              checked={landFunctionality === "Bayer"}
              onChange={(e) => setLandFunctionality(e.target.value)}
              className="accent-green-600"
            />
            <span>بایر</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Land"
              value="Garden&Farm"
              checked={landFunctionality === "Garden&Farm"}
              onChange={(e) => setLandFunctionality(e.target.value)}
              className="accent-green-600"
            />
            <span>باغ و کشاورزی</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Land"
              value="other"
              checked={landFunctionality === "other"}
              onChange={(e) => setLandFunctionality(e.target.value)}
              className="accent-green-600"
            />
            <span>سایر</span>
          </label>
        </div>
      </div>

      {/* land location */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>موقعیت مکانی زمین : </span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="landLocation"
              value="outOfTown"
              checked={landLocation === "outOfTown"}
              onChange={(e) => setLandLocation(e.target.value)}
              className="accent-green-600"
            />
            <span>داخل شهر</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="landLocation"
              value="inTown"
              checked={landLocation === "inTown"}
              onChange={(e) => setLandLocation(e.target.value)}
              className="accent-green-600"
            />
            <span>بیرون شهر</span>
          </label>
        </div>
      </div>

      {/* deadline */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>فرصت مورد نیاز شما برای پیداکردن فایل و قرار داد نهایی!؟</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="asap"
              checked={deadline === "asap"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>فوری</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="twoWeeks"
              checked={deadline === "twoWeeks"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>دو هفته</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="oneMonth"
              checked={deadline === "oneMonth"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>یک ماه</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deadline"
              value="longTerm"
              checked={deadline === "longTerm"}
              onChange={(e) => setDeadline(e.target.value)}
              className="accent-green-600"
            />
            <span>بلند مدت / سرمایه گذاری</span>
          </label>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="relative flex flex-col gap-2 mt-4">
          <span>محله مورد نظر : </span>

          <Map mapSelection={mapSelection} setMapSelection={setMapSelection} />
        </div>
      </div>

      {/* how section */}
      <div className="relative flex flex-col gap-2 mt-4">
        <span>طریقه آشنایی با هومینکس : </span>
        <div className="flex flex-row gap-5">
          <label htmlFor="instagram">
            <input
              className="ml-2"
              type="radio"
              name="instagram"
              value="instagram"
              checked={visitMethod === "instagram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="instagram"
            />
            اینستاگرام
          </label>
          <label htmlFor="telegram">
            <input
              className="ml-2"
              type="radio"
              name="telegram"
              value="telegram"
              checked={visitMethod === "telegram"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="telegram"
            />
            تلگرام
          </label>
          <label htmlFor="friends">
            <input
              className="ml-2"
              type="radio"
              name="friends"
              value="friends"
              checked={visitMethod === "friends"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="friends"
            />
            معرفی دوستان
          </label>
          <label htmlFor="other">
            <input
              className="ml-2"
              type="radio"
              name="other"
              value="other"
              checked={visitMethod === "other"}
              onChange={(e) => setVisitMethod(e.target.value)}
              id="other"
            />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none outline-none border-white border-b-2 text-white/60 pb-0"></textarea>
      </div>

      {/* submit button */}
      <SubmitButton title="ثبت درخواست مشاوره واحد تجاری" />
    </>
  );
}
