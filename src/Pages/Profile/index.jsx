import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import General from "./Tabs/General";
import Property from "./Tabs/Property";
import Transactions from "./Tabs/Transactions";

export default function Profile() {
  const tabs = [
    { title: "کلیات", content: <TotalTab /> },
    { title: "دارایی", content: <Property /> },
    { title: "تراکنش ها", content: <Transactions /> },
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title="حساب کاربری">{TabPanel}</Modal>;
}
