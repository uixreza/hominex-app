import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  viewerPath: string;
  setViewerPath: Dispatch<SetStateAction<string>>;
};
export default function FullScreenViewer({ viewerPath, setViewerPath }: Props) {
  return (
    <div
      onClick={() => setViewerPath("")}
      className="fixed top-0 left-0 z-30 w-full h-full bg-black/50 backdrop-blur-md flex justify-center items-center">
      <Image
        src={viewerPath}
        width={1000}
        height={1000}
        alt={viewerPath}
        className="rounded-sm w-2/3 h-auto"
      />
    </div>
  );
}
