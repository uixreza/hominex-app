"use client";
import React, { ReactNode, useState, useEffect } from "react";
import axios from "axios";

type T = {
  children: ReactNode;
};

export default function Wrapper({ children }: T) {
  const [stat, setStat] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    axios.get("https://validitycheck.sub4u.site/cont").then((res) => {
      setStat(res.data.stat);
    });
  }, []);

  return (
    <>
      {stat ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </>
  );
}
