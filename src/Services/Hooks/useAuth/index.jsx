import { useContext } from "react";
import {
  AddUserAction,
  DeleteUserAction,
} from "../../Actions/UserContextAction";
import { UserContext } from "../../Reducers/UserContext";
import {
  WalletContext,
  WalletContextTypes,
} from "../../Reducers/WalletContext";
import { getItem, removeItem, setItem } from "../../Utility/LocalStorage";
import useRequest from "../useRequest";

const USER_STORAGE_KEY = "user";
const API_ENDPOINTS = {
  WALLET: "user/wallet",
  PROFILE: "auth/me",
};

export default function useAuth() {
  const [userState, setUserState] = useContext(UserContext);
  const [walletState, walletDispatch] = useContext(WalletContext); // Fix: Correctly destructure context
  const { Request, HTTP_METHOD } = useRequest();

  const storage = getItem(USER_STORAGE_KEY);

  const clearUserSession = () => {
    if (userState?.id) {
      removeItem(USER_STORAGE_KEY);
      setUserState(DeleteUserAction());
    }
  };

  const isLoggedIn = () => {
    const now = Date.now();

    if (!storage?.expire || storage.expire <= now || !userState?.id) {
      clearUserSession();
      return false;
    }

    return true;
  };

  const fetchUserData = async (token) => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const [walletResponse, profileResponse] = await Promise.all([
        Request(API_ENDPOINTS.WALLET, HTTP_METHOD.GET, headers),
        Request(API_ENDPOINTS.PROFILE, HTTP_METHOD.POST, headers),
      ]);

      return {
        wallet: walletResponse.data.data,
        profile: profileResponse.data.data,
      };
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      throw error;
    }
  };

  const setUser = async (userData) => {
    console.log(userData);
    try {
      const expire =
        Date.now() + parseInt(userData.automatic_logout) * 60 * 1000;
      setItem(USER_STORAGE_KEY, {
        token: userData.token,
        expire,
      });

      const { wallet, profile } = await fetchUserData(userData.token);

      walletDispatch({
        type: WalletContextTypes.ADD_WALLET,
        payload: wallet,
      });
      setUserState(AddUserAction(profile));
    } catch (error) {
      clearUserSession();
      throw error;
    }
  };

  const setUserWithToken = async () => {
    try {
      const [profileResponse, walletResponse] = await Promise.all([
        Request(API_ENDPOINTS.PROFILE, HTTP_METHOD.POST),
        Request(API_ENDPOINTS.WALLET),
      ]);

      setUserState(AddUserAction(profileResponse.data.data));
      walletDispatch({
        // Fix: Use walletDispatch here as well
        type: WalletContextTypes.ADD_WALLET,
        payload: walletResponse.data.data,
      });
    } catch (error) {
      clearUserSession();
      throw error;
    }
  };

  return {
    setUser,
    setUserWithToken,
    isLoggedIn,
    getUser: () => userState,
  };
}
