import Tabs from "../../services/Hooks/useTabs";
import Modal from "../../components/Modal";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function Verification() {
  const tabs = [
    {
      path: "identity",
      title: getFieldTranslationByNames("867"),
    },
    {
      path: "bank",
      title: getFieldTranslationByNames("868"),
    },
  ];

  return (
    <Modal type="modal-section-md" title={"867"}>
      <Tabs items={tabs} />
    </Modal>
  );
}
