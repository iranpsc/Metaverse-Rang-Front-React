import { useState, useEffect } from 'react';
import useRequest from '../useRequest';

const useAdviserData = (newStr, locationState) => {
  const [adviserData, setAdviserData] = useState({});
  const { Request, HTTP_METHOD } = useRequest();
  const pageMappings = {
    'settings-1': { urlRequest: 'setting', adviserPage: 'general-setting-desktop' },
    'settings-2': { urlRequest: 'setting', adviserPage: 'account-setting-desktop' },
    'profile-1': { urlRequest: 'profile', adviserPage: 'owner-specifications-desktop' },
    'profile-2': { urlRequest: 'profile', adviserPage: 'owner-property-feature-desktop' },
    'login-': { urlRequest: 'login', adviserPage: 'login-desktop' },
    'signup-': { urlRequest: 'register', adviserPage: 'register-desktop' },
    'store-1': { urlRequest: 'shop', adviserPage: 'shop-tools-desktop' },
    'store-2': { urlRequest: 'shop', adviserPage: 'shop-currency-desktop' },
    'sanad-1': { urlRequest: 'sanad', adviserPage: 'vod-send-desktop' },
    'sanad-2': { urlRequest: 'sanad', adviserPage: 'vod-note-desktop' },
    'report-1': { urlRequest: 'reports', adviserPage: 'reports-report-desktop' },
    'verification-1': { urlRequest: 'kyc', adviserPage: 'kyc-man-desktop' },
    'verification-2': { urlRequest: 'kyc', adviserPage: 'kyc-attachment-desktop' },
    'verification-3': { urlRequest: 'kyc', adviserPage: 'kyc-bank-desktop' },
    'confirmation-': { urlRequest: 'account-security', adviserPage: 'account-security-code-desktop' },
    'dynasty-1': { urlRequest: 'dynasty', adviserPage: 'request-received-desktop' },
    'dynasty-2': { urlRequest: 'dynasty', adviserPage: 'submitted-request-desktop' },
    'dynasty-3': { urlRequest: 'dynasty', adviserPage: 'family-members-desktop' },
    'dynasty-4': { urlRequest: 'dynasty', adviserPage: 'establishment-desktop' },
    'notifications-': { urlRequest: 'notification', adviserPage: 'notifications-desktop' },
  };
  
  const { urlRequest, adviserPage } = pageMappings[locationState || newStr] || {};
  
  useEffect(() => {
    if (!urlRequest || !adviserPage) return;
  
    Request('video-tutorials', HTTP_METHOD.POST, { url: `tutorials/${urlRequest}/${adviserPage}` })
      .then((response) => {
        setAdviserData(response.data.data);
      });
  }, [urlRequest, adviserPage]);
  
  return adviserData;
};

export default useAdviserData;
