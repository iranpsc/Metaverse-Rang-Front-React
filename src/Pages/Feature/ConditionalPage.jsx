import React, { useContext, useEffect, useState } from "react";
import { FeatureColor } from "../../Services/Constants/FeatureType";
import useAuth from "../../Services/Hooks/useAuth";
import useTabs from "../../Services/Hooks/useTabs";
import { FeatureContext } from "./Context/FeatureProvider";
import UnityTab from "./Tabs/3d";
import BuyFromSystem from "./Tabs/BuyFromSystem";
import PropertyConstruction from "./Tabs/PropertyConstruction";
import { BuyerTab, InfoTab, SellerTab } from "./Tabs";
import EnterTab from "./Tabs/enter-tab/EnterTab";
import PhysicTab from "./Tabs/physic-tab/PhysicTab";
import HistoryTab from "./Tabs/history-tab/HistoryTab";

export default function ConditionalPage() {
  const { getUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [feature] = useContext(FeatureContext);

  const SellTabs = [
    { title: "خصوصیات", content: <InfoTab /> },
    { title: "قیمت گذاری", content: <SellerTab /> },
    { title: "ساخت بنا", content: <PropertyConstruction /> },
    { title: "ورود به ملک", content: <EnterTab owner /> },
    { title: "اطلاعات فیزیکی", content: <PhysicTab owner /> },
  ];
  const SellTabPanel = useTabs(SellTabs);

  const BuySystemTabs = [
    { title: "خصوصیات", content: <InfoTab /> },
    { title: "خرید", content: <BuyFromSystem /> },
  ];
  const BuySystemTabPanel = useTabs(BuySystemTabs);

  const BuyUserTabs = [
    { title: "خصوصیات", content: <InfoTab /> },
    { title: "خرید", content: <BuyerTab /> },
    { title: "ورود به ملک", content: <EnterTab /> },
    { title: "اطلاعات فیزیکی", content: <PhysicTab /> },
    { title: "تاریخچه خرید", content: <HistoryTab /> },
  ];
  const BuyUserTabPanel = useTabs(BuyUserTabs);

  const AnonymousTabs = [{ title: "خصوصیات", content: <InfoTab /> }];
  const AnonymousTabPanel = useTabs(AnonymousTabs);

  const UnityTabs = [
    { title: "خصوصیات", content: <InfoTab /> },
    { title: "ورود به ملک", content: <UnityTab /> },
  ];
  const UnityTabPanel = useTabs(UnityTabs);
  useEffect(() => {
    const user = getUser();

    if (user?.id) {
      setUserId(parseInt(user?.id));
    }
  }, [getUser]);

  if (userId && FeatureColor(feature?.properties?.rgb)) {
    if (feature.id == 6220) {
      return UnityTabPanel;
    } else if (feature.id == 6221) {
      return UnityTabPanel;
    } else if (feature?.owner_id === 1) {
      return BuySystemTabPanel;
    } else if (feature?.owner_id !== 1 && feature?.owner_id !== userId) {
      return BuyUserTabPanel;
    } else if (feature?.owner_id === userId) {
      return SellTabPanel;
    }
  } else {
    return AnonymousTabPanel;
  }
}
