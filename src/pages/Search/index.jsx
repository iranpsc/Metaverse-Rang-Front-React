import ModalPosition from "../../components/ModalPosition";
import useTabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";
import CitizenTab from "./Tabs/citizen-tab/CitizenTab";
import PropertyTab from "./Tabs/property-tab/PropertyTab";

export default function Search() {
  const tabs = [
    {
      title: getFieldTranslationByNames("470"),
      content: <CitizenTab />,
    },
    {
      title: getFieldTranslationByNames("471"),
      content: <PropertyTab />,
    },
  ];

  const TabPanel = useTabs(tabs, 0, true);
  return (
    <ModalPosition
      title={"232"}
      position={"left"}
    >
      {TabPanel}
    </ModalPosition>
  );
}
