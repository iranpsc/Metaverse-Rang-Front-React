import React from "react";
import useActivity from "../../../../Services/Hooks/useActivity";
import GeneralDefault from "./Tabs/Generaldefault";
import SpecialOrder from "./Tabs/SpecialOrder";

const PropertyConstruction = () => {
  const tabs = [
    {
      name: "پیش فرض عمومی",
      component: <GeneralDefault />,
    },
    { name: "سفارش اختصاصی", component: <SpecialOrder /> },
  ];

  const activity = useActivity(tabs);

  return activity;
};

export default PropertyConstruction;
