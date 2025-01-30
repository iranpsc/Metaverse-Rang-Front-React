import useActivity from "../../../../Services/Hooks/useActivity";
import Features from "./Tabs/Features";
import Followers from "./Tabs/Followers";
import Following from "./Tabs/Following";

export default function Property() {
  const tabs = [
    {
      name: getFieldTranslationByNames(288),
      component: <Features />,
    },
    {
      name: getFieldTranslationByNames(291),
      component: <Following />,
    },
    {
      name: getFieldTranslationByNames(294),
      component: <Followers />,
    },
  ];

  const activity = useActivity(tabs);

  return activity;
}
