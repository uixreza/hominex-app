import Image from "next/image";
import Pic from "../../public/assets/img/isometric.png";
import Button from "../UI/Button";

export default function Market() {
  return (
    <div className="flex  flex-col lg:flex-row-reverse lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 mt-[-2rem]">
      <div className="flex flex-col gap-3">
        <span className="font-extrabold text-3xl mb-5 text-blue-900">
          بازار املاک
        </span>
        <span className="leading-8">
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
        <Button href="/consultation" title="مشاهده" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Pic} alt="market" width={400} height={400} />
      </div>
    </div>
  );
}
