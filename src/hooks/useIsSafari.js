// src/hooks/useIsSafari.js
import { useMemo } from "react";

export const useIsSafari = () => {
  return useMemo(() => {
    if (typeof navigator === "undefined") return false; // برای SSR یا رندر سمت سرور
    const ua = navigator.userAgent;
    return (
      ua.includes("Safari") &&
      !ua.includes("Chrome") &&
      !ua.includes("CriOS") &&
      !ua.includes("FxiOS")
    );
  }, []);
};
