import { useState, useEffect } from 'react';
import AccountSecurityModal from '../../pages/AccountSecurity';
import axios from 'axios';


const Error410Modal = () => {
  const [show410Error, setShow410Error] = useState(false);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 410) {
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