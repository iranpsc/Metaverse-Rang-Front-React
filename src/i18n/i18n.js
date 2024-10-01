import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import axios from "axios";

const TRANSLATION_API_URL = "https://admin.rgb.irpsc.com/api/translations";

async function fetchTranslations() {
  try {
    const response = await axios.get(TRANSLATION_API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return [];
  }
}

async function loadTranslations() {
  const languages = await fetchTranslations();
  if (languages.length > 0) {
    for (const lang of languages) {
      const { code, version, file_url } = lang;

      const cachedVersion = localStorage.getItem(`${code}_version`);
      if (cachedVersion !== version) {
        const translationResponse = await axios.get(file_url);
        i18n.addResourceBundle(code, "translation", translationResponse.data);
        localStorage.setItem(`${code}_version`, version);
        console.log(`Translations for ${code} updated.`);
      } else {
        console.log(`Translations for ${code} are up to date.`);
      }
    }
  }
}

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init(
    {
      supportedLngs: ["en", "fa"],
      fallbackLng: "fa",
      react: {
        useSuspense: true,
      },
    },
    () => {
      loadTranslations();
    }
  );

export default i18n;
