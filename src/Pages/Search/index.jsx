import ModalPosition from "../../Components/ModalPosition";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import CitizenTab from "./Tabs/citizen-tab/CitizenTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";

export default function Search() {
  const tabs = [
    {
      title: getFieldTranslationByNames("search-in-metarang", "citizen search"),
      content: <CitizenTab />,
    },
    {
      title: getFieldTranslationByNames(
        "search-in-metarang",
        "property search"
      ),
      content: <PropertyTab />,
    },
  ];

  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={["search-in-metarang", "central search"]}
      position={"left"}
    >
      {TabPanel}
    </ModalPosition>
  );
}
