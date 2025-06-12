"use client";
import React from "react";
import DropdownContainer from "@/components/UI/DropdownContainer";
import FormOne from "@/components/UI/consultation/FormOne";
import { useState } from "react";
import Button from "@/components/UI/Button";

const page = () => {
  return (
    <div className="mt-5 mb-5">
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
      <div className="mt-10 flex flex-col gap-2 relative ">
        <div className="flex flex-row w-full gap-2 justify-stretch">
          <Button title="مشاوره واحد های مسکونی" />
          <Button title="مشاوره واحد تجاری" />
          <Button title="مشاوره واحد اداری" />
          <Button title="مشاوره زمین" />
        </div>
        <div className="mainBox bg-[var(--box)]/40 backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl w-full h-auto mt-2 bottom-[-16rem] overflow-hidden p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          doloremque nesciunt illum atque dolorum fugit, aliquid voluptatum
          laudantium quas dolor dolore similique quis! Quibusdam voluptatibus
          maxime facere illum repellendus sed quas est neque maiores, quae
          reprehenderit ab libero, voluptas aliquam voluptatem, culpa facilis
          aspernatur natus dolorum. Odit dolore commodi nesciunt iste
          praesentium officia assumenda quisquam ab fugit? Quibusdam praesentium
          animi magnam sint eos dicta illo laborum? Impedit maiores expedita hic
          sit accusamus commodi vitae explicabo, quam, consectetur, quod natus
          tempore eveniet consequatur pariatur molestias quasi illum autem
          dolorum ratione possimus nulla soluta! Iste excepturi voluptate
          itaque, autem rem eum. Id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur, quaerat! Qui ad dolorum inventore culpa
          vero neque iusto officiis fugit pariatur ex minus ipsum eligendi
          eveniet temporibus suscipit ea, quam praesentium aliquam fugiat quidem
          quo sed molestiae? Ad itaque, molestiae autem placeat, commodi illo
          aliquam qui quaerat eius expedita quas! Obcaecati consequatur
          excepturi quibusdam inventore ex sapiente accusamus earum debitis
          minus nisi nobis temporibus, tempore quasi cum, minima quaerat enim!
          Fugit rerum libero quibusdam sapiente neque magni temporibus ab
          adipisci recusandae non quae illo modi itaque quas earum sint tempora
          cum aspernatur, a doloremque! Beatae dolore dolorum explicabo iusto
          quibusdam quo voluptates distinctio ut corrupti placeat provident
          illo, iste pariatur, consectetur at doloremque laboriosam odit
          consequuntur, officiis exercitationem voluptatum. Enim dolores harum,
          perferendis dicta animi reprehenderit ab eligendi ex voluptas quod
          sequi at saepe temporibus et expedita, sed sint labore accusantium
          vero soluta. Illum itaque vel libero labore illo enim facere ratione
          ipsa inventore doloribus, totam aperiam asperiores esse magnam vero
          maiores omnis. Quisquam ducimus consequuntur natus nulla eaque iure
          assumenda possimus, excepturi aliquid nisi mollitia. Alias mollitia
          perspiciatis magni nam, architecto sed quas, sapiente quam nihil
          accusantium dolores facere incidunt. Maiores reiciendis libero
          mollitia porro possimus minus ipsam incidunt?
        </div>
      </div>
    </div>
  );
};

export default page;
