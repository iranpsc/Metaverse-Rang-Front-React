import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

export const TRANSLATIONS_API = "https://admin.rgb.irpsc.com/api/translations";
export let languagesMeta = []; 

const CACHE_PREFIX = "i18n_cache_";

const customBackend = {
  type: "backend",
  init: () => {},
  read: async (language, namespace, callback) => {
    try {
      const cachedData = localStorage.getItem(`${CACHE_PREFIX}${language}`);
      const cachedVersion = localStorage.getItem(`${CACHE_PREFIX}${language}_version`);

      const { data } = await axios.get(TRANSLATIONS_API);
      languagesMeta = data.data;

      const langInfo = data.data.find((lang) => lang.code === language);
      if (!langInfo) throw new Error(`Language ${language} not found`);

      if (cachedData && cachedVersion && parseInt(cachedVersion) === langInfo.version) {
        callback(null, JSON.parse(cachedData));
        return;
      }

      const response = await axios.get(langInfo.file_url);
      const translations = response.data;

      localStorage.setItem(`${CACHE_PREFIX}${language}`, JSON.stringify(translations));
      localStorage.setItem(`${CACHE_PREFIX}${language}_version`, langInfo.version.toString());

      callback(null, translations);
    } catch (error) {
      console.error("Error loading translations:", error);
      callback(error, null);
    }
  },
};

i18n
  .use(customBackend)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "fa",
    react: { useSuspense: true },
  });

export default i18n;
