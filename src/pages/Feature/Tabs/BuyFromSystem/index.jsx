import React, { useContext } from "react";
import { FeatureColor } from "../../../../services/constants/FeatureType";
import useActivity from "../../../../services/Hooks/useActivity";
import { FeatureContext } from "../../Context/FeatureProvider";
import BuySystem from "./Tabs/BuySystem";

export default function BuyFromSystem() {
  const [feature, ] = useContext(FeatureContext);

  const tabs = [
    {
      name: "قیمت فروشنده",
      component: (
        <BuySystem
          rgb={feature.properties.rgb}
          price={feature.properties.area * feature.properties.density}
          image={FeatureColor(feature.properties.rgb)}
          id={feature.id}
        />
      ),
    },
  ];

  const activity = useActivity(tabs, { justifyContent: "center" });

  return activity;
}
