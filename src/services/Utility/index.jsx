import moment from "jalali-moment";
import { toast } from "react-hot-toast";
import i18n from "../../i18n/i18n";
import DOMPurify from "dompurify";
import { toGregorian } from "jalaali-js";

export const SanitizeHTML = (html) => {
  if (!html) return "";

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "div",
      "p",
      "br",
      "hr",
      "span",
      "b",
      "strong",
      "i",
      "em",
      "u",
      "s",
      "mark",
      "small",
      "sub",
      "sup",
      "code",
      "pre",
      "blockquote",
      "ul",
      "ol",
      "li",
      "dl",
      "dt",
      "dd",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    ALLOWED_ATTR: [
      "href",
      "title",
      "target",
      "src",
      "alt",
      "colspan",
      "rowspan",
      "width",
      "height",
      "style",
    ],
    FORBID_TAGS: ["script", "iframe", "object", "embed"],
  });
};
export const getPlainText = (htmlString) => {
  if (!htmlString) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

export function TextShorter(content, endStr = 20) {
  if (content?.length > endStr) {
    return `${SanitizeHTML(content).substring(0, endStr)}...`;
  }

  return SanitizeHTML(content);
}
export function ConvertJalali(date) {
  const isPersian = i18n.language === "fa";

  const isJalali = /^\d{4}\/\d{1,2}\/\d{1,2}/.test(date);

  let parsedDate;

  if (isJalali) {
    const [year, month, day] = date.split("/").map(Number);

    const gregorian = toGregorian(year, month, day);

    parsedDate = new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd);
  } else {
    parsedDate = new Date(date);
  }

  return parsedDate.toLocaleDateString(isPersian ? "fa-IR" : "en-US");
}
export function TimeAgo(time) {
  if (typeof time !== "string") return 0;

  const birthDate = moment(time, "jYYYY/jMM/jDD", true).toDate();
  if (isNaN(birthDate.getTime())) return 0;

  const ageInMs = Date.now() - birthDate.getTime();
  return Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));
}

export function EmailValidator(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
// این تابع برای فرمت اعداد اعشاری هست و فقط در صورتی که اعداد اعشار داشته باشد باشند
// اعشار ان نمایش داده میشود در غیر این صورت اعداد بدون اعشار نمایش داده میشوند
  export const normalizeDecimalInput = (value) => {
    if (value === "") return "";

    const normalized = value
      .replace(/[٫]/g, ".")
      .replace(/[۰-۹]/g, (digit) => {
        const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        return String(persianDigits.indexOf(digit));
      })
      .replace(/[^0-9.]/g, "");

    if (!normalized.includes(".")) return normalized;

    const [wholePart, ...decimalParts] = normalized.split(".");
    const cleanDecimal = decimalParts.join("").replace(/\./g, "");
    return `${wholePart || "0"}.${cleanDecimal}`;
  };

export const formatNumber = (value, decimals = 2) => {
  const num = Number(value);

  if (Number.isNaN(num)) return "";

  return Number.isInteger(num) ? num : Number(num.toFixed(decimals));
};

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
export const convertToPersian = (value) => {
  if (value == null) return "";

  const str = String(value);

  const isPersian = i18n.language === "fa";

  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return isPersian
    ? str.replace(/\d/g, (d) => persianDigits[d])
    : str.replace(/[۰-۹]/g, (d) => englishDigits[persianDigits.indexOf(d)]);
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
    duration: 4000,
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

// تبدیل عدد واقعی به فرمت K/M و 3 رقم اعشار (formatAmount)
export const formatAmount = (value) => {
  const num = typeof value === "number" ? value : parseFloat(value);
  if (isNaN(num)) return "0";

  const format = (n) => {
    // حداکثر 3 رقم اعشار، حذف صفر اضافی
    return n.toFixed(3).replace(/\.?0+$/, "");
  };

  if (num >= 1_000_000) {
    return `${format(num / 1_000_000)}M`;
  }

  if (num >= 1_000) {
    return `${format(num / 1_000)}K`;
  }

  return format(num);
};

export const metarangUrl = (path = "") =>
  `https://metarang.com/${i18n.language}/${path}`;

export const metarangUrlCitizen = (path = "") =>
  `https://metarang.com/${i18n.language}/citizens/${path}`;

export const truncateText = (text, maxLength = 20) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
};
export const getTranslation = (fieldId) => {
  const resources = i18n.store.data;
  const currentLanguage = i18n.language || "fa";
  const translationData =
    resources?.[currentLanguage]?.translation ??
    resources?.[currentLanguage] ??
    {};

  if (!translationData || Object.keys(translationData).length === 0) {
    return "Translation not found";
  }

  if (translationData.modals) {
    const modals = translationData.modals;

    for (const modal of modals) {
      for (const tab of modal.tabs || []) {
        const field = tab.fields?.find((field) => field.unique_id == fieldId);
        if (field?.translation) {
          return field.translation;
        }
      }
    }
  }

  const normalizedId = String(fieldId);
  const directValue = translationData[normalizedId] ?? translationData[fieldId];

  if (typeof directValue === "string" && directValue.trim()) {
    return directValue;
  }

  if (typeof directValue === "number" || typeof directValue === "boolean") {
    return String(directValue);
  }

  if (translationData.translation && typeof translationData.translation === "object") {
    const nestedDirectValue =
      translationData.translation[normalizedId] ??
      translationData.translation[fieldId];

    if (typeof nestedDirectValue === "string" && nestedDirectValue.trim()) {
      return nestedDirectValue;
    }
  }

  return `Translation '${fieldId}' not found`;
};
//getFieldsByTabName(112, 120)
// => ["متن 112" تا "متن 120"]
export const getFieldsByTabName = (firstParam, secondParam) => {
  const resources = i18n.store.data;
  const currentLanguage = i18n.language || "fa";

  const translationData =
    resources?.[currentLanguage]?.translation ??
    resources?.[currentLanguage] ??
    {};

  const firstId = Number(firstParam);
  const secondId = Number(secondParam);

  if (
    Number.isNaN(firstId) ||
    Number.isNaN(secondId) ||
    firstParam === undefined ||
    secondParam === undefined
  ) {
    return [];
  }

  const minId = Math.min(firstId, secondId);
  const maxId = Math.max(firstId, secondId);

  return Object.entries(translationData)
    .filter(([key]) => {
      const id = Number(key);

      return (
        !Number.isNaN(id) &&
        id >= minId &&
        id <= maxId
      );
    })
    .map(([key, value]) => ({
      unique_id: Number(key),
      translation: value,
    }));
};


export const isMobile =
  "ontouchstart" in window || navigator.maxTouchPoints > 0;
export const getBrowser = async () => {
  const ua = navigator.userAgent;

  if (navigator.brave && (await navigator.brave.isBrave())) {
    return "Brave";
  }

  if (/Edg/i.test(ua)) {
    return "Edge";
  }

  if (/OPR/i.test(ua)) {
    return "Opera";
  }

  if (/Firefox/i.test(ua)) {
    return "Firefox";
  }

  if (/Chrome/i.test(ua)) {
    return "Chrome";
  }

  return "Unknown";
};
// عدد میگیرد به صورت ساعت دقیقه و ثانیه ریترن میکند
export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = String(minutes).padStart(2, "۰");
  const formattedSeconds = String(seconds).padStart(2, "۰");

  return `${formattedMinutes}:${formattedSeconds}`;
};
