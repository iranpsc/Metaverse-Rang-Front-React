export const convertToPersian = (number) => {
  return number.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};