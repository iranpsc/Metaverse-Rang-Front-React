import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs/index";
import { getFieldTranslationByNames } from "../../services/Utility";
import AccountTab from "./Tabs/account-tab/AccountTab";

import PublicTab from "./Tabs/public-tab/PublicTab";
import SecurityTab from "./Tabs/security-tab/SecurityTab";
import About from "./Tabs/aboutme-tab/AboutMeTab";
export default function Settings() {
  const tabs = [
    {
      path: "public",
      title: getFieldTranslationByNames("639"),
    },
    {
      path: "account",
      title: getFieldTranslationByNames("640"),
    },
    {
      path: "security",
      title: getFieldTranslationByNames("641"),
    },
    {
      path: "about",
      title: getFieldTranslationByNames("95"),
    },
  ];


  return (
    <Modal title={"642"}>
      <Tabs items={tabs} />
    </Modal>
  );
}
