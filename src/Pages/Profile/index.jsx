import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import DynastyTab from "./Tabs/dynasty/DynastyTab";
import { useAccountSecurity } from "../../Services/Reducers/accountSecurityContext"; // ایمپورت کانتکست
import { useEffect, useState } from "react";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import SuggestionTab from "./Tabs/suggestion-tab/SuggestionTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {
  const { accountSecurity, setAccountSecurity } = useAccountSecurity(); 
  const [currentTab, setCurrentTab] = useState(0); 

  const tabs = [
    { title: getFieldTranslationByNames("62"), content: <TotalTab /> },
    { title: getFieldTranslationByNames("150"), content: <PropertyTab /> },
    { title: getFieldTranslationByNames("61"), content: <TransactionsTab /> },
    { title: getFieldTranslationByNames(358), content: <DynastyTab /> },
    { title: getFieldTranslationByNames("735"), content: <SuggestionTab /> },
  ];

  useEffect(() => {
    if (accountSecurity) {

      // مقدار تب را به صورت داینامیک تنظیم می‌کنیم
      const suggestionTabIndex = tabs.findIndex(
        (tab) => tab.title === getFieldTranslationByNames(8790)
      );

      setCurrentTab(suggestionTabIndex); // مقدار جدید برای انتخاب تب
      setAccountSecurity(false); // مقدار را ریست می‌کنیم
    }
  }, [accountSecurity, setAccountSecurity]);


  const TabPanel = useTabs(tabs, currentTab);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
