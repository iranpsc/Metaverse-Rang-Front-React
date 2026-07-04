import { useEffect } from "react";
import useAuth from "../services/Hooks/useAuth";
import useRequest from "../services/Hooks/useRequest";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    const redirectToAuth = async () => {
      try {
        const response = await Request(
          `auth/redirect?redirect_to=${window.location.origin}`,
          HTTP_METHOD.GET
        );

        const url = response?.data?.url;

        if (url) {
          window.location.replace(url);
        } else {
          console.error("No redirect URL found");
        }
      } catch (error) {
        console.error("Auth redirect failed:", error);
      }
    };

    if (!isLoggedIn()) {
      redirectToAuth();
    }
  }, []);

  if (!isLoggedIn()) {
    return null;
  }

  return children;
}