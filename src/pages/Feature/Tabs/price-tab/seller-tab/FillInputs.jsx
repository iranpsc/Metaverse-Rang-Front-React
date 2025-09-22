import styled from "styled-components";
import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";
import {
  calculateFee,
  getFieldTranslationByNames,
  TimeAgo,
  ToastError,
} from "../../../../../services/Utility";
import TitleValue from "../../../../../Components/TitleValue";
import Button from "../../../../../Components/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../../../../services/Reducers/UserContext";
import { FeatureContext } from "../../../Context/FeatureProvider";

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  font-weight: 400;
  ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  overflow: hidden;
  @media (min-width: 998px) {
    height: 48px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
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
  const [user] = useContext(UserContext);
  const [feature] = useContext(FeatureContext);
  const [errors, setErrors] = useState({ rial: "", psc: "" });

  const priceHandler = () => {
    let isValid = true;
    const userAge = TimeAgo(user?.birthdate);

    const minPriceIRR =
      userAge >= 18
        ? calculateFee(feature.properties.price_irr, 80)
        : calculateFee(feature.properties.price_irr, 110);

    const minPricePSC =
      userAge >= 18
        ? calculateFee(feature.properties.price_psc, 80)
        : calculateFee(feature.properties.price_psc, 100);

    if (rial < minPriceIRR) {
      setErrors((prev) => ({
        ...prev,
        rial: `حداقل ارزش معامله ${minPriceIRR} ریال می‌باشد`,
      }));
      isValid = false;
    }

    if (psc < minPricePSC) {
      setErrors((prev) => ({
        ...prev,
        psc: `حداقل ارزش معامله ${minPricePSC} PSC می‌باشد`,
      }));
      isValid = false;
    }

    if (isValid) {
      setAssign(true);
    } else {
      ToastError("لطفاً خطاها را اصلاح کنید");
    }
  };

  return (
    <Div>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={(e) => setRial(e.target.value)}
          type="number"
          placeholder={`${getFieldTranslationByNames("521")} (${getFieldTranslationByNames("47")})`}
          insideText={<Rial />}
          errorMessage={errors.rial}
        />
        <Input
          value={psc}
          onchange={(e) => setPsc(e.target.value)}
          type="number"
          placeholder={`${getFieldTranslationByNames("521")} (${getFieldTranslationByNames("47")})`}
          insideText={<Psc />}
          errorMessage={errors.psc}
        />
      </InputsWrapper>
      <ResultWrapper>
        <Wrapper>
          <Title>
            {getFieldTranslationByNames("522")}
          </Title>
          <Value>
            {calculateFee(rial)} IRR / {calculateFee(psc)} PSC
          </Value>
        </Wrapper>
        <TitleValue
          title={getFieldTranslationByNames("523")}
          value="5%"
        />
      </ResultWrapper>
      <Button
        label={getFieldTranslationByNames("519")}
        onclick={priceHandler}
      />
    </Div>
  );
};

export default FillInputs;
