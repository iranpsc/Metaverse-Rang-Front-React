import React from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import Currency from "./Tabs/Currency";
import Tools from "./Tabs/Tools";


export default function Store() {
  const tabs = [
    { title: "ابزار ها", content: <Tools /> },
    { title: "ارز ها", content: <Currency /> }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal title="فروشگاه" type="modal-section-md">
      {TabPanel}
    </Modal>
  );
}
