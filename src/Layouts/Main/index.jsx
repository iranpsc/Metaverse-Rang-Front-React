import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router';
import { getItem, removeItem } from '../../Services/Utility/LocalStorage';
import PublicComponent from '../../Middleware/PublicComponent';
import PrivateComponent from '../../Middleware/PrivateComponent';

import Footer from '../Footer';
import LeafletIcon from '../../Components/Icons/LeafletIcon';
import Profile from '../Profile';
import Player from '../Player';
import DisplayIcon from '../../Components/DisplayIcon';

import ImageLogin from '../../Assets/images/login.png'
import ImageLogout from '../../Assets/images/logout.png'
import ImageLock from '../../Assets/images/lock.png'
import ImageUnlock from '../../Assets/images/unlock.png'


export default function Main() {
  const [statusSecurity, setStatusSecurity] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const expireSecurity = getItem('account_security');
    
    if(expireSecurity > Date.now()) {
      setStatusSecurity(true);
    } else {
      setStatusSecurity(false);
    }
  }, [])

  const logoutHandler = () => {
    removeItem('user');
    window.location.reload();
  }

  return (
    <>
      {/* start icon */}
      <PublicComponent>
        <LeafletIcon source={ ImageLogin } style={{ top: 70 }} onClick={() => navigation('/metaverse/login')}/>
      </PublicComponent>

      <PrivateComponent>
        <LeafletIcon source={ statusSecurity ? ImageUnlock : ImageLock } style={{ top: 70 }} onClick={() => navigation('/metaverse/confirmation')}/>
      </PrivateComponent>

      <PrivateComponent>
        <LeafletIcon source={ ImageLogout } style={{ top: 110 }} onClick={logoutHandler} />
      </PrivateComponent>
      
      <DisplayIcon/>
      {/* end icon */}
      
      <Profile />
      <Player />

      <Footer />
    </>
  )
}
