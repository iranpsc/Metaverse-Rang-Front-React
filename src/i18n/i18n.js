import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fa: {
    translation: {
      "Welcome to React": "یشسیشی",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
