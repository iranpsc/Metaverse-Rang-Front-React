import useAuth from "../services/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRequest from "../services/Hooks/useRequest";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigate();
  const [components, setcomponents] = useState();
  const { Request, HTTP_METHOD } = useRequest();
  useEffect(() => {
    if (!isLoggedIn()) {
      // This check isn't preventing unwanted redirects properly
      Request(
        `auth/redirect?redirect_to=${window.location.origin}/metaverse`,
        HTTP_METHOD.GET
      )
        .then((response) => {
          if (response && response.data.url) {
            window.location.href = response.data.url;
          } else {
            console.error("No link found in response");
          }
        })
        .catch((error) => {
          console.error("Request failed", error);
        });
    }

    setcomponents(children);
  }, [isLoggedIn]);

  return components ? components : <></>;
}
