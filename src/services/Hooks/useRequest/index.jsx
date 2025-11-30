import axios from "axios";
import { getItem } from "../../Utility/LocalStorage";
import { ToastError } from "../../Utility";

export default function useRequest() {
  const PROD_BASE_URL = "https://api.rgb.irpsc.com/api/";
  const DEV_BASE_URL = "https://api.rgb.irpsc.com/api/";
  const user = getItem("user");

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

    const finalURL = BASE_URL + directory;

    const headers = {
      ...(user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
      ...customHeader,
    };

    

    return axios
      .request({
        url: finalURL,
        method,
        headers,
        data: method !== HTTP_METHOD.GET ? formData : {},
      })
      .then((response) => {
       
        return response;
      })
      .catch((error) => {
       
        console.error("❌ Error object:", error);

      
        if (error.response?.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
        }

        throw error;
      });
  }

  return { Request, HTTP_METHOD };
}
