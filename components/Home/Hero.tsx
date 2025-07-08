export default function Hero() {
  return (
    <div className="lg:mt-[-8rem] flex lg:flex-row-reverse flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 lg:h-[100vh]">
      <div className="flex flex-col">
        <span className="font-bold text-3xl mb-5">هومینکس</span>
        <span className="leading-8">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
      </div>
      <div className="relative flex justify-center items-center | before:content-['Hominex.ir'] before:flex before:justify-center before:items-center before:w-25 before:h-5 before:rounded-br-md before:rounded-tl-md before:text-[15px] before:bg-[#5e768f] before:z-10 before:absolute before:right-0 before:bottom-0">
        <video
          src="/assets/Intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="relative rounded-2xl w-full max-w-[460px] h-[300px] object-cover shadow-lg "
        />
      </div>
    </div>
  );
}
