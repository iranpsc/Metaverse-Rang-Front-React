import styled from "styled-components";
import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";
import { convertToPersian } from "../../../../../Services/Utility";
import TitleValue from "../../../../../Components/TitleValue";
import Button from "../../../../../Components/Button";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 23px;
`;
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 0 0 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    padding-left: 0;
  }
`;

const ResultWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  @media (min-width: 741px) {
    grid-template-columns: 3fr 1fr;
  }
  @media (min-width: 840px) {
    grid-template-columns: 5fr 2fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 4fr 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 40px;
  border: 1px solid #454545;
  font-weight: 400;
  color: #dedee9;
  overflow: hidden;
  @media (min-width: 998px) {
    height: 48px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: #1a1a18;
  padding: 5px 20px;
  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

const Value = styled.p`
  font-size: 18px;
  padding: 5px 20px;
  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

const FillInputs = ({ setAssign, rial, setRial, psc, setPsc }) => {
  const priceHandler = () => {
    if (rial > 0 && psc > 0) {
      setAssign(true);
    }
  };

  return (
    <Div>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder="قیمت فروش (ریال)"
          insideText={<Rial />}
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder="قیمت فروش (PSC)"
          insideText={<Psc />}
        />
      </InputsWrapper>
      <ResultWrapper>
        <Wrapper>
          <Title>قیمت نهایی</Title>
          <Value dir="ltr">
            {convertToPersian(rial)} IRR / {convertToPersian(psc)} PSC
          </Value>
        </Wrapper>
        <TitleValue title="کارمزد" value="5%" />
      </ResultWrapper>
      <Button label="ثبت قیمت" onclick={priceHandler} />
    </Div>
  );
};

export default FillInputs;
