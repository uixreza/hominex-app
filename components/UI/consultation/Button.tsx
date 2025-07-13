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
      className={` sm:text-[14px] text-[12px] bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 w-[40%] flex flex-row items-center sm:justify-between justify-center gap-2 sm:px-4 sm:py-3 px-1 py-2 rounded-xl cursor-pointer ${
        isActive ? "border-4 font-bold " : "border-0"
      } border-[var(--blue)] transition-all duration-200 hover:shadow-2xl`}>
      {title}
      <MdArrowDropDown className="text-2xl hidden sm:block" />
    </div>
  );
};

export default Button;
