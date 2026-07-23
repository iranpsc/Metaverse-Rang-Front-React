import styled from "styled-components";

const EditInput = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  flex-grow: 1;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.newColors.otherColors.red : "transparent"};
  color: ${({ theme }) => theme.colors.newColors.shades.title};
  background-color: ${({ theme }) =>
    theme.colors.newColors.otherColors.inputBg};
  font-size: 16px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Input = ({
  placeholder,
  onChange,
  value,
  type = "text",
  maxLength = 50,
  error = false,
  ...rest
}) => {
  return (
    <EditInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      error={error}
      {...rest}
    />
  );
};

export default Input;