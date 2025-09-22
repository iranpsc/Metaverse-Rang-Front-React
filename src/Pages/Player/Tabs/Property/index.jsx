import useActivity from "../../../../services/Hooks/useActivity";
import Features from "./Tabs/Features";
import Followers from "./Tabs/Followers";
import Following from "./Tabs/Following";

export default function Property() {
  const tabs = [
    {
      name: getFieldTranslationByNames("58"),
      component: <Features />,
    },
    {
      name: getFieldTranslationByNames("38"),
      component: <Following />,
    },
    {
      name: getFieldTranslationByNames("55"),
      component: <Followers />,
    },
  ];

  const activity = useActivity(tabs);

  return activity;
}
