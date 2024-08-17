import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
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
  color: #ffffff;
  line-height: 1.7rem;
  direction: rtl;
 font-weight: 100;
`;

const SellerPrice = () => {
  return (
    <Wrapper>
      <Text>
        این VOD توسط فروشنده قیمت گذاری شده است شما می توایند این ملک را به دو
        قیمت فروشنده به صورت ریال و PSC خریداری کنید{" "}
      </Text>
      <SellerPriceInfo />
    </Wrapper>
  );
};

export default SellerPrice;
