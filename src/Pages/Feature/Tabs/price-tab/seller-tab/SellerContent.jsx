import Lowest from "./Lowest";
import PriceDefine from "./PriceDefine";

const SellerContent = ({ option }) => {
  if (option) return <Lowest />;
  if (!option) return <PriceDefine />;
};

export default SellerContent;
