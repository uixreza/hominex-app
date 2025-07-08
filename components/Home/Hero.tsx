export default function Hero() {
  return (
    <div className="lg:mt-[-8rem] flex lg:flex-row-reverse flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-10 lg:h-[100vh]">
      <div className="flex flex-col">
        <span className="font-bold text-3xl mb-5">هومینکس</span>
        <span className="leading-8">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
      </div>
      <div className="relative flex justify-center items-center">
        {/* Ambient effect only on md+ screens */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(120,0,32,0.45)_0%,rgba(120,0,32,0.0)_70%)]"></div>
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(10,25,49,0.45)_0%,rgba(10,25,49,0.0)_70%)]"></div>
        </div>
        <video
          src="/assets/Intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="relative rounded-2xl w-full max-w-[460px] h-[320px] object-cover shadow-lg z-10"
        />
        <div className="absolute w-full bottom-0 flex justify-center items-center py-2 rounded-br-md text-[15px] bg-[#5e768f] z-10">
          ir.<span className="font-bold">Hominex</span>
        </div>
      </div>
    </div>
  );
}
