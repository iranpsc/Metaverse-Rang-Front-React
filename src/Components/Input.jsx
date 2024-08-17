import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: #2c2c2c;
  border: 1px solid #454545;
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
  color: #84858f;
  background-color: #2c2c2c;
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
  left: 10px;
  top: 5px;
  color: #dedee9;
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
}) => {
  return (
    <Wrapper>
      <InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        disabled={disabled}
      />
      <Span>
        {insideText}
        {gif && (
          <img width={30} height={30} loading="lazy" src={gif} alt="git" />
        )}
      </Span>
    </Wrapper>
  );
};

export default Input;
