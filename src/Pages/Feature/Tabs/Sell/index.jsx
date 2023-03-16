import React from "react";
import useActivity from "../../../../Services/Hooks/useActivity";
import PriceDetermination from "./Tabs/PriceDetermination";
import PriceFloor from "./Tabs/PriceFloor";

export default function Sell() {
  const tabs = [
    {
      name: "کف قیمت",
      component: (
        <PriceFloor />
      ),
    },
    { name: "تعیین قیمت", component: <PriceDetermination /> },
  ];

  const activity = useActivity(tabs, { justifyContent: "center" });

  return activity;
}
