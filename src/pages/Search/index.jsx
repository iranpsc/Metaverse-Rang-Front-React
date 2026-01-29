import ModalPosition from "../../components/ModalPosition";
import Tabs from "../../services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../services/Utility";
export default function Search() {
  const tabs = [
    {
      path: "citizen",
      title: getFieldTranslationByNames("470"),
    },
    {
      path: "property",
      title: getFieldTranslationByNames("471"),
    },
  ];

  return (
    <ModalPosition title={"232"} position={"left"}>
      <Tabs items={tabs} />
    </ModalPosition>
  );
}
