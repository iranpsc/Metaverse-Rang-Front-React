import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import CitizenTab from "./Tabs/citizen-tab/CitizenTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";

export default function Search() {
  const tabs = [
    { title: "جستجوی شهروند", content: <CitizenTab /> },
    { title: "جستجوی ملک", content: <PropertyTab /> },
  ];

  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition title={"جستجوی در متارنگ"} position={"left"}>
      {TabPanel}
    </ModalPosition>
  );
}
