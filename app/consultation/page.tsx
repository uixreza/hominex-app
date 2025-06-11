"use client";
import React from "react";
import DropdownContainer from "@/components/UI/DropdownContainer";
import FormOne from "@/components/UI/consultation/FormOne";
import { useState } from "react";
const page = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="my-5">
      <div className="context">
        <h2 className="font-bold text-2xl mb-5">
          ثبت رایگان مشاوره تخصصی املاک با تحلیل هوشمند
        </h2>
        <p>
          خرید، فروش یا سرمایه ‌گذاری در املاک یکی از مهم‌ترین تصمیم‌های مالی هر
          فرد است. ما با استفاده از نقشه GIS شهری، تحلیل ‌های هوش مصنوعی و تیم
          مشاورین متخصص، ملک ‌های مختلف را از زوایای گوناگون بررسی می‌کنیم و
          بهترین گزینه را متناسب با نیاز شما پیشنهاد می‌دهیم.
        </p>
      </div>

      {/* Forms */}
      <div className="mt-10 flex flex-col gap-2">
        <DropdownContainer
          title="مشاوره واحد مسکونی"
          handleChange={handleChange}
          panel="panel1"
          expanded={expanded}>
          <FormOne />
        </DropdownContainer>
        <DropdownContainer
          title="مشاوره واحد تجاری"
          handleChange={handleChange}
          panel="panel2"
          expanded={expanded}>
          <FormOne />
        </DropdownContainer>
        <DropdownContainer
          title="مشاوره واحد اداری"
          panel="panel3"
          handleChange={handleChange}
          expanded={expanded}>
          <FormOne />
        </DropdownContainer>
        <DropdownContainer
          title="مشاوره زمین"
          handleChange={handleChange}
          panel="panel4"
          expanded={expanded}>
          <FormOne />
        </DropdownContainer>
      </div>
    </div>
  );
};

export default page;
