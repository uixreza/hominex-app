import React from "react";

export function Residential() {
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

      {/* number of rooms section */}
      <div className="flex flex-col gap-2 mt-4">
        <span className="mb-2">تعداد اتاق خواب :</span>
        <div className="flex flex-row gap-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="1"
              className="accent-green-600"
            />
            <span>1</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="2"
              className="accent-green-600"
            />
            <span>2</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="3"
              className="accent-green-600"
            />
            <span>3</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rooms"
              value="4plus"
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

      {/* phone number seciton */}
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
      </div>
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
      
    </>
  );
}

export function Commercial() {
  return (
    <>
      <p>Form2</p>
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
