import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext(false);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const isPersian = i18n.language === "fa";

  return (
    <LanguageContext.Provider value={isPersian}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};