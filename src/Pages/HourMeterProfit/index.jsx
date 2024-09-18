import React from "react";
import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import ProfitView from "./Components/ProfitView";
import { getFieldTranslationByNames } from "../../Services/Utility";

const HourMeterProfit = () => {
  const tabs = [
    {
      title: getFieldTranslationByNames(
        "hour-meter-profit",
        "property interest"
      ),
      content: <ProfitView />,
    },
  ];
  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={["hour-meter-profit", "hourly profit absorption"]}
      position={"right"}
    >
      {TabPanel}
    </ModalPosition>
  );
};

export default HourMeterProfit;
