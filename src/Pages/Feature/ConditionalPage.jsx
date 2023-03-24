import React, { useContext, useEffect, useState } from "react";
import { FeatureColor } from "../../Services/Constants/FeatureType";
import useAuth from "../../Services/Hooks/useAuth";
import useTabs from "../../Services/Hooks/useTabs";
import { FeatureContext } from "./Context/FeatureProvider";
import UnityTab from "./Tabs/3d";
import BuyFromSystem from "./Tabs/BuyFromSystem";
import BuyFromUser from "./Tabs/BuyFromUser";
import Property from "./Tabs/Property";
import Sell from "./Tabs/Sell";

export default function ConditionalPage() {
  const { getUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [feature] = useContext(FeatureContext);

  const SellTabs = [
    { title: "خصوصیات", content: <Property /> },
    { title: "قیمت گذاری", content: <Sell /> },
  ];
  const SellTabPanel = useTabs(SellTabs);

  const BuySystemTabs = [
    { title: "خصوصیات", content: <Property /> },
    { title: "خرید", content: <BuyFromSystem /> },
  ];
  const BuySystemTabPanel = useTabs(BuySystemTabs);

  const BuyUserTabs = [
    { title: "خصوصیات", content: <Property /> },
    { title: "خرید", content: <BuyFromUser /> },
  ];
  const BuyUserTabPanel = useTabs(BuyUserTabs);

  const AnonymousTabs = [
    { title: "خصوصیات", content: <Property /> },
    { title: "ورود بخ ملک", content: <UnityTab /> }
  ];
  const AnonymousTabPanel = useTabs(AnonymousTabs);

  const UnityTabs = [
    { title: "خصوصیات", content: <Property /> },
    { title: "ورود بخ ملک", content: <UnityTab /> },
  ];
  const UnityTabPanel = useTabs(UnityTabs);
  useEffect(() => {
    const user = getUser();

    if (user?.id) {
      setUserId(parseInt(user?.id));
    }
  }, [getUser]);
  console.log(feature?.properties?.rgb);
  return (
    <>
      {userId && FeatureColor(feature?.properties?.rgb) ? (
        <>
          {feature?.owner_id === userId && SellTabPanel}
          {feature?.owner_id === 1 && BuySystemTabPanel}
          {feature?.owner_id !== 1 &&
            feature?.owner_id !== userId &&
            BuyUserTabPanel}
          {feature.id == 6220 && UnityTabPanel}
        </>
      ) : (
        AnonymousTabPanel
      )}
    </>
  );
}
