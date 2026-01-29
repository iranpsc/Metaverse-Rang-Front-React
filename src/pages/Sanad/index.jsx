import React from "react";
import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs/index";
import { getFieldTranslationByNames } from "../../services/Utility";
export default function Sanad() {
  const tabs = [
    { path: "write", title: getFieldTranslationByNames("1314") },
    { path: "list", title: getFieldTranslationByNames("1316") },
    { path: "notes", title: getFieldTranslationByNames("1317") },
  ];

  return (
        <Modal title={"1315"}>
          <Tabs items={tabs} />
        </Modal>
  );
}
