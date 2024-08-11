import React from "react";

import useTabs from "../../Services/Hooks/useTabs";
import ToolTab from "./shop/tool-tab/ToolTab";
import CurrencyTab from "./shop/currency-tab/CurrencyTab";
import ShopInfo from "./shop/ShopInfo";
import Modal from "../../Components/Modal/index";

export default function Store() {
  const tabs = [
    { title: "ابزار ها", content: <ToolTab /> },
    { title: "ارز ها", content: <CurrencyTab /> },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal title="فروشگاه">
      {TabPanel}
      <ShopInfo />
    </Modal>
  );
}
