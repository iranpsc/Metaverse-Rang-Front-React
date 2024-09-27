import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import AccountTab from "./Tabs/account-tab/AccountTab";

import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";

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
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={["setting", "settings"]}>{TabPanel}</Modal>;
}
