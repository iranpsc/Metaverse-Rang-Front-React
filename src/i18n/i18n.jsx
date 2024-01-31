// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

const TranslationProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const setLoadStatus = (loadingStatus, successStatus, errorStatus = null) => {
    setLoading(loadingStatus);
    setSuccess(successStatus);
    setError(errorStatus);
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setLoadStatus(true, false, null);

        const response = await axios.get(
          "https://admin.rgb.irpsc.com/api/translations"
        );
        const translations = response.data.data;

        translations.forEach((translation) => {
          const { code, file_url } = translation;

          if (!i18n.hasResourceBundle(code, "translation")) {
            i18n.addResourceBundle(code, "translation", {});
          }

          axios.get(file_url).then((fileResponse) => {
            i18n.addResourceBundle(code, "translation", fileResponse.data);
          });
        });

        setLoadStatus(false, true, null);
      } catch (error) {
        console.error("Error fetching translations:", error);
        setLoadStatus(false, false, error);
      }
    };

    fetchTranslations();
  }, []); // Run once on mount

  return (
    <TranslationContext.Provider
      value={{ loading, success, error, setLoadStatus }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

i18n.use(initReactI18next).init({
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export { TranslationProvider };
