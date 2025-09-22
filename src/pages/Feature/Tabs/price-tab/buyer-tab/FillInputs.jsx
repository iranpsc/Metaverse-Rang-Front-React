import React from "react";
import styled from "styled-components";
import Rial from "../../../../../components/Rial";
import Psc from "../../../../../components/Psc";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import TitleValue from "../../../../../components/TitleValue";
import SuggestText from "./SuggestText";
import {
  calculateFee,
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../../services/Utility";

// constants
const PSC_TO_RIAL_RATE = 900;
const SUGGEST_TEXT_MAX_LENGTH = 1000;

// Styled components moved to separate file for better organization
import {
  InputsWrapper,
  ResultWrapper,
  Wrapper,
  Title,
  Value,
  SuggestWrapper,
  Sec,
  ErrorText,
} from "./FillInputs.styles";

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
}) => {
  const handleValueChange = (value, isRial) => {
    if (value === "") {
      setRial("");
      setPsc("");
      return;
    }

    const numValue = parseFloat(value);
    if (isRial) {
      setRial(value);
      setPsc((numValue / PSC_TO_RIAL_RATE).toFixed(2));
    } else {
      setPsc(value);
      setRial((numValue * PSC_TO_RIAL_RATE).toFixed(0));
    }
  };

  const handleRialChange = (e) => handleValueChange(e.target.value, true);
  const handlePscChange = (e) => handleValueChange(e.target.value, false);

  const remainingAmount = totalIrr - rial - psc * PSC_TO_RIAL_RATE;
  const remainingChars = SUGGEST_TEXT_MAX_LENGTH - suggestText.length;

  return (
    <>
      <InputsWrapper>
        <Input
          value={rial}
          onchange={handleRialChange}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "521"
          )} (${getFieldTranslationByNames("48")})`}
          insideText={<Rial />}
        />
        <Input
          value={psc}
          onchange={handlePscChange}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "521"
          )} (${getFieldTranslationByNames("47")})`}
          insideText={<Psc />}
        />
      </InputsWrapper>

      {errors.price && <ErrorText>{errors.price}</ErrorText>}

      <SuggestWrapper>
        <SuggestText setValue={setSuggestText} value={suggestText} />
        <span style={{ color: "gray", fontSize: "14px" }}>
          {remainingChars} {getFieldTranslationByNames("530")}
        </span>
      </SuggestWrapper>

      <ResultWrapper>
        <Wrapper>
          <Title>{getFieldTranslationByNames("522")}</Title>
          <Value>
            {convertToPersian(calculateFee(rial))}{" "}
            {getFieldTranslationByNames("48")} /{" "}
            {convertToPersian(calculateFee(psc))}{" "}
            {getFieldTranslationByNames("47")}
          </Value>
        </Wrapper>
        <Sec>
          <TitleValue
            title={getFieldTranslationByNames("531")}
            value={convertToPersian(remainingAmount)}
          />
          <TitleValue
            title={getFieldTranslationByNames("523")}
            value={`${convertToPersian(5)}%`}
          />
        </Sec>
      </ResultWrapper>

      <div>
        <Button label={getFieldTranslationByNames("532")} onclick={onSubmit} />
      </div>
    </>
  );
};

export default FillInputs;
