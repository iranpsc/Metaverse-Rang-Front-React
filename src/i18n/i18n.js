import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";


const TRANSLATIONS_API = "https://admin.rgb.irpsc.com/api/translations";
const CACHE_PREFIX = "i18n_cache_";

const customBackend = {
  type: "backend",
  init: () => {},
  read: async (language, namespace, callback) => {
    try {
      // Check if we have cached data and its version
      const cachedData = localStorage.getItem(`${CACHE_PREFIX}${language}`);
      const cachedVersion = localStorage.getItem(
        `${CACHE_PREFIX}${language}_version`
      );

      // Fetch the latest language info
      const { data } = await axios.get(TRANSLATIONS_API);
      const langInfo = data.data.find((lang) => lang.code === language);

      if (!langInfo) {
        throw new Error(`Language ${language} not found`);
      }

      // If cached version matches the latest version, use cached data
      if (
        cachedData &&
        cachedVersion &&
        parseInt(cachedVersion) === langInfo.version
      ) {
        callback(null, JSON.parse(cachedData));
        return;
      }

      // If no cache or outdated, fetch new translation data
      const response = await axios.get(langInfo.file_url);
      const translations = response.data;

      // Cache the new data and version
      localStorage.setItem(
        `${CACHE_PREFIX}${language}`,
        JSON.stringify(translations)
      );
      localStorage.setItem(
        `${CACHE_PREFIX}${language}_version`,
        langInfo.version.toString()
      );

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
    react: {
      useSuspense: true,
    },
  });

export default i18n;
