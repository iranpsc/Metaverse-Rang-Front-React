import React, { useState } from "react";
import useTabs from "../../Services/Hooks/useTabs";

import Modal from "../../Components/Modal";
import PersonalVerification from "./Tabs/PersonalVerification";
import SendDocuments from "./Tabs/SendDocuments";
import BankVerification from "./Tabs/BankVerification";
import KycProvider from "./Context/KycProvider";

export default function Verification() {
  const [defaultTab, setDefaultTab] = useState(0);

  const tabs = [
    { title: "احراز فردی", content: <PersonalVerification setDefaultTab={setDefaultTab} /> },
    { title: "ارسال مدارک", content: <SendDocuments setDefaultTab={setDefaultTab}/> },
    { title: "احراز بانکی", content: <BankVerification /> }
  ];

  const TabPanel = useTabs(tabs, defaultTab);

  return (
    <KycProvider>
      <Modal type="modal-section-md" title="احراز هویت">
        {TabPanel}
      </Modal>
    </KycProvider>
  );
}
