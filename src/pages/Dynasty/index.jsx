import Modal from '../../Components/Modal';
import React from "react";
import useTabs from "../../Services/Hooks/useTabs";
import Members from "./Tab/Members";
import PropertyEstablishment from "./Tab/PropertyEstablishment";
import RequestReceived from "./Tab/RequestReceived";
import RequestSent from "./Tab/RequestSent";


export default function Dynasty() {
  const tabs = [
    { title: "تاسیس ملک", content: <PropertyEstablishment /> },
    { title: "اعضاء", content: <Members /> },
    { title: "درخواست ارسالی", content: <RequestSent/> },
    { title: "درخواست دریافتی", content: <RequestReceived /> },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type="modal-section-md" title="سلسله">
      {TabPanel}
    </Modal>
  );
}
