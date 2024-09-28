import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fa"], // زبان‌های پشتیبانی شده
    fallbackLng: "fa",

    backend: {
      loadPath: "https://rgb.irpsc.com/lang/{{lng}}.json", // مسیر API برای دریافت فایل ترجمه
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
