import moment from "jalali-moment";
import { toast } from "react-hot-toast";
import i18n from "../../i18n/i18n";
import { useLanguage } from "../reducers/LanguageContext";

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
export const convertPersianNumbersToEnglish = (text) => {
  const persianToEnglishMap = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return text.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (match) => persianToEnglishMap[match]);
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

export const convertToPersian = (number) => {
  const isPersian = useLanguage();
  if (isPersian) {
    return number.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  } else {
    return number;
  }
};

export const convertToPersianNum = (number) => {
  const isPersian = useLanguage();
  if (isPersian) {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  } else {
    return number;
  }
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

export const getFieldTranslationByNames = (fieldId) => {
  const resources = i18n.store.data;
  if (
    !resources ||
    !resources[i18n.language] ||
    !resources[i18n.language].translation
  ) {
    return "Translation resources not found";
  }

  const modals = resources[i18n.language].translation.modals;

  for (const modal of modals) {
    for (const tab of modal.tabs || []) {
      const field = tab.fields?.find((field) => field.unique_id == fieldId);
      if (field?.translation) {
        return field.translation;
      }
    }
  }

  return `Translation for ID '${fieldId} not found`;
};

export const getFieldsByTabName = (modalName, tabName) => {
  const resources = i18n.store.data;

  const modal = resources[i18n.language].translation.modals.find(
    (modal) => modal.name === modalName
  );

  if (!modal) {
    return [];
  }

  const tab = modal.tabs.find((tab) => tab.name === tabName);

  if (!tab) {
    return [];
  }

  return tab.fields;
};

export function convertEnglishToPersianNumbers(inputText) {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(englishNumbers[i], "g");
    inputText = inputText.replace(regex, persianNumbers[i]);
  }

  return inputText;
}
