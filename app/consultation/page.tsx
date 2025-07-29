"use client";
/* eslint-disable */
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

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
  {
    loading: () => loadText,
  }
);

import axios from "axios";
import { toast } from "react-toastify";

enum forms {
  Residential = 1,
  Commercial = 2,
  Office = 3,
  Land = 4,
}

const Page = () => {
  // toast notification for sending error
  const notify = () => toast("خطا، مجدد تلاش نمایید ❗");
  const notValidNotify = () => toast("اطلاعات فرم تکمیل نیست❗");
  // switch between tabs
  const [selectedTab, setSelectedTab] = useState<forms | null>(null);
  const handleClick = (number: number) => {
    setSelectedTab(number);
  };

  // handle array values
  const handleVitalsArr = (
    /**
     * The value to be added or removed from an array of items.
     * Used in array manipulation functions to toggle item presence.
     * @type {any} Can be of any type, typically a primitive or object to be tracked in an array.
     */
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

  // form values - Form.tsx
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [requestType, setRequestType] = useState("");
  const [rooms, setRooms] = useState("");
  const [vitals, setVitals] = useState([]);
  const [clientPrefer, setClientPrefer] = useState("");
  const [floorPrefer, setFloorPrefer] = useState("");
  const [deadline, setDeadline] = useState("");
  const [visitMethod, setVisitMethod] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [wait, setWait] = useState(false);
  const [phone, setPhone] = useState("");

  const [mapSelection, setMapSelection] = useState<string[]>([]);
  const [typeOfFunctionality, setTypeOfFunctionality] = useState("");
  const [envTypePrefer, setEnvTypePrefer] = useState("main");
  const [landLocation, setLandLocation] = useState("");
  const [landFunctionality, setLandFunctionality] = useState("");
  const [isFomValid, setIsFormValid] = useState(false);

  // popup states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // send request function
  const sendReq = async () => {
    if (isFomValid) {
      // Format date in Persian (Jalali) calendar
      const date = new Date();
      const farsiDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
      const entry = {
        data: {
          name,
          price,
          length,
          requestType,
          rooms,
          vitals,
          clientPrefer,
          floorPrefer,
          deadline,
          visitMethod,
          description,
          rent,
          mortgage,
          mapSelection,
          typeOfFunctionality,
          envTypePrefer,
          landLocation,
          landFunctionality,
        },
        credentials: {
          phone,
        },
        date: farsiDate,
        done: false,
      };

      setWait(true);
      try {
        await axios.post("https://validitycheck.sub4u.site/", entry, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false, // optional: true if you use cookies
        });

        handleOpen();

        setTimeout(() => {
          handleClose();
        }, 3000);
      } catch (error) {
        notify();
      } finally {
        setWait(false);
      }
    } else {
      notValidNotify();
    }
    // form is not valid
  };

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
  ];

  // reset values after switching the form
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

  useEffect(() => {
    // checkvalidity
    if (
      requestType !== "" &&
      length !== "" &&
      deadline !== "" &&
      visitMethod !== "" &&
      mapSelection.length >= 1 &&
      phone !== "" &&
      name !== ""
    )
      setIsFormValid(true);
    else return;
  }, [requestType, length, deadline, visitMethod, mapSelection, phone]);
  const handleAnimationComplete = () => {
    // animation complete
  };

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
          onLetterAnimationComplete={handleAnimationComplete}
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
        <div className="mainBox bg-[var(--box)]/60 backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl w-full h-auto mt-2 bottom-[-16rem] overflow-hidden sm:p-10 py-8 px-5">
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
              <p className="mt-10"> گزینه ای انتخاب نشده است🍃</p>
            </>
          )}
        </div>
      </div>
      {/* popup */}
      <SpringModal open={open} handleClose={handleClose} />
      {wait && <Waitscreen />}
    </div>
  );
};

export default Page;
