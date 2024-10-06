import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import AccountTab from "./Tabs/account-tab/AccountTab";

import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";
import About from "./Tabs/aboutme-tab/AboutMeTab";
export default function Settings() {
  
  const tabs = [
    { title: "تنظیمات عمومی", content: <PublicTab /> },
    { title: "حساب کاربری", content: <AccountTab /> },
    { title: "حریم  خصوصی", content: <SecurityTab /> },
    { title: "درباره  من", content: <About /> }
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title="تنظیمات">{TabPanel}</Modal>;
}
