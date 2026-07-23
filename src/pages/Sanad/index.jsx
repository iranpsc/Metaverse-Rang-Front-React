import React from "react";
import Modal from "../../components/Modal";
import Tabs from "../../services/Hooks/useTabs/index";
import { getTranslation } from "../../services/Utility";
export default function Sanad() {
  const tabs = [
    { path: "write", title: getTranslation("1314") },
    { path: "list", title: getTranslation("1316") },
    { path: "notes", title: getTranslation("1317") },
  ];

  return (
        <Modal title={"1315"}>
          <Tabs items={tabs} />
        </Modal>
  );
}
