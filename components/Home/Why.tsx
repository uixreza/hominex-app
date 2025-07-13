export default function Why() {
  return (
    <div className="flex flex-col gap-4 mt-20">
      <span className="text-4xl font-bold w-full">
        <span className="text-[var(--blue)]">چرا</span> هومینکس ؟
      </span>
      <ul className="relative grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
        <li className="min-h-[220px] md:min-h-[260px] lg:min-h-[280px] bg-gradient-to-br from-[#1a2238]/90 via-[#26314f]/85 to-[#3a4666]/80 shadow-black/20 shadow-lg backdrop-blur-xl rounded-2xl px-10 py-10 flex flex-col items-center justify-center max-w-[510px] w-[100%] mx-auto">
          <span className="font-extrabold text-2xl md:text-2xl text-center w-full mb-4 border-b-2 border-white/20 pb-2 text-white">
            داده‌محور، علمی و دقیق
          </span>
          <p className="mt-2 text-base md:text-lg font-medium text-center text-white">
            ما تصمیم‌گیری در بازار مسکن را از حدس و تجربه صرف، به سمت تحلیل
            داده‌ و معیارهای علمی برده‌ایم.
          </p>
        </li>
        <li className="min-h-[220px] md:min-h-[260px] lg:min-h-[280px] bg-gradient-to-bl from-[#f6f5f2]/90 via-[#e9e9e6]/85 to-[#d1d1ce]/80 shadow-black/20 shadow-lg backdrop-blur-xl rounded-2xl px-10 py-10 flex flex-col items-center justify-center max-w-[510px] w-[100%] mx-auto">
          <span className="font-extrabold text-2xl md:text-2xl text-center w-full mb-4 border-b-2 border-gray-400/40 pb-2 text-gray-900">
            ساده سازی فرآیند ملکی
          </span>
          <p className="mt-2 text-base md:text-lg font-medium text-center text-gray-900">
            هومینکس، مسیر پرپیچ‌وخم خرید و فروش ملک را به فرآیندی شفاف، ساده و
            آنلاین تبدیل کرده است.
          </p>
        </li>
        <li className="min-h-[220px] md:min-h-[260px] lg:min-h-[280px] bg-gradient-to-r from-[#9baec8]/90 via-[#b2c3d6]/85 to-[#cfd8e3]/80 shadow-black/20 shadow-lg backdrop-blur-xl rounded-2xl px-10 py-10 flex flex-col items-center justify-center max-w-[510px] w-[100%] mx-auto">
          <span className="font-extrabold text-2xl md:text-2xl text-center w-full mb-4 border-b-2 border-gray-700/30 pb-2 text-gray-900">
            شفافیت در تمام مراحل
          </span>
          <p className="mt-2 text-base md:text-lg font-medium text-center text-gray-900">
            هیچ چیز پنهان نیست؛ همه اطلاعات به‌صورت روشن، کامل و قابل بررسی در
            اختیار شماست.
          </p>
        </li>
        <li className="min-h-[220px] md:min-h-[260px] lg:min-h-[280px] bg-gradient-to-l from-[#7a7a7a]/90 via-[#b0b0b0] to-[#e0e0e0] shadow-black/20 shadow-lg backdrop-blur-xl rounded-2xl px-10 py-10 flex flex-col items-center justify-center max-w-[510px] w-[100%] mx-auto">
          <span className="font-extrabold text-2xl text-center w-full mb-4 border-b-2 border-gray-700/30 pb-2 text-gray-900">
            فناوری روز در خدمت شما
          </span>
          <p className="mt-2 text-base md:text-lg font-medium text-center text-gray-900">
            ما با بهره‌گیری از جدیدترین ابزارهای تکنولوژی، تجربه‌ای مدرن و
            قابل‌اعتماد در حوزه مسکن ایجاد کرده‌ایم.
          </p>
        </li>
      </ul>
    </div>
  );
}
