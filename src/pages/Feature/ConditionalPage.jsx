import { useContext, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../services/Hooks/useAuth";
import Tabs from "../../services/Hooks/useTabs";
import { FeatureContext } from "./Context/FeatureProvider";
import { FeatureColor } from "../../services/constants/FeatureType";
import { getFieldTranslationByNames } from "../../services/Utility";
// Tabs
import { BuyerTab, InfoTab, SellerTab } from "./Tabs";
import PropertyConstruction from "./Tabs/PropertyConstruction";
import EnterTab from "./Tabs/enter-tab/EnterTab";
import PhysicTab from "./Tabs/physic-tab/PhysicTab";
import ParticipationTab from "./Tabs/participation-tab/ParticipationTab";
import BuyerTabSystem from "./Tabs/BuyFromSystem/BuyerTab";

export default function ConditionalPage() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [feature] = useContext(FeatureContext);
  const isFeatureReady = !!feature && !!feature?.properties && userId !== null;

  const status = feature?.construction_status?.[0]?.status;

  const commonTab = {
    path: "info",
    title: getFieldTranslationByNames("516"),
    content: <InfoTab />,
  };

  const SellTabs = useMemo(
    () => [
      commonTab,

      ...(status === undefined || status === "completed"
        ? [
            {
              path: "sell",
              title: getFieldTranslationByNames("352"),
              content: <SellerTab seller />,
            },
          ]
        : []),

      ...(status === undefined
        ? [
            {
              path: "building",
              title: getFieldTranslationByNames("355"),
              content: <PropertyConstruction />,
            },
          ]
        : []),

      ...(status === "completed"
        ? [
            {
              path: "enter",
              title: getFieldTranslationByNames("354"),
              content: <EnterTab owner />,
            },
            {
              path: "physic",
              title: getFieldTranslationByNames("356"),
              content: <PhysicTab owner />,
            },
            {
              path: "participation",
              title: getFieldTranslationByNames("357"),
              content: <ParticipationTab owner />,
            },
          ]
        : []),

      ...(status === "in_progress"
        ? [
            {
              path: "participation",
              title: getFieldTranslationByNames("357"),
              content: <ParticipationTab owner />,
            },
          ]
        : []),
    ],
    [status],
  );

  const BuySystemTabs = [
    commonTab,
    {
      path: "buy",
      title: getFieldTranslationByNames("353"),
      content: <BuyerTabSystem />,
    },
  ];

  const BuyUserTabs = useMemo(
    () => [
      commonTab,

      ...(status !== "in_progress"
        ? [
            {
              path: "buy",
              title: getFieldTranslationByNames("353"),
              content: <BuyerTab />,
            },
          ]
        : []),

      ...(status === "completed"
        ? [
            {
              path: "enter",
              title: getFieldTranslationByNames("354"),
              content: <EnterTab />,
            },
            {
              path: "physic",
              title: getFieldTranslationByNames("356"),
              content: <PhysicTab />,
            },
            {
              path: "participation",
              title: getFieldTranslationByNames("357"),
              content: <ParticipationTab />,
            },
          ]
        : []),

      ...(status === "in_progress"
        ? [
            {
              path: "participation",
              title: getFieldTranslationByNames("357"),
              content: <ParticipationTab />,
            },
          ]
        : []),
    ],
    [status],
  );

  useEffect(() => {
    const user = getUser();
    if (user?.id) setUserId(Number(user.id));
  }, [getUser]);

  let tabs = [commonTab];

  if (FeatureColor(feature?.properties?.rgb) && userId) {
    if (feature?.owner_id === 1) tabs = BuySystemTabs;
    else if (feature?.owner_id === userId) tabs = SellTabs;
    else tabs = BuyUserTabs;
  }
  useEffect(() => {
    if (!isFeatureReady) return;

    if (!tabs.find((t) => t.path === tab)) {
      navigate("", { replace: true });
    }
  }, [tab, tabs, navigate, isFeatureReady]);

  if (!isFeatureReady) {
    return null;
  }
  return (
    <>
      <Tabs items={tabs} />
    </>
  );
}
