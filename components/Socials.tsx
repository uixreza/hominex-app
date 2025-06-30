import { RiTelegramLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex flex-row-reverse sm:justify-between justify-center items-center w-full container">
      <span className="shadow-2xl shadow-black hidden sm:block">
        توسعه با 💪 توسط تیم هومینکس
      </span>
      <div className="flex flex-row gap-5 text-2xl py-5">
        <RiTelegramLine className="shadow-2xl shadow-black cursor-pointer" />
        <FiYoutube className="shadow-2xl shadow-black cursor-pointer" />
        <FaWhatsapp className="shadow-2xl shadow-black cursor-pointer" />
        <FaInstagram className="shadow-2xl shadow-black cursor-pointer" />
      </div>
    </div>
  );
}
