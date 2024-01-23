import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const fetchTranslations = async () => {
  try {
    const translationsResponse = await axios.get(
      "https://admin.rgb.irpsc.com/api/translations"
    );
    const translations = translationsResponse.data.data;

    const resources = {}; // Initialize resources as an empty object

    const promises = [];

    for (const translation of translations) {
      const { code, file_url } = translation;
      const response = await axios.get(file_url);
      const translationData = response.data;
      resources[code] = resources[code] || { translation: {} };

      resources[code].translation = {
        ...resources[code].translation,
        ...translationData,
      };
      promises.push(response);
    }

    i18n.use(initReactI18next).init({
      resources,
      lng: "fa",
      interpolation: {
        escapeValue: false,
      },
    });

    // Optional: You can return the responses if needed
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching translations:", error);
  }
};

// Call the function to fetch and update translations
fetchTranslations();

export default i18n;
