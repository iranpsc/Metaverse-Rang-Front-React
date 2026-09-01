import Rial from "../../../../../components/Rial";
import Psc from "../../../../../components/Psc";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import TitleValue from "../../../../../components/TitleValue";

import {
  calculateFee,
  convertToPersian,
  getTranslation,
  formatNumber,
  normalizeDecimalInput,
} from "../../../../../services/Utility";
import CustomEditor from "../../../../../components/Common/CustomEditor";
// constants
const PSC_TO_RIAL_RATE = 900;

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
    if (isRial) {
      const sanitizedValue = value === "" ? "" : Number(value);
      setRial(Number.isFinite(sanitizedValue) ? sanitizedValue : 0);
      return;
    }

    const normalized = normalizeDecimalInput(value);
    if (normalized === "") {
      setPsc("");
      return;
    }

    setPsc(normalized);
  };

  const handleRialChange = (e) => handleValueChange(e.target.value, true);
  const handlePscChange = (e) => handleValueChange(e.target.value, false);

  const remainingAmount = totalIrr - Number(rial || 0) - Number(psc || 0) * PSC_TO_RIAL_RATE;
  const rialFee = calculateFee(Number(rial || 0));
  const pscFee = calculateFee(Number(psc || 0));

  return (
    <>
      <InputsWrapper>
        <Input
          value={formatNumber(rial)}
          onChange={handleRialChange}
          type="number"

          insideText={<Rial />}
        />
        <Input
          value={psc === "" ? "" : convertToPersian(psc)}
          onChange={handlePscChange}
          type="text"
          inputMode="decimal"
          insideText={<Psc />}
        />
      </InputsWrapper>

      {errors.price && <ErrorText>{errors.price}</ErrorText>}

      <SuggestWrapper>
        <CustomEditor
          value={suggestText}
          onChange={setSuggestText}
          charLimit={1000}
          placeholder={getTranslation("529")}
        />
      </SuggestWrapper>

      <ResultWrapper>
        <Wrapper>
          <Title>{getTranslation("522")}</Title>
          <Value>
            {convertToPersian(rialFee || 0)} {getTranslation("48")} / {" "}
            {convertToPersian(pscFee || 0)} {getTranslation("47")}
          </Value>
        </Wrapper>
        <Sec>
          <TitleValue
            title={getTranslation("531")}
            value={convertToPersian(
              formatNumber(remainingAmount / PSC_TO_RIAL_RATE)
            )}
          />
          <TitleValue
            title={getTranslation("523")}
            value={`${convertToPersian(5)}%`}
          />
        </Sec>
      </ResultWrapper>

      <div>
        <Button label={getTranslation("532")} onclick={onSubmit} />
      </div>
    </>
  );
};

export default FillInputs;
