"use client";

import { useEffect } from "react";

export default function ChunkErrorHandler() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      const chunkFailed = /Loading chunk [\d]+ failed/;
      if (chunkFailed.test(event.message)) {
        console.warn("Detected chunk loading error. Reloading page...");
        window.location.reload();
      }
    };

    window.addEventListener("error", handler);
    return () => window.removeEventListener("error", handler);
  }, []);

  return null;
}
