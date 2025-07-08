"use client";
import React, { useState, useEffect } from "react";
import {
  Residential,
  Commercial,
  Office,
  Land,
} from "@/components/UI/consultation/Forms";
import Button from "@/components/UI/consultation/Button";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import SpringModal from "@/components/UI/SpringModal";
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
  const notify = () => toast("اطلاعات تکمیل نیست ❗");

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
  // eslint-disable-next-line
  // const [mapSelection, setMapSelection] = useState<any>();
  const [mapSelection, setMapSelection] = useState<string[]>([]);
  const [typeOfFunctionality, setTypeOfFunctionality] = useState("");
  const [envTypePrefer, setEnvTypePrefer] = useState("main");
  const [landLocation, setLandLocation] = useState("");
  const [landFunctionality, setLandFunctionality] = useState("");

  // popup states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // send request function
  const sendReq = async () => {
    // Format date in Persian (Jalali) calendar
    const date = new Date();
    const farsiDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
    const entry = {
      data: {
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
        phoneNumber: "0915",
      },
      date: farsiDate,
    };

    try {
      await axios.post("/api/entries", entry);
      // console.log("Saved entry:", response.data);
      handleOpen();

      // close alrt box in 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      // console.error("Error saving entry:", error);
      notify();
    }
  };

  const propValues = [
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
    sendReq,
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
    setDeadline("");
    setVisitMethod("");
    setDescription("");
    setRent("");
    setMortgage("");
    setMapSelection([]);
    setEnvTypePrefer("main");
    setLandLocation("");
    setLandFunctionality("");
  }, [selectedTab]);

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
            <Residential vals={[...propValues]} />
          )}
          {selectedTab === forms.Commercial && (
            <Commercial vals={[...propValues]} />
          )}
          {selectedTab === forms.Office && <Office vals={[...propValues]} />}
          {selectedTab === forms.Land && <Land vals={[...propValues]} />}
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
    </div>
  );
};

export default Page;
