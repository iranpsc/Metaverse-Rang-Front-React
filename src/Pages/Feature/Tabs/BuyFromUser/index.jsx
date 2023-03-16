import React, { useContext } from "react";
import useActivity from "../../../../Services/Hooks/useActivity";
import PriceDetermination from "./Tabs/PriceDetermination";
import BuyUser from "./Tabs/BuyUser";
import { FeatureContext } from "../../Context/FeatureProvider";

export default function BuyFromUser() {
  const [feature, ] = useContext(FeatureContext);

  const SellerTabs = [
    {
      name: "قیمت فروشنده",
      component: (
        <BuyUser />
      ),
    },
    {
      name: "قیمت پیشنهادی",
      component: (
        <PriceDetermination
          Percentage={feature.properties.minimum_price_percentage}
          priceIrr={feature.properties.price_irr}
          pricePsc={feature.properties.price_psc}
        />
      ),
    },
  ];

  const tabs = [
    {
      name: "قیمت پیشنهادی",
      component: (
        <PriceDetermination
          Percentage={feature.properties.minimum_price_percentage}
          priceIrr={feature.properties.price_irr}
          pricePsc={feature.properties.price_psc}
        />
      ),
    },
  ];

  const SellerActivity = useActivity(SellerTabs, { justifyContent: "center" });

  const activity = useActivity(tabs, { justifyContent: "center" });

  return (
    <>
      {parseInt(feature.properties.price_irr) === 0 &&
      parseInt(feature.properties.price_psc) === 0
        ? activity
        : SellerActivity}
    </>
  );
}
