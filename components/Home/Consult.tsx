import Image from "next/image";
import Pic from "../../public/assets/img/isometric2.png";
import Button from "../UI/Button";

export default function Consult() {
  return (
    <div className="overflow-x-visible relative flex lg:flex-row flex-col lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 mt-5">
      <div className="flex flex-col gap-3">
        <span className="font-extrabold text-4xl mb-5 ">
          مشاوره <span className="text-[var(--blue)]">خرید</span>
        </span>
        <span className="leading-10 text-wrap text-xl lg:text-2xl mb-5 text-justify">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
        <Button href="/consultation" title="درخواست" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Pic} alt="market" width={500} height={500} />
      </div>
    </div>
  );
}
