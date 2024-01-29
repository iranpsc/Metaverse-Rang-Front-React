import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const fetchTranslations = async () => {
  try {
    const response = await axios.get(
      "https://admin.rgb.irpsc.com/api/translations"
    );
    const translations = response.data.data;

    translations.forEach((translation) => {
      const { code, file_url } = translation;

      // اگر زبانی با این کد در resources وجود نداشته باشد، آن را اضافه کنید
      if (!i18n.hasResourceBundle(code, "translation")) {
        i18n.addResourceBundle(code, "translation", {});
      }

      // درخواست برای دریافت فایل ترجمه و اضافه کردن به resources
      axios.get(file_url).then((fileResponse) => {
        i18n.addResourceBundle(code, "translation", fileResponse.data);
      });
    });
  } catch (error) {
    console.error("Error fetching translations:", error);
  }
};

fetchTranslations();

i18n.use(initReactI18next).init({
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
