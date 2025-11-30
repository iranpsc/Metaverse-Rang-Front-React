import { getFieldTranslationByNames } from "./Utility";

const getTranslation = (index) => getFieldTranslationByNames(index);

// Map صفحات به translation ID
const pageTranslations = {
  "sanad-1": "1314",
  "sanad-2": "1316",
  "sanad-3": "1317",
  "profile-1": "62",
  "profile-2": "150",
  "profile-3": "61",
  "settings-1": "639",
  "settings-2": "640",
  "settings-3": "641",
  "settings-4": "95",
  "search-1": "470",
  "search-2": "471",
  "dynasty-1": "111",
  "dynasty-2": "112",
  "dynasty-3": "113",
  "dynasty-4": "114",
  "hour-profit-1": "27",
  "verification-1": "867",
  "verification-2": "868",
  "store-1": "109",
  "store-2": "110",
  "report-1": "1386",
  "report-2": "1386",
};

// Map title های کلیدی بدون شماره
const titleTranslations = {
  "store": "30",
  "settings": "642",
  "profile": "243",
  "sanad": "241",
  "confirmation": "31",
  "search": "232",
  "dynasty": "234",
  "hour-profit": "236",
  "verification": "237",
  "notifications": "238",
  "report":"23"
};

// تبدیل locationPage به متن قابل نمایش
export const translateLocationPage = (page) => {
  const translationId = pageTranslations[page];
  return translationId ? getTranslation(translationId) : page;
};

// استخراج title از href
export const getTitleFromHref = (href) => {
  return href ? href.split("/").pop() : "";
};

// گرفتن translation نهایی برای title
export const getTitleTranslation = (hrefOrKey) => {
  const extractedTitle = getTitleFromHref(hrefOrKey);
  // اگر suffix شماره دارد حذف کن
  const cleanTitle = extractedTitle.replace(/-\d+$/, "");
  return titleTranslations[cleanTitle] ? getTranslation(titleTranslations[cleanTitle]) : getTranslation("188");
};
