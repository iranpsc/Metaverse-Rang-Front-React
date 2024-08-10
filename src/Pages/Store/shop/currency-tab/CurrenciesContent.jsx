import styled from "styled-components";
import { useContext } from "react";
import Alert from "../../../../Components/Alert/Alert";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import InfoRow from "../InfoRow";
import Title from "../../../../Components/Title";

const Container = styled.div`
  padding-top: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 850px) {
    height: 75% !important;
  }
  @media (max-width: 1023px) {
    max-height: 14.5rem;
    overflow-y: auto;
  }
`;
const CurrenciesContent = ({ option, currencies }) => {
  const currencyContent = currencies.find((currency) => currency.id === option);
  const { alert } = useContext(AlertContext);
  return (
    <Container>
      {alert && <Alert type="success" text="خرید شما با موفقیت انجام شد!" />}
      <Title title="ارزها" />
      <Wrapper>
        {currencyContent.items.map((item) => (
          <InfoRow shop type="ارز" key={item.id} data={item} />
        ))}
      </Wrapper>
      ;
    </Container>
  );
};

export default CurrenciesContent;
