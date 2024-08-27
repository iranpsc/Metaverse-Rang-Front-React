import axios from "axios";
import { getItem } from "../../Utility/LocalStorage";

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

    return axios.request({
      url: BASE_URL + directory,
      method,
      headers: {
        Authorization: user?.token ? `Bearer ${user?.token}` : null,
        ...customHeader,
      },
      data: formData,
    });
  }

  return { Request, HTTP_METHOD };
}
