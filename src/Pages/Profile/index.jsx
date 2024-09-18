import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";

import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";

import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {
  const tabs = [
    {
      title: getFieldTranslationByNames("citizenship-account", "general"),
      content: <TotalTab />,
    },
    {
      title: getFieldTranslationByNames("citizenship-account", "property"),
      content: <PropertyTab />,
    },
    {
      title: getFieldTranslationByNames("citizenship-account", "transactions"),
      content: <TransactionsTab />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal title={["citizenship-account", "citizenship account"]}>
      {TabPanel}
    </Modal>
  );
}
