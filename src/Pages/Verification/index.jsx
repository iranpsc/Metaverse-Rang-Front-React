import React, { useState } from "react";
import useTabs from "../../Services/Hooks/useTabs";
import Modal from "../../Components/Modal";
import BankTab from "./Tabs/bank-tab/BankTab";
import IdentityTab from "./Tabs/identity-tab/IdentityTab";
import { getFieldTranslationByNames } from "../../Services/Utility";

export default function Verification() {
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const tabs = [
    {
      title: getFieldTranslationByNames("authentication", "authentication"),
      content: (
        <IdentityTab
          openErrorModal={openErrorModal}
          setOpenErrorModal={setOpenErrorModal}
        />
      ),
    },
    {
      title: getFieldTranslationByNames("authentication", "authentication"),
      content: (
        <BankTab
          openErrorModal={openErrorModal}
          setOpenErrorModal={setOpenErrorModal}
        />
      ),
    },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type="modal-section-md" title={["authentication", "authentication"]}>
      {TabPanel}
    </Modal>
  );
}
