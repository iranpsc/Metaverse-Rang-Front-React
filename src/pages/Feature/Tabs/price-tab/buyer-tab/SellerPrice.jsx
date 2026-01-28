import { getFieldTranslationByNames } from "../../../../../services/Utility";
import SellerPriceInfo from "./SellerPriceInfo";
import styled from "styled-components";
import Button from "../../../../../components/Button";
import Container from "../../../../../components/Common/Container";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
    padding-top: 20px;

  width: 100%;
  overflow-y: auto;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.7rem;
`;

const SellerPrice = () => {
  return (
    <Container>
      <Wrapper>
        <Text>{getFieldTranslationByNames("526")}</Text>
        <SellerPriceInfo />
      </Wrapper>
    </Container>
  );
};

export default SellerPrice;
