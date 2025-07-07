import Image from "next/image";
import Pic from "../../public/assets/img/isometric.png";

export default function Market() {
  return (
    <div className="flex  flex-col lg:flex-row-reverse lg:[&>div]:w-1/2 [&>div]:w-full justify-between gap-4 mt-20">
      <div className="flex flex-col">
        <span className="font-bold text-3xl mb-5">بازار املاک</span>
        <span>
          هومینکس، پلتفرمی هست که تصمیم‌های ملکی رو از حدس و تجربه‌های پراکنده،
          به تحلیل‌های قابل‌اعتماد و داده‌محور تبدیل می‌کنه. اینجا اطلاعات دقیق
          داریم، نگاه علمی داریم، و کمک می‌کنیم تا با خیال راحت ملک مورد نظرتون
          رو پیدا کنید.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Image src={Pic} alt="market" width={400} height={400} />
      </div>
    </div>
  );
}
