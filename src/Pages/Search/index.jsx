import ModalSearch from "../../Components/ModalSearch";
import useTabs from "../../Services/Hooks/useTabs";
import CitizenSearch from "./Tabs/citizensearch.jsx";
import PropertySearch from "./Tabs/PropertySearch";

export default function Search() {
  const tabs = [
    { title: "جستجوی شهروند", content: <CitizenSearch /> },
    { title: "جستجوی ملک", content: <PropertySearch /> },
  ];



  const TabPanel = useTabs(tabs, 0, true);
  return <ModalSearch title={"جستجوی در متارنگ"}>{TabPanel}</ModalSearch>;
}
