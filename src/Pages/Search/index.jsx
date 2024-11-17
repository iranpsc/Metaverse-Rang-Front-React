import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import CitizenTab from "./Tabs/citizen-tab/CitizenTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";

export default function Search() {
  const tabs = [
    {
      title: getFieldTranslationByNames(6326),
      content: <CitizenTab />,
    },
    {
      title: getFieldTranslationByNames(6333),
      content: <PropertyTab />,
    },
  ];

  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={6319}
      position={"left"}
    >
      {TabPanel}
    </ModalPosition>
  );
}
