import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import AccountTab from "./Tabs/account-tab/AccountTab";
import AccountSetting from "./Tabs/AccountSetting";
import GeneralSettings from "./Tabs/GeneralSettings";
import Privacy from "./Tabs/Privacy";
import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";

export default function Settings() {
  const tabs = [
    { title: "تنظیمات عمومی", content: <PublicTab /> },
    { title: "حساب کاربری", content: <AccountTab /> },
    { title: "حریم  خصوصی", content: <SecurityTab /> },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title="تنظیمات">{TabPanel}</Modal>;
}
