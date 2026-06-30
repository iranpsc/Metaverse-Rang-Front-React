import Tabs from "../../services/Hooks/useTabs";
import ShopInfo from "./shop/ShopInfo";
import Modal from "../../components/Modal/index";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function Store() {
  const tabs = [
    {
      path: "tools",
      title: getFieldTranslationByNames("109"),
    },
    {
      path: "currency",
      title: getFieldTranslationByNames("110"),
    },
  ];

  return (
    <Modal title={"30"}>
      <Tabs items={tabs} />
      <ShopInfo />
    </Modal>
  );
}
