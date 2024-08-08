import React from "react";
import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import HourProfit from "./Tabs/HourProfit";
import ProfitView from "./Components/ProfitView";

const HourMeterProfit = () => {
  const tabs = [{ title: "سود املاک", content: <ProfitView /> }];
  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition title={" جذب سود ساعت شمار"} position={"right"}>
      {TabPanel}
    </ModalPosition>
  );
};

export default HourMeterProfit;
