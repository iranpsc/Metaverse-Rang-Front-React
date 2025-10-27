import { useContext, useEffect, useState } from "react";
import { FeatureColor } from "../../services/constants/FeatureType";
import useAuth from "../../services/Hooks/useAuth";
import useTabs from "../../services/Hooks/useTabs";
import { FeatureContext } from "./Context/FeatureProvider";
import PropertyConstruction from "./Tabs/PropertyConstruction";
import { BuyerTab, InfoTab, SellerTab } from "./Tabs";
import EnterTab from "./Tabs/enter-tab/EnterTab";
import PhysicTab from "./Tabs/physic-tab/PhysicTab";
import HistoryTab from "./Tabs/history-tab/HistoryTab";
import ParticipationTab from "./Tabs/participation-tab/ParticipationTab";
import BuyerTabSystem from "./Tabs/BuyFromSystem/BuyerTab";
import { getFieldTranslationByNames } from "../../services/Utility";

export default function ConditionalPage() {
  const { getUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [feature] = useContext(FeatureContext);

  const commonSpecificationTab = {
    title: getFieldTranslationByNames("516"),
    content: <InfoTab />,
  };

  const SellTabs = [
    commonSpecificationTab,
    {
      title: getFieldTranslationByNames("352"),
      content: <SellerTab seller />,
    },
    {
      title: getFieldTranslationByNames("355"),
      content: <PropertyConstruction />,
    },
    {
      title: getFieldTranslationByNames("354"),
      content: <EnterTab owner />,
    },
    {
      title: getFieldTranslationByNames("356"),
      content: <PhysicTab owner />,
    },
    {
      title: getFieldTranslationByNames("3215"),
      content: <HistoryTab />,
    },
  ];
  const SellTabPanel = useTabs(SellTabs);

  const BuySystemTabs = [
    commonSpecificationTab,
    {
      title: getFieldTranslationByNames("353"),
      content: <BuyerTabSystem />,
    },
  ];
  const BuySystemTabPanel = useTabs(BuySystemTabs);

  const BuyUserTabs = [
    commonSpecificationTab,
    {
      title: getFieldTranslationByNames("353"),
      content: <BuyerTab />,
    },
    {
      title: getFieldTranslationByNames("354"),
      content: <EnterTab />,
    },
    {
      title: getFieldTranslationByNames("356"),
      content: <PhysicTab />,
    },
    {
      title: getFieldTranslationByNames("357"),
      content: <ParticipationTab />,
    },
    {
      title: getFieldTranslationByNames("325"),
      content: <HistoryTab />,
    },
  ];
  const BuyUserTabPanel = useTabs(BuyUserTabs);

  const AnonymousTabs = [commonSpecificationTab];
  const AnonymousTabPanel = useTabs(AnonymousTabs);

  useEffect(() => {
    const user = getUser();
    if (user?.id) {
      setUserId(parseInt(user.id));
    }
  }, [getUser]);

  if (!userId || !FeatureColor(feature?.properties?.rgb)) {
    return AnonymousTabPanel;
  }

  if (feature?.owner_id === 1) return BuySystemTabPanel;
  if (feature?.owner_id === userId) return SellTabPanel;
  if (feature?.owner_id !== userId) return BuyUserTabPanel;

  return AnonymousTabPanel;
}
