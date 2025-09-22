import { getFieldTranslationByNames } from "../../../../../services/Utility";
import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 15px;
  padding-top: 20px;
  gap: 30px;
  width: 100%;
  @media (max-width: 1024px) {
    height: 66vh !important;
    overflow: auto;
  }
  @media (min-width: 1025px) {
    height: auto !important;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.7rem;
`;

const SellerPrice = () => {
  return (
    <Wrapper>
      <Text>
        {getFieldTranslationByNames("526")}
      </Text>
      <SellerPriceInfo />
    </Wrapper>
  );
};

export default SellerPrice;
