import ModalPosition from "../../components/ModalPosition";
import Tabs from "../../services/Hooks/useTabs";
import { getTranslation } from "../../services/Utility";
export default function Search() {
  const tabs = [
    {
      path: "citizen",
      title: getTranslation("470"),
    },
    {
      path: "property",
      title: getTranslation("471"),
    },
  ];

  return (
    <ModalPosition title={"232"} position={"left"}>
      <Tabs items={tabs} />
    </ModalPosition>
  );
}
