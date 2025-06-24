import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Services/Hooks/useAuth";

const AuthMiddleware = ({ children }) => {
  const { setUserWithToken, setUser } = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("token") && queryParams.has("expires_at")) {
      const queryParamsObject = {
        token: queryParams.get("token"),
        automatic_logout: queryParams.get("expires_at"),
      };
      setUser(queryParamsObject).then(() => {
        navigator("/metaverse");
        setUserWithToken();
      });
    } else {
      setUserWithToken();
    }
  }, []);

  return children;
};

export default AuthMiddleware;