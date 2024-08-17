import SellerPrice from "./SellerPrice";
import SuggestPrice from "./SuggestPrice";

const BuyerContent = ({ option }) => {
  if (option) return <SellerPrice />;
  if (!option) return <SuggestPrice />;
};

export default BuyerContent;
