import React from "react";
import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import HourProfit from "./Tabs/HourProfit";

const HourMeterProfit = () => {
  const tabs = [
    { title: "سود املاک", content: <HourProfit /> },
  ];
  const TabPanel = useTabs(tabs,0, true);
  return <ModalPosition title={" جذب سود ساعت شمار"} position={"right"}>{TabPanel}</ModalPosition>;
};

export default HourMeterProfit;
