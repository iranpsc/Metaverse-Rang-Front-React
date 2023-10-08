import moment from "jalali-moment";
import { toast } from "react-hot-toast";
import i18n from "../../i18n/i18n";

export function SanitizeHTML(content) {
  return content?.replace(/<[^>]*>?/gm, "");
}

export function TextShorter(content, endStr = 20) {
  if (content?.length > endStr) {
    return `${SanitizeHTML(content).substring(0, endStr)}...`;
  }

  return SanitizeHTML(content);
}

export function ConvertJalali(date) {
  return new Date(date).toLocaleString("fa-IR").replace("،", " ");
}

export function TimeAgo(time) {
  // Convert the Persian date to a JavaScript Date object using moment-jalaali
  const birthDate = moment(time, "jYYYY/jMM/jDD").toDate();

  // Calculate the difference between the birth date and the current date in milliseconds
  const ageInMs = Date.now() - birthDate.getTime();

  const ageInYears = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));

  return ageInYears;
}

export function EmailValidator(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export const calculateFee = (number = 100, percent = 5) => {
  const parseNumber = parseInt(number);
  return (parseNumber * percent) / 100 + parseNumber;
};

export const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  fixNumbers = function (str) {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

export const ToastError = (message) => {
  return toast.error(message, {
    style: {
      direction: "rtl",
      textAlign: "right",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      border: "2px solid red",
    },
    duration: 5000,
  });
};

export const ToastSuccess = (message) => {
  return toast.success(message, {
    style: {
      direction: "rtl",
      textAlign: "right",
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      border: "2px solid green",
    },
    duration: 5000,
  });
};
export const getFieldTranslationByNames = (modalName, fieldName) => {
  const resources = i18n.options.resources;
  const modal = resources[i18n.language].translation.modals.find(
    (modal) => modal.name === modalName
  );

  if (modal) {
    for (let i = 0; i < modal.tabs.length; i++) {
      const tab = modal.tabs[i];
      const field = tab.fields.find((field) => field.name === fieldName);

      if (field) {
        return field.translation;
      }
    }
  }

  // Return a default translation or handle missing translations as needed
  return "Translation not found";
};
export function convertEnglishToPersianNumbers(inputText) {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  // استفاده از تابع replace با استفاده از نگاشت اعداد
  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(englishNumbers[i], "g");
    inputText = inputText.replace(regex, persianNumbers[i]);
  }

  return inputText;
}
