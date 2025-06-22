import React from "react";

interface ISubmitButton {
  title: string;
  handleFunc: () => void;
}

const SubmitButton = ({ title, handleFunc }: ISubmitButton) => {
  return (
    <button
      onClick={() => handleFunc()}
      className="text-[14px] bg-[var(--box)]/40  backdrop:blur-3xl bg-opacity-40 backdrop-blur-md shadow-lg shadow-black/20 w-full text-center py-4 mt-5 rounded-xl cursor-pointer border border-white/30 transition-all duration-200 hover:shadow-2xl">
      {title}
    </button>
  );
};

export default SubmitButton;
