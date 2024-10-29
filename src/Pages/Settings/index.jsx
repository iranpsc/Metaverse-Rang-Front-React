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
      title: getFieldTranslationByNames("setting", "general settings"),
      content: <PublicTab />,
    },
    {
      title: getFieldTranslationByNames("setting", "access management"),
      content: <AccountTab />,
    },
    {
      title: getFieldTranslationByNames("setting", "privacy"),
      content: <SecurityTab />,
    },
   { title: "درباره  من", content: <About /> }

  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={["setting", "settings"]}>{TabPanel}</Modal>;
}
