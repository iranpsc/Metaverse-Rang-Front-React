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
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
