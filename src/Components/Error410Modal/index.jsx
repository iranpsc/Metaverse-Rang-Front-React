import { useState, useEffect } from 'react';
import AccountSecurityModal from '../../pages/AccountSecurity';
import axios from 'axios';
import { ToastError } from '../../Services/Utility';


const Error410Modal = () => {
  const [show410Error, setShow410Error] = useState(false);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!")
          setShow410Error(true);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  if (!show410Error) return null;
  
  const handleClose = () => {
    setShow410Error(false);
  };

  return <AccountSecurityModal onClose={handleClose} />;
};

export default Error410Modal;