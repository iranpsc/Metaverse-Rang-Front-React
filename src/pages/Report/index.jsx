import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function Report() {
  const tabs = [
    {
      path: "send",
      title: getFieldTranslationByNames("1386"),
    },
    {
      path: "list",

      title: getFieldTranslationByNames("22"),
    },
  ];

  return (
    <Modal type="modal-section-xl" title={23}>
      <Tabs items={tabs} />
    </Modal>
  );
}
