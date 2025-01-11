"use strict";
function formatDate(input, format = "YYYY-MM-DD HH:mm:ss") {
  let date = typeof input === "string" ? new Date(input) : input;
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date input");
  }
  const components = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
    ms: String(date.getMilliseconds()).padStart(3, "0")
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss|ms/g, (match) => components[match]);
}
function getDayRecordDateKey(inputDate) {
  const date = inputDate ? new Date(inputDate) : /* @__PURE__ */ new Date();
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input. Please provide a valid date string or Date object.");
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
exports.formatDate = formatDate;
exports.getDayRecordDateKey = getDayRecordDateKey;
