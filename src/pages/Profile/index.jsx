import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs/index";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function Profile() {
  const tabs = [
    { path: "total", title: getFieldTranslationByNames("62"),  },
    { path: "property", title: getFieldTranslationByNames("150"), },
    { path: "transactions", title: getFieldTranslationByNames("61"), },
    { path: "dynasty", title: getFieldTranslationByNames("158"), },
    { path: "suggestion", title: getFieldTranslationByNames("735"), },
  ];

  return (
    <Modal title={"56"}>
      <Tabs items={tabs} />
    </Modal>
  );
}
