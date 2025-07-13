import React from "react";

export default function Waitscreen() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-[999] flex items-center justify-center backdrop-blur-lg bg-black/30">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-white border-t-4 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-white mt-5 text-lg">در حال ارسال درخواست...</span>
      </div>
    </div>
  );
}
