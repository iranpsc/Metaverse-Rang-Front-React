import styled from "styled-components";
import { useLanguage } from "../Services/Reducers/LanguageContext";

const Wrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  overflow: hidden;
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  display: flex;
  width: 100%;
  @media (min-width: 998px) {
    height: 50px;
  }
`;

const InputElement = styled.input`
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  width: 100%;
  height: 100%;
  font-size: 16px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Span = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;

  ${(props) => (props.isPersian ? "left: 10px;" : "right: 10px;")}
  top: 5px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  @media (min-width: 998px) {
    top: 10px;
  }
`;
const Input = ({
  type,
  placeholder,
  insideText,
  value,
  gif,
  onchange,
  disabled,
  name,
}) => {
  const isPersian = useLanguage();

  // Format display value only for number type
  const displayValue =
    type === "number" && isPersian && value
      ? value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
      : value;

  const handleChange = (e) => {
    if (type === "number") {
      // Only allow numbers and remove any non-numeric characters
      const numericValue = e.target.value.replace(/[^۰-۹0-9]/g, "");

      // Convert Persian digits to English before passing to onChange
      const persianToEnglish = numericValue.replace(
        /[۰-۹]/g,
        (d) =>
          ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"][
            d.charCodeAt(0) - "۰".charCodeAt(0)
          ]
      );
      onchange({ ...e, target: { ...e.target, value: persianToEnglish } });
    } else {
      // For non-number types, pass the value directly
      onchange(e);
    }
  };

  return (
    <Wrapper>
      <InputElement
        type={type === "number" ? "text" : type}
        inputMode={type === "number" ? "numeric" : undefined}
        pattern={type === "number" ? "[0-9]*" : undefined}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        name={name}
      />
      <Span isPersian={isPersian}>
        {insideText}
        {gif && (
          <img width={30} height={30} loading="lazy" src={gif} alt="git" />
        )}
      </Span>
    </Wrapper>
  );
};

export default Input;
