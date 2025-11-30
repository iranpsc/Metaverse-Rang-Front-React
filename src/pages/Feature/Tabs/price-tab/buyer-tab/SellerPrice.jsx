import { getFieldTranslationByNames } from "../../../../../services/Utility";
import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";
import Button from "../../../../../components/Button";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
padding: 15px;
  gap: 30px;
  width: 100%;
 overflow-y: auto;
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
