import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import DynastyTab from "./Tabs/dynasty/DynastyTab";
import { useAccountSecurity } from "../../Services/Reducers/accountSecurityContext";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import SuggestionTab from "./Tabs/suggestion-tab/SuggestionTab";
import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {
  const location = useLocation(); 
  const { accountSecurity, setAccountSecurity } = useAccountSecurity(); 
  const [currentTab, setCurrentTab] = useState(0); 

  const tabs = [
    { title: getFieldTranslationByNames("62"), content: <TotalTab /> },
    { title: getFieldTranslationByNames("150"), content: <PropertyTab /> },
    { title: getFieldTranslationByNames("61"), content: <TransactionsTab /> },
    { title: getFieldTranslationByNames("735"), content: <SuggestionTab /> },
  ];

  useEffect(() => {

    if (accountSecurity) {
      const suggestionTabIndex = tabs.findIndex(
        (tab) => tab.title === getFieldTranslationByNames("735")
      );

      setCurrentTab(suggestionTabIndex);
      setAccountSecurity(false);
    }
  }, [accountSecurity, setAccountSecurity, location.state]); 

  const TabPanel = useTabs(tabs, currentTab);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
