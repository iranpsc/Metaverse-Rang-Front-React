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
  return (
    <Wrapper>
      <InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
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
