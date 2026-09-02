import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs";
import { getTranslation } from "../../services/Utility";

export default function Report() {
  const tabs = [
    {
      path: "send",
      title: getTranslation("1386"),
    },
    {
      path: "list",

      title: getTranslation("22"),
    },
  ];

  return (
    <Modal type="modal-section-xl" title={23}>
      <Tabs items={tabs} />
    </Modal>
  );
}
