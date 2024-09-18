import React from "react";
import styled from "styled-components";
import Rial from "../../../../../Components/Rial";
import Psc from "../../../../../Components/Psc";
import Input from "../../../../../Components/Input";
import { convertToPersian } from "../../../../../Services/Utility";
import TitleValue from "../../../../../Components/TitleValue";
import Button from "../../../../../Components/Button";
import SuggestText from "./SuggestText";

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 20px;
  padding-left: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    padding-left: 0;
  }
`;

const ResultWrapper = styled.div`
  display: grid;
  direction: rtl;
  gap: 20px;
  width: 100%;
  @media (min-width: 670px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1023px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 3fr 2fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 40px !important;
  border: 1px solid #454545;
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  overflow: hidden;
  @media (min-width: 998px) {
    height: 48px !important;
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

const Div = styled.div`
  height: 250px !important;
  direction: rtl;
  margin-bottom: 10px;
`;

const Sec = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
`;

const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 5px;
`;

const FillInputs = ({
  rial,
  setRial,
  psc,
  setPsc,
  suggestText,
  setSuggestText,
  onSubmit,
  errors,
  totalIrr,
  remainingAmount,
}) => {
  const handleRialChange = (e) => {
    const value = e.target.value;
    setRial(value);
    setPsc((parseFloat(value) / 900).toFixed(2));
  };

  const handlePscChange = (e) => {
    const value = e.target.value;
    setPsc(value);
    setRial((parseFloat(value) * 900).toFixed(0));
  };

  return (
    <>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={handleRialChange}
          type="number"
          placeholder="پیشنهاد قیمت فروش (ریال)"
          insideText={<Rial />}
        />
        <Input
          value={psc}
          onchange={handlePscChange}
          type="number"
          placeholder="پیشنهاد قیمت فروش (PSC)"
          insideText={<Psc />}
        />
      </InputsWrapper>
      {errors.price && <ErrorText>{errors.price}</ErrorText>}
      <Div>
        <SuggestText setValue={setSuggestText} value={suggestText} />
        <span style={{ color: "gray", fontSize: "14px" }}>
          {1000 - suggestText.length} کاراکتر
        </span>
      </Div>
      <ResultWrapper>
        <Wrapper>
          <Title>قیمت نهایی</Title>
          <Value dir="ltr">
            {convertToPersian(rial)} IRR / {psc} PSC
          </Value>
        </Wrapper>
        <Sec>
          <TitleValue
            title="مانده"
            value={convertToPersian(remainingAmount.toFixed(0))}
          />
          <TitleValue title="کارمزد" value="5%" />
        </Sec>
      </ResultWrapper>
      <div dir="rtl">
        <Button label="ثبت پیشنهاد" onclick={onSubmit} />
      </div>
    </>
  );
};

export default FillInputs;
