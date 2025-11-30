import { useEffect, useState, useRef } from "react";
import Modal from "../../components/Modal";
import useTabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";
import DynastyTab from "./Tabs/dynasty/DynastyTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import SuggestionTab from "./Tabs/suggestion-tab/SuggestionTab";
import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";
import {  useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.activeTab == 4) {
      setCurrentTab(location.state?.activeTab);
    }
  }, [location]);

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      title: getFieldTranslationByNames("62"),
      content: <TotalTab />,
    },
    {
      title: getFieldTranslationByNames("150"),
      content: <PropertyTab />,
    },
    {
      title: getFieldTranslationByNames("61"),
      content: <TransactionsTab />,
    },
    {
      title: getFieldTranslationByNames("158"),
      content: <DynastyTab />,
    },
    { title: getFieldTranslationByNames("735"), content: <SuggestionTab /> },
  ];

  const TabPanel = useTabs(tabs, currentTab);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
