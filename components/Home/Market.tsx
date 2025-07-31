import Image from "next/image";
import Pic from "../../public/assets/img/isometric.webp";
import Button from "../UI/Button";

export default function Market() {
  return (
    <div className="flex  flex-col lg:flex-row-reverse lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 mt-[-2rem]">
      <div className="flex flex-col gap-3">
        <span className="font-extrabold text-4xl mb-5">
          بازار <span className="text-[var(--blue)]">املاک</span>
        </span>
        <span className="leading-10 text-wrap text-xl lg:text-2xl mb-5 text-justify">
          بازار ملک هومینکس، بستری رایگان و امن برای خرید و فروش املاک ؛ آگهی‌ها
          به دقت بررسی شده و از تکرار آگهی‌ها جلوگیری می‌شود ، امکان مقایسه بین
          گزینه ها وجود دارد تا با اطمینان بیشتری تصمیم بگیرید؛ همچنین با امکان
          ایجاد صفحه اختصاصی برای مشاورین املاک برای ارتباط سریع و راحت تر
        </span>
        <Button href="/consultation" title="مشاهده" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Pic} alt="market" width={600} height={600} />
      </div>
    </div>
  );
}
