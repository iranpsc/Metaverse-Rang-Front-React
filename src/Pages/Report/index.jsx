import React from "react";

import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import Problem from "./Tabs/Problem";

export default function Report() {
  const tabs = [{ title: "گزارش خطا", content: <Problem /> }];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type="modal-section-xl" title="گزارشات ">
      {TabPanel}
    </Modal>
  );
}
