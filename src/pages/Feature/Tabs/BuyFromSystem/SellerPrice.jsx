import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";
import { getTranslation } from "../../../../services/Utility";
import Container from "../../../../components/Common/Container";
const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding: 20px;
  padding-bottom: 60px;

  gap: 30px;
  width: 100%;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.7rem;
`;

const SellerPrice = () => {
  return (
    <Wrapper>
      <Text>{getTranslation(1528)} </Text>
      <SellerPriceInfo />
    </Wrapper>
  );
};

export default SellerPrice;
