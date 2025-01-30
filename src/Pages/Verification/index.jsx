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
      title: getFieldTranslationByNames("867"),
      content: (
        <IdentityTab
          openErrorModal={openErrorModal}
          setOpenErrorModal={setOpenErrorModal}
        />
      ),
    },
    {
      title: getFieldTranslationByNames("868"),
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
    <Modal type="modal-section-md" title={"867"}>
      {TabPanel}
    </Modal>
  );
}
