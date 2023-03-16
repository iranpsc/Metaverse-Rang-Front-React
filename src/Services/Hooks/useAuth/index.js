import { useContext } from 'react';
import { AddUserAction, DeleteUserAction } from '../../Actions/UserContextAction';
import { FollowContext } from '../../Reducers/FollowContext';
import { UserContext } from '../../Reducers/UserContext'
import { WalletContext, WalletContextTypes } from '../../Reducers/WalletContext';
import { getItem, removeItem, setItem } from '../../Utility/LocalStorage';
import useRequest from '../useRequest';

export default function useAuth() {
  const [userState, setUserState] = useContext(UserContext);
  const [, setWallet] = useContext(WalletContext);
  const [, setFollow] = useContext(FollowContext);
  const { Request, HTTP_METHOD } = useRequest();

  const isLoggedIn = () => {
    const LocalStorage = getItem('user');

    if(LocalStorage?.expire > Date.now()) {
      if(userState?.id) {
        return true
      }
    }
    else {
      if(userState.id) {
        removeItem('user');
        setUserState(DeleteUserAction());
      }

      return false;
    }
  }

  const setUser = (response) => {
    const user = response.data;
    const expire = Date.now() + (user.automatic_logout * 60 * 1000);
    const LocalStorage = { token: user.token, expire };
    setItem('user', LocalStorage);
    
    Request('user/wallet', HTTP_METHOD.GET, {}, {Authorization: `Bearer ${user?.token}`}).then(response => {
      setWallet({type: WalletContextTypes.ADD_WALLET, payload: response.data.data});
    });
    
    Request('following', HTTP_METHOD.GET, {}, {Authorization: `Bearer ${user?.token}`}).then((response) => {
      setFollow(response.data.data);
    });
    
    setUserState(AddUserAction(response.data));
  }

  const getUser = () => {
    return userState;
  }

  const setUserWithToken = () => {
    const LocalStorage = getItem('user');
    if(LocalStorage?.expire > Date.now() && !userState?.id) {
      Request('user/profile').then(response => {
        setUserState(AddUserAction(response.data.data));
        
        Request('user/wallet').then(response => {
          setWallet({type: WalletContextTypes.ADD_WALLET, payload: response.data.data});
        });

        Request('following').then((response) => {
          setFollow(response.data.data);
        });
      });
    }
    else {
      removeItem('user')
    }
  }

  return { setUser, setUserWithToken, isLoggedIn, getUser }
}
