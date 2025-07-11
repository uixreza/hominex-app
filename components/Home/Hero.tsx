import Button from "../UI/Button";

export default function Hero() {
  return (
    <div className="lg:mt-[-8rem] flex lg:flex-row-reverse flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-20 lg:h-[100vh]">
      <div className="relative flex flex-col lg:mt-[-3rem]">
        <span className="font-extrabold text-4xl mb-5">
          <div className="text-blue-900">مشاور</div> هوشمند هومینکس
        </span>
        <p className="leading-8 text-wrap">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </p>
        <div className="pt-5 w-full flex justify-end items-center">
          <Button
            href="https://hominex.ir/about/"
            title="درباره ما"
            icon={true}
          />
        </div>
        {/* <Image
          src={"/assets/svg/pppointed.svg"}
          width={300}
          height={300}
          alt="arrow icon"
          className="hidden md:block absolute left-32 bottom-[2rem]"
        /> */}
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
          className="relative rounded-2xl w-full max-w-[520px] h-[380px] object-cover shadow-lg z-10"
        />
        <div className="absolute w-full bottom-0 flex justify-center items-center py-3 rounded-br-md rounded-bl-md text-[15px] bg-[#5e768f] z-10">
          ir.<span className="font-bold">Hominex</span>
        </div>
      </div>
    </div>
  );
}
