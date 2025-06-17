import React from "react";
import { MdArrowDropDown } from "react-icons/md";

interface IButton {
  title: string;
  handleFunc: (id: number) => void;
  keyId: number;
  isActive: boolean;
}

const Button = ({ title, handleFunc, keyId, isActive }: IButton) => {
  return (
    <div
      onClick={() => handleFunc(keyId)}
      className={`text-[14px] bg-[var(--box)]/40  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 w-[40%] flex flex-row-reverse items-center justify-between gap-2 px-4 py-3 rounded-xl cursor-pointer ${
        isActive ? "border-4" : "border"
      } border-white/30 transition-all duration-200 hover:shadow-2xl`}>
      {title}
      <MdArrowDropDown />
    </div>
  );
};

export default Button;
