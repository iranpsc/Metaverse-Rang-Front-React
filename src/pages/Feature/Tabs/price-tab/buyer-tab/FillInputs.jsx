import Rial from "../../../../../components/Rial";
import Psc from "../../../../../components/Psc";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import TitleValue from "../../../../../components/TitleValue";

import {
  calculateFee,
  convertToPersian,
  getFieldTranslationByNames,
  formatNumber,
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
    // فقط مقدار همون فیلد ذخیره میشه
    if (isRial) {
      setRial(value);
    } else {
      setPsc(convertToPersian(value, false));
    }
  };

  const handleRialChange = (e) => handleValueChange(e.target.value, true);
  const handlePscChange = (e) => handleValueChange(e.target.value, false);

  const remainingAmount = totalIrr - rial - psc * PSC_TO_RIAL_RATE;
  return (
    <>
      <InputsWrapper>
        <Input
          value={formatNumber(rial)}
          onChange={handleRialChange}
          type="number"
          placeholder={`${getFieldTranslationByNames(
            "521"
          )} (${getFieldTranslationByNames("48")})`}
          insideText={<Rial />}
        />
        <Input
          value={convertToPersian(psc)}
          onChange={handlePscChange}
          type="text"
          placeholder={`${getFieldTranslationByNames(
            "521"
          )} (${getFieldTranslationByNames("47")})`}
          insideText={<Psc />}
        />
      </InputsWrapper>

      {errors.price && <ErrorText>{errors.price}</ErrorText>}

      <SuggestWrapper>
        <CustomEditor
          value={suggestText}
          onChange={setSuggestText}
          charLimit={1000}
          placeholder={getFieldTranslationByNames("529")}
        />
      </SuggestWrapper>

      <ResultWrapper>
        <Wrapper>
          <Title>{getFieldTranslationByNames("522")}</Title>
          <Value>
            {convertToPersian(calculateFee(rial) || 0)}{" "}
            {getFieldTranslationByNames("48")} /{" "}
            {convertToPersian(calculateFee(psc) || 0)}{" "}
            {getFieldTranslationByNames("47")}
          </Value>
        </Wrapper>
        <Sec>
          <TitleValue
            title={getFieldTranslationByNames("531")}
            value={convertToPersian(
              formatNumber(remainingAmount / PSC_TO_RIAL_RATE)
            )}
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
