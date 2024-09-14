import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const lang = useTranslation();

  const isPersian = lang[1]?.language === "fa";

  return (
    <LanguageContext.Provider value={isPersian}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
