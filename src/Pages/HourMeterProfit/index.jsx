import React from "react";
import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import ProfitView from "./Components/ProfitView";
import { getFieldTranslationByNames } from "../../Services/Utility";

const HourMeterProfit = () => {
  const tabs = [
    {
      title: getFieldTranslationByNames(153),
      content: <ProfitView />,
    },
  ];
  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={150}
      position={"right"}
    >
      {TabPanel}
    </ModalPosition>
  );
};

export default HourMeterProfit;
