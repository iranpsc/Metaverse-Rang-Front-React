import { createContext, useContext, useState } from "react";

// ایجاد Context
const AccountSecurityContext = createContext();

// Provider برای مدیریت مقدار در سراسر برنامه
export const AccountSecurityProvider = ({ children }) => {
  const [accountSecurity, setAccountSecurity] = useState(false);

  return (
    <AccountSecurityContext.Provider value={{ accountSecurity, setAccountSecurity }}>
      {children}
    </AccountSecurityContext.Provider>
  );
};

// هوک سفارشی برای دسترسی به مقدار کانتکست
export const useAccountSecurity = () => useContext(AccountSecurityContext);
