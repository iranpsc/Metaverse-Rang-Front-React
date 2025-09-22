import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import Modal from "../../Components/Modal";
import useTabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";
import DynastyTab from "./Tabs/dynasty/DynastyTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import SuggestionTab from "./Tabs/suggestion-tab/SuggestionTab";
import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {

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
    { title: getFieldTranslationByNames("735"), 
     content: <SuggestionTab /> }
  ];



  const TabPanel = useTabs(tabs, currentTab);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
