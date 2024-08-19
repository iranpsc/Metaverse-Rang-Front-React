import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import General from "./Tabs/General";
import Property from "./Tabs/Property";
import PropertyTab from "./Tabs/property-tab/PropertyTab";
import TotalTab from "./Tabs/total-tab/TotalTab";
import Transactions from "./Tabs/Transactions";
import TransactionsTab from "./Tabs/transactions-tab/TransactionsTab";

export default function Profile() {
  const tabs = [
    { title: "کلیات", content: <TotalTab /> },
    { title: "دارایی", content: <PropertyTab /> },
    { title: "تراکنش ها", content: <TransactionsTab /> },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title="حساب کاربری">{TabPanel}</Modal>;
}
