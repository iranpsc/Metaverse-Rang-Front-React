import React from "react";
import ModalPosition from "../../components/ModalPosition";
import Tabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";

const HourMeterProfit = () => {
  const tabs = [
    {
      path: "profit",
      title: getFieldTranslationByNames("27"),

    },
  ];
  return (
    <ModalPosition title={"26"} position={"right"}>
      <Tabs items={tabs} />
    </ModalPosition>
  );
};

export default HourMeterProfit;
