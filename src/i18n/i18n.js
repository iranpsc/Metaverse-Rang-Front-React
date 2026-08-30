import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

export const TRANSLATIONS_API = "https://admin.metarang.com/api/translations";
export const DEV_TRANSLATIONS_API = "https://dev2-admin.metarang.com/api/translations";

export let languagesMeta = [];

const CACHE_PREFIX = "i18n_cache_";

const getSelectedTranslationsApi = () => {
  if (typeof window === "undefined") {
    return DEV_TRANSLATIONS_API;
  }

  const hostname = window.location.hostname?.toLowerCase() || "";
  const origin = window.location.origin?.toLowerCase() || "";

  if (
    hostname === "world.metarang.com" ||
    hostname === "www.world.metarang.com" ||
    origin === "https://world.metarang.com" ||
    origin === "https://www.world.metarang.com"
  ) {
    return TRANSLATIONS_API;
  }

  return DEV_TRANSLATIONS_API;
};

const normalizeTranslations = (payload) => {
  if (!payload || typeof payload !== "object") {
    return {};
  }

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload.modals || payload.translation?.modals) {
    return payload;
  }

  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
    return payload.data;
  }

  return payload;
};

const customBackend = {
  type: "backend",
  init: () => {},
  read: async (language, namespace, callback) => {
    try {
      const selectedApi = getSelectedTranslationsApi();
      console.log("selectedApi", selectedApi);
      const cachedData = localStorage.getItem(`${CACHE_PREFIX}${language}`);
      const cachedVersion = localStorage.getItem(`${CACHE_PREFIX}${language}_version`);

      const { data: metaResponse } = await axios.get(selectedApi);
      const metaList = Array.isArray(metaResponse?.data)
        ? metaResponse.data
        : Array.isArray(metaResponse)
          ? metaResponse
          : [];

      languagesMeta = metaList;

      const langInfo = metaList.find((lang) => lang.code === language);
      if (!langInfo) throw new Error(`Language ${language} not found`);

      if (cachedData && cachedVersion && String(cachedVersion) === String(langInfo.version)) {
        callback(null, normalizeTranslations(JSON.parse(cachedData)));
        return;
      }

      const response = await axios.get(langInfo.file_url);
      const translations = normalizeTranslations(response.data);

      localStorage.setItem(`${CACHE_PREFIX}${language}`, JSON.stringify(translations));
      localStorage.setItem(`${CACHE_PREFIX}${language}_version`, String(langInfo.version));

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
