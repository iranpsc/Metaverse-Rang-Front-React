import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import CitizenTab from "./citizen-tab/CitizenTab";
import CitizenSearch from "./Tabs/Citizensearch";
import PropertySearch from "./Tabs/PropertySearch";

export default function Search() {
  const tabs = [
    { title: "جستجوی شهروند", content: <CitizenTab /> },
    { title: "جستجوی ملک", content: <PropertySearch /> },
  ];

  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition title={"جستجوی در متارنگ"} position={"left"}>
      {TabPanel}
    </ModalPosition>
  );
}
