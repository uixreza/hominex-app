export default function Hero() {
  return (
    <div className="lg:mt-[-8rem] flex lg:flex-row flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 lg:h-[100vh]">
      <div className="flex flex-col">
        <span className="font-bold text-3xl mb-5">هومینکس</span>
        <span className="leading-8">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
      </div>
      <div className="flex justify-center items-center">Animation</div>
    </div>
  );
}
