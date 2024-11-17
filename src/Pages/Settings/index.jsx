import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import AccountTab from "./Tabs/account-tab/AccountTab";

import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";
import About from "./Tabs/aboutme-tab/AboutMeTab";
export default function Settings() {
  const tabs = [
    {
      title: getFieldTranslationByNames(7943),
      content: <PublicTab />,
    },
    {
      title: getFieldTranslationByNames(7950),
      content: <AccountTab />,
    },
    {
      title: getFieldTranslationByNames(7957),
      content: <SecurityTab />,
    },
    {
      title: getFieldTranslationByNames(8706),
      content: <About />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={7965}>{TabPanel}</Modal>;
}
