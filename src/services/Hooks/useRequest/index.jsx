import { useNavigate } from "react-router";
import axios from "axios";
import { getItem } from "../../Utility/LocalStorage";
import { ToastError, getTranslation } from "../../Utility";
import { UserContext } from "../../reducers/UserContext";
import { useContext } from "react";

export default function useRequest() {
  const isProduction = window.location.hostname === "world.metarang.com";

  const navigate = useNavigate();
  const accountSecurity = getItem("account_security")?.account_security;
  const [userInfo] = useContext(UserContext);

  const PROD_BASE_URL = "https://api.metarang.com/api/";
  const DEV_BASE_URL = "https://dev-api.metarang.com/api/";

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
      ToastError(getTranslation("1603"));
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
  ) {
    const user = getItem("user");

    const BASE_URL = isProduction ? PROD_BASE_URL : DEV_BASE_URL;
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
          ToastError(getTranslation("1603"));
        }

        throw error;
      });
  }

  return { Request, HTTP_METHOD, checkSecurity };
}
