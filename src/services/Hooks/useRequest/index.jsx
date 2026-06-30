import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getItem } from "../../Utility/LocalStorage";
import { ToastError, getFieldTranslationByNames } from "../../Utility";
import { UserContext } from "../../reducers/UserContext";
import { useContext } from "react";

export default function useRequest() {
  const navigate = useNavigate();
  const accountSecurity = getItem("account_security")?.account_security;
  const [userInfo] = useContext(UserContext);

  const PROD_BASE_URL = "https://api.metarang.com/api/";
  const DEV_BASE_URL = "https://api.metarang.com/api/";

  const HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
  };

  const checkSecurity = () => {
    if (userInfo?.has_wallet) {
      return true;
    }

    if (!accountSecurity) {
      ToastError(getFieldTranslationByNames("1603"));
      navigate("/confirmation");
      return false;
    }

    return true;
  };

  function Request(
    directory,
    method = "GET",
    formData = {},
    customHeader = {},
    environment = "production",
  ) {
    const user = getItem("user"); // ← هر بار آخرین مقدار را می‌خوانیم

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
      .then((response) => response)
      .catch((error) => {
        if (error.response?.status === 410) {
          ToastError(getFieldTranslationByNames("1603"));
        }

        throw error;
      });
  }

  return { Request, HTTP_METHOD, checkSecurity };
}
