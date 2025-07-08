export default function Why() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-3xl font-bold w-full">چرا هومینکس ؟</span>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <li className="bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 shadow-lg backdrop-blur-md bg-opacity-60 rounded-xl px-4 py-8">
          <span className="font-bold text-center w-full">
            داده‌محور، علمی و دقیق
          </span>
          <p className="mt-5">
            ما تصمیم‌گیری در بازار مسکن را از حدس و تجربه صرف، به سمت تحلیل
            داده‌ و معیارهای علمی برده‌ایم.
          </p>
        </li>
        <li className="bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 shadow-lg backdrop-blur-md bg-opacity-60 rounded-xl px-4 py-8">
          <span className="font-bold text-center w-full">
            ساده سازی فرآیند ملکی
          </span>
          <p className="mt-5">
            هومینکس، مسیر پرپیچ‌وخم خرید و فروش ملک را به فرآیندی شفاف، ساده و
            آنلاین تبدیل کرده است.
          </p>
        </li>
        <li className="bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 shadow-lg backdrop-blur-md bg-opacity-60 rounded-xl px-4 py-8">
          <span className="font-bold text-center w-full">
            شفافیت در تمام مراحل
          </span>
          <p className="mt-5">
            هیچ چیز پنهان نیست؛ همه اطلاعات به‌صورت روشن، کامل و قابل بررسی در
            اختیار شماست.
          </p>
        </li>
        <li className="bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20 shadow-lg backdrop-blur-md bg-opacity-60 rounded-xl px-4 py-8">
          <span className="font-bold text-center w-full">
            فناوری روز در خدمت شما
          </span>
          <p className="mt-5">
            ما با بهره‌گیری از جدیدترین ابزارهای تکنولوژی، تجربه‌ای مدرن و
            قابل‌اعتماد در حوزه مسکن ایجاد کرده‌ایم.
          </p>
        </li>
      </ul>
    </div>
  );
}
