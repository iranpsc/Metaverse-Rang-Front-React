import useActivity from "../../../../Services/Hooks/useActivity";
import Features from "./Tabs/Features";
import Followers from "./Tabs/Followers";
import Following from "./Tabs/Following";

export default function Property() {
  const tabs = [
    {
      name: getFieldTranslationByNames("citizenship-account", "real estates"),
      component: <Features />,
    },
    {
      name: getFieldTranslationByNames("citizenship-account", "followers"),
      component: <Following />,
    },
    {
      name: getFieldTranslationByNames("citizenship-account", "following"),
      component: <Followers />,
    },
  ];

  const activity = useActivity(tabs);

  return activity;
}
