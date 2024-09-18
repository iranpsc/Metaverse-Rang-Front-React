import React from "react";

import useTabs from "../../Services/Hooks/useTabs";
import ToolTab from "./shop/tool-tab/ToolTab";
import CurrencyTab from "./shop/currency-tab/CurrencyTab";
import ShopInfo from "./shop/ShopInfo";
import Modal from "../../Components/Modal/index";
import { getFieldTranslationByNames } from "../../Services/Utility";

export default function Store() {
  const tabs = [
    {
      title: getFieldTranslationByNames("store", "tools"),
      content: <ToolTab />,
    },
    {
      title: getFieldTranslationByNames("store", "currencies"),
      content: <CurrencyTab />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal title={["store", "store"]}>
      {TabPanel}
      <ShopInfo />
    </Modal>
  );
}
