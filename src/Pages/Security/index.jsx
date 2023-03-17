import React from 'react';
import { useState, useEffect } from 'react';

// components
import Modal from '../../Components/Modal';
import ConfirmOtp from './Tabs/ConfirmOtp';
import SendOtp from './Tabs/SendOtp';
import { getItem, removeItem } from '../../Services/Utility/LocalStorage';


// style
import './Security.css';
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
      <span>{minutes}:{seconds}</span>
  );
};

export default function Security() {
  const [options, setOptions] = useState({
    data: {},
    nextPage: false
  });

  const [accountSecurity, setAccountSecurity] = useState();

  useEffect(() => {
    setAccountSecurity(getItem('account_security'))
  }, [])
  
  return (
    <Modal title='امنیت حساب کاربری'>

    {accountSecurity ? 
      <Countdown className='counter-down' renderer={renderer} date={accountSecurity}  onComplete={() => {removeItem('account_security'); setAccountSecurity(null)}}></Countdown> :

      (!options.nextPage ? 
        <SendOtp paginate={{options, setOptions}}/>
      :
        <ConfirmOtp paginate={{options, setOptions}}/>
      )
    }
    </Modal>
  );
}
