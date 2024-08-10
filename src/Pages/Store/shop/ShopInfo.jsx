import CurrencyTab from "./currency-tab/CurrencyTab";
import ToolTab from "./tool-tab/ToolTab";

const ShopInfo = ({ active }) => {
  if (active === "tools") return <ToolTab />;
  if (active === "currency") return <CurrencyTab />;
};

export default ShopInfo;
