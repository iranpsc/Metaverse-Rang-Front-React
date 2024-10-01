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
import ParticipationTab from "./Tabs/participation-tab/ParticipationTab";
import BuyerTabSystem from "./Tabs/BuyFromSystem/BuyerTab";
import { getFieldTranslationByNames } from "../../Services/Utility";

export default function ConditionalPage() {
  const { getUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [feature] = useContext(FeatureContext);

  const SellTabs = [
    {
      title: getFieldTranslationByNames(
        "property-information",
        "specification"
      ),
      content: <InfoTab />,
    },
    {
      title: getFieldTranslationByNames("property-information", "pricing"),
      content: <SellerTab />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "construction of the building"
      ),
      content: <PropertyConstruction />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "entering the property"
      ),
      content: <EnterTab owner />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "physical information"
      ),
      content: <PhysicTab owner />,
    },
  ];
  const SellTabPanel = useTabs(SellTabs);

  const BuySystemTabs = [
    {
      title: getFieldTranslationByNames(
        "property-information",
        "specification"
      ),
      content: <InfoTab />,
    },
    {
      title: getFieldTranslationByNames("property-information", "buy"),
      content: <BuyerTabSystem />,
    },
  ];
  const BuySystemTabPanel = useTabs(BuySystemTabs);

  const BuyUserTabs = [
    {
      title: getFieldTranslationByNames(
        "property-information",
        "specification"
      ),
      content: <InfoTab />,
    },
    {
      title: getFieldTranslationByNames("property-information", "pricing"),
      content: <SellerTab />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "entering the property"
      ),
      content: <EnterTab />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "physical information"
      ),
      content: <PhysicTab owner />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "participation in construction"
      ),
      content: <ParticipationTab />,
    },
    {
      title: getFieldTranslationByNames("property-information", "history"),
      content: <HistoryTab />,
    },
  ];
  const BuyUserTabPanel = useTabs(BuyUserTabs);

  const AnonymousTabs = [
    {
      title: getFieldTranslationByNames(
        "property-information",
        "specification"
      ),
      content: <InfoTab />,
    },
  ];
  const AnonymousTabPanel = useTabs(AnonymousTabs);

  const UnityTabs = [
    {
      title: getFieldTranslationByNames(
        "property-information",
        "specification"
      ),
      content: <InfoTab />,
    },
    {
      title: getFieldTranslationByNames(
        "property-information",
        "entering the property"
      ),
      content: <UnityTab />,
    },
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
