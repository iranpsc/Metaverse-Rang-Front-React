import React, { useState } from "react";
import useTabs from "../../Services/Hooks/useTabs";
import Modal from "../../Components/Modal";
import BankTab from "./Tabs/bank-tab/BankTab";
import IdentityTab from "./Tabs/identity-tab/IdentityTab";

export default function Verification() {
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const tabs = [
    {
      title: "احراز هویت ",
      content: (
        <IdentityTab
          openErrorModal={openErrorModal}
          setOpenErrorModal={setOpenErrorModal}
        />
      ),
    },
    {
      title: "احراز بانکی",
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
    <Modal type="modal-section-md" title="احراز هویت">
      {TabPanel}
    </Modal>
  );
}
