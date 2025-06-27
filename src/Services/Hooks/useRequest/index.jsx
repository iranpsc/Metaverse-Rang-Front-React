import axios from "axios";
import { getItem } from "../../Utility/LocalStorage";
import { ToastError } from "../../Utility";

export default function useRequest() {
  const PROD_BASE_URL = "https://api.rgb.irpsc.com/api/";
  const DEV_BASE_URL = "https://api.rgb.irpsc.com/api/";
  const user = getItem("user");  // دریافت اطلاعات کاربر از LocalStorage

  const HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
  };

  function Request(
    directory,
    method = "GET",
    formData = {},
    customHeader = {},
    environment = "production"
  ) {
    const BASE_URL =
      environment === "development" ? DEV_BASE_URL : PROD_BASE_URL;

    return axios.request({
      url: BASE_URL + directory,
      method,
      headers: {
        // اضافه کردن هدر Authorization اگر توکن موجود است
        ...(user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
        'Content-Type': 'application/json',  // تعیین نوع محتوا برای ارسال داده‌ها به صورت JSON
        'Accept': 'application/json',  // اضافه کردن هدر Accept به درخواست
        ...customHeader,  // اضافه کردن هدرهای سفارشی
      },
      data: method !== HTTP_METHOD.GET ? formData : {},  // درخواستی که GET نباشد نیاز به data دارد
    }).catch(error => {
      if (error.response?.status === 410) {
        ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
      }
      throw error; // خطا را دوباره پرتاب می‌کنیم تا کامپوننت‌های فراخوان‌کننده بتوانند آن را مدیریت کنند
    });
  }

  return { Request, HTTP_METHOD };
}
