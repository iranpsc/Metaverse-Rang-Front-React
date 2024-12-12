import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import DynastyTab from "./Tabs/dynasty/DynastyTab";

import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";

import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {
  const tabs = [
    {
      title: getFieldTranslationByNames(360),
      content: <TotalTab />,
    },
    {
      title: getFieldTranslationByNames(15013),
      content: <PropertyTab />,
    },
    {
      title: getFieldTranslationByNames(357),
      content: <TransactionsTab />,
    },
    {
      title: getFieldTranslationByNames(358),
      content: <DynastyTab />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={351}>{TabPanel}</Modal>;
}
