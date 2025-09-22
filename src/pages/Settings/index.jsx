import Modal from "../../components/Modal";
import useTabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";
import AccountTab from "./Tabs/account-tab/AccountTab";

import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";
import About from "./Tabs/aboutme-tab/AboutMeTab";
export default function Settings() {
  const tabs = [
    {
      title: getFieldTranslationByNames("639"),
      content: <PublicTab />,
    },
    {
      title: getFieldTranslationByNames("640"),
      content: <AccountTab />,
    },
    {
      title: getFieldTranslationByNames("641"),
      content: <SecurityTab />,
    },
    {
      title: getFieldTranslationByNames("95"),
      content: <About />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={"642"}>{TabPanel}</Modal>;
}
