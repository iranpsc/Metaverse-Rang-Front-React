import React from "react";
import ModalPosition from "../../components/ModalPosition";
import useTabs from "../../services/Hooks/useTabs";
import ProfitView from "./components/ProfitView";
import { getFieldTranslationByNames } from "../../services/Utility";

const HourMeterProfit = () => {
  const tabs = [
    {
      title: getFieldTranslationByNames("27"),
      content: <ProfitView />,
    },
  ];
  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={"26"}
      position={"right"}
    >
      {TabPanel}
    </ModalPosition>
  );
};

export default HourMeterProfit;
