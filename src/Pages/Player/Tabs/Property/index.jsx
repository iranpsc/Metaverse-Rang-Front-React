import useActivity from "../../../../Services/Hooks/useActivity";
import Features from "./Tabs/Features";
import Followers from "./Tabs/Followers";
import Following from "./Tabs/Following";


export default function Property() {
  const tabs = [
      {name: 'املاک و مستغلات', component: <Features/>},
      {name: 'دنبال شوندگان', component: <Following/>},
      {name: 'پیروان', component: <Followers/>},
  ]

  const activity = useActivity(tabs)

  return (
    activity
  );
}
