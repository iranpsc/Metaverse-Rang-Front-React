import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import PropertyTab from "../Profile/Tabs/property-tab/PropertyTab";
import TotalTab from "../Profile/Tabs/total-tab/TotalTab";



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
  ];

  const TabPanel = useTabs(tabs);

  return <Modal title={"56"}>{TabPanel}</Modal>;
}
