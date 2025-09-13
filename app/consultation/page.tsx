"use client";
/* eslint-disable */
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-toastify";
import { url_v1 } from "@/config/urls";

const loadText = <div>بارگذاری ...</div>;
const Form = dynamic(() => import("@/components/UI/consultation/Form"), {
  loading: () => loadText,
});
const Button = dynamic(() => import("@/components/UI/consultation/Button"), {
  loading: () => loadText,
});
const SplitText = dynamic(
  () => import("../../blocks/TextAnimations/SplitText/SplitText"),
  { loading: () => loadText }
);
const SpringModal = dynamic(() => import("@/components/UI/SpringModal"), {
  loading: () => loadText,
});
const Waitscreen = dynamic(
  () => import("@/components/UI/consultation/Waitscreen"),
  { loading: () => loadText }
);

enum forms {
  Residential = 1,
  Commercial = 2,
  Office = 3,
  Land = 4,
}

// enums from backend docs
const REQUEST_TYPES = ["ﺪﯾﺮﺧ", "هرﺎﺟا"];
const VISIT_METHODS = ["ماﺮﮕﻠﺗ  سﺎﻤﺗ", "پﺎﺴﺗاو"];

const Page = () => {
  // toast notifications
  const notify = () => toast("خطا، مجدد تلاش نمایید ❗");
  const notValidNotify = () => toast("اطلاعات فرم تکمیل نیست❗");

  // tab state
  const [selectedTab, setSelectedTab] = useState<forms | null>(null);
  const handleClick = (number: number) => setSelectedTab(number);

  // array handler
  const handleVitalsArr = (
    value: string,
    arr: string[],
    setArr: (a: string[]) => void
  ) => {
    if (arr.includes(value)) {
      setArr(arr.filter((item) => item !== value));
    } else {
      setArr([...arr, value]);
    }
  };

  // form states
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [requestType, setRequestType] = useState(""); // must be one of REQUEST_TYPES
  const [rooms, setRooms] = useState("");
  const [vitals, setVitals] = useState<string[]>([]);
  const [clientPrefer, setClientPrefer] = useState("");
  const [floorPrefer, setFloorPrefer] = useState("");
  const [deadline, setDeadline] = useState("");
  const [visitMethod, setVisitMethod] = useState(""); // must be one of VISIT_METHODS
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [mapSelection, setMapSelection] = useState<string[]>([]);
  const [typeOfFunctionality, setTypeOfFunctionality] = useState("");
  const [envTypePrefer, setEnvTypePrefer] = useState("اصلی");
  const [landLocation, setLandLocation] = useState("");
  const [landFunctionality, setLandFunctionality] = useState("");
  const [phone, setPhone] = useState("");

  const [wait, setWait] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // modal states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // send request
  const sendReq = async () => {
    setWait(true);

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      price: price.trim() || null,
      length: length.trim() || null,
      request_type: requestType.trim(), // must be from REQUEST_TYPES
      rooms: rooms ? Number(rooms) : null,
      vitals: vitals.map((v) => v.trim()),
      client_prefer: clientPrefer.trim() || null,
      floor_prefer: floorPrefer.trim() || null,
      deadline: deadline.trim() || null,
      visit_method: visitMethod.trim(), // must be from VISIT_METHODS
      description: description.trim() || null,
      rent: rent.trim() || null,
      mortgage: mortgage.trim() || null,
      map_selection: mapSelection.map((m) => m.trim()),
      type_of_functionality: typeOfFunctionality.trim() || null,
      env_type_prefer: envTypePrefer.trim() || null,
      land_location: landLocation.trim() || null,
      land_functionality: landFunctionality.trim() || null,
    };
    try {
      if (isFormValid) {
        const response = await axios.post(
          url_v1("/buy-consultant-request"),
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const re = await response.data;
        if (response.data && response.data.success) {
          handleOpen();
          setTimeout(() => handleClose(), 3000);
        } else {
          notify();
        }
      } else {
        notValidNotify();
      }
    } catch (error: any) {
      if (error.response?.status === 422) {
        const errs = error.response.data.errors;
        console.error("Validation errors:", errs);
        toast("❌ خطا در اعتبارسنجی");
      } else if (error.response?.status === 403) {
        toast("📵 ابتدا شماره تماس خود را تأیید کنید");
      } else if (error.response?.status === 429) {
        toast("🚫 بیشترین تعداد درخواست امروز ارسال شده است");
      } else {
        notify();
      }
    } finally {
      setWait(false);
    }
  };

  // props for Form component
  const propValues = [
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
    REQUEST_TYPES,
    VISIT_METHODS,
  ];

  // reset values after tab switch
  useEffect(() => {
    setPrice("");
    setLength("");
    setRequestType("");
    setRooms("");
    setVitals([]);
    setClientPrefer("");
    setFloorPrefer("");
    setDeadline("");
    setVisitMethod("");
    setRent("");
    setMortgage("");
    setMapSelection([]);
    setEnvTypePrefer("اصلی");
    setLandLocation("");
    setLandFunctionality("");
    setIsFormValid(false);
  }, [selectedTab]);

  // validation check
  useEffect(() => {
    if (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      requestType.trim() !== "" &&
      visitMethod.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, phone, requestType, visitMethod]);

  return (
    <div className="sm:mt-5 mb-5">
      <div className="context">
        <SplitText
          text="مشاوره تخصصی املاک با تحلیل هوشمند"
          className="text-2xl font-semibold text-right"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="right"
        />
        <p className="mt-2">
          خرید، فروش یا سرمایه ‌گذاری در املاک یکی از مهم‌ترین تصمیم‌های مالی هر
          فرد است. ما با استفاده از نقشه GIS شهری، تحلیل ‌های هوش مصنوعی و تیم
          مشاورین متخصص، ملک ‌های مختلف را از زوایای گوناگون بررسی می‌کنیم و
          بهترین گزینه را متناسب با نیاز شما پیشنهاد می‌دهیم.
        </p>
      </div>

      {/* Forms */}
      <div className="mt-10 flex flex-col gap-2 relative ">
        <div className="flex flex-row w-full gap-2 justify-stretch">
          <Button
            title="واحد مسکونی"
            handleFunc={handleClick}
            keyId={forms.Residential}
            isActive={selectedTab === forms.Residential && true}
          />
          <Button
            title="واحد تجاری"
            handleFunc={handleClick}
            keyId={forms.Commercial}
            isActive={selectedTab === forms.Commercial && true}
          />
          <Button
            title="واحد اداری"
            handleFunc={handleClick}
            keyId={forms.Office}
            isActive={selectedTab === forms.Office && true}
          />
          <Button
            title="زمین"
            handleFunc={handleClick}
            keyId={forms.Land}
            isActive={selectedTab === forms.Land && true}
          />
        </div>
        <div className="mainBox bg-[var(--box)]/60 backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl w-full h-auto mt-2 overflow-hidden sm:p-10 py-8 px-5">
          {selectedTab === forms.Residential && (
            <Form type={forms.Residential} vals={[...propValues]} />
          )}
          {selectedTab === forms.Commercial && (
            <Form type={forms.Commercial} vals={[...propValues]} />
          )}
          {selectedTab === forms.Office && (
            <Form type={forms.Office} vals={[...propValues]} />
          )}
          {selectedTab === forms.Land && (
            <Form type={forms.Land} vals={[...propValues]} />
          )}
          {!selectedTab && (
            <>
              <p>خانه ای که میخواهید اینجاست !</p>
              <p>
                لطفاً آیتمی را انتخاب کنید تا مناسب‌ترین ملک را برای شما پیدا
                کنیم.
              </p>
              <p className="mt-10">گزینه ای انتخاب نشده است🍃</p>
            </>
          )}
        </div>
      </div>

      {/* popup + waitscreen */}
      <SpringModal open={open} handleClose={handleClose} />
      {wait && <Waitscreen />}
    </div>
  );
};

export default Page;
