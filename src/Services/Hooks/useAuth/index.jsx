import { useContext } from "react";
import {
  AddUserAction,
  DeleteUserAction,
} from "../../Actions/UserContextAction";
import { FollowContext } from "../../Reducers/FollowContext";
import { UserContext } from "../../Reducers/UserContext";
import {
  WalletContext,
  WalletContextTypes,
} from "../../Reducers/WalletContext";
import { getItem, removeItem, setItem } from "../../Utility/LocalStorage";
import useRequest from "../useRequest";

export default function useAuth() {
  const [userState, setUserState] = useContext(UserContext);
  const [, setWallet] = useContext(WalletContext);
  const [, setFollow] = useContext(FollowContext);
  const { Request, HTTP_METHOD } = useRequest();

  const LocalStorage = getItem("user");

  const isLoggedIn = () => {
    if (LocalStorage?.expire > Date.now() && userState?.id) {
      return true;
    } else {
      if (userState.id) {
        removeItem("user");
        setUserState(DeleteUserAction());
      }
      return false;
    }
  };

  const setUser = async (response) => {
    const user = response.data;
    const expire = Date.now() + user.automatic_logout * 60 * 1000;
    const LocalStorageData = { token: user.token, expire };
    setItem("user", LocalStorageData);

    const [walletResponse, followingResponse] = await Promise.all([
      Request(
        "user/wallet",
        HTTP_METHOD.GET,
        {},
        { Authorization: `Bearer ${user?.token}` }
      ),
      Request(
        "following",
        HTTP_METHOD.GET,
        {},
        { Authorization: `Bearer ${user?.token}` }
      ),
    ]);

    setWallet({
      type: WalletContextTypes.ADD_WALLET,
      payload: walletResponse.data.data,
    });
    setFollow(followingResponse.data.data);
    setUserState(AddUserAction(response.data));
  };

  const getUser = () => {
    return userState;
  };

  const setUserWithToken = async () => {
    if (LocalStorage?.expire > Date.now() && !userState?.id) {
      const userProfileResponse = await Request("user/profile");
      setUserState(AddUserAction(userProfileResponse.data.data));

      const [walletResponse, followingResponse] = await Promise.all([
        Request("user/wallet"),
        Request("following"),
      ]);

      setWallet({
        type: WalletContextTypes.ADD_WALLET,
        payload: walletResponse.data.data,
      });
      setFollow(followingResponse.data.data);
    } else {
      removeItem("user");
    }
  };

  return { setUser, setUserWithToken, isLoggedIn, getUser };
}
