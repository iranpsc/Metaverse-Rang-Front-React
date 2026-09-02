import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs/index";
import { getTranslation } from "../../services/Utility";
export default function Settings() {
  const tabs = [
    {
      path: "public",
      title: getTranslation("639"),
    },
    {
      path: "account",
      title: getTranslation("640"),
    },
    {
      path: "security",
      title: getTranslation("641"),
    },
    {
      path: "about",
      title: getTranslation("95"),
    },
  ];


  return (
    <Modal title={"642"}>
      <Tabs items={tabs} />
    </Modal>
  );
}
