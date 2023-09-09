import { memo, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Show } from "../../Assets/svg/passShowIcon.svg";
import { ReactComponent as Hidden } from "../../Assets/svg/passIcon.svg";
const Label = styled.label`
  color: ${(props) => props.theme.inputLabelColor};
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent !important;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const InputField = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.inputBgColor};
  border: 1px solid ${(props) => props.theme.inputBorder};
  outline: none;
  text-align: right;
  font-family: AzarMehr-DS2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.inputText};
  ::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    left: 12px;
    top: 29%;
  }

  & svg:hover {
    cursor: pointer;
  }

  ${InputField}[value='']:focus + ${Label} {
    top: -26px;
    right: 16px;
    background: white;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 16px;
  }

  ${InputField}:not([value='']) + ${Label} {
    top: -26px;
    right: 16px;
    background: white;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 16px;
  }
`;
const Icon = styled(Show)`
  width: 20.8px;
  height: 20.8px;
  flex-shrink: 0;
  stroke: ${(props) => props.theme.inputText};
`;
const Icon2 = styled(Hidden)`
  width: 20.8px;
  height: 20.8px;
  flex-shrink: 0;
  stroke: ${(props) => props.theme.inputText};
`;
function Input({
  placeholder,
  className,
  dispatch,
  value,
  maxLength,
  style,
  name,
  options,
  type = "text",
  nextSibling = false,
  floatLabel = false,
}) {
  const [show, setShow] = useState(false);
  const onChangeHandler = (e) => {
    if (dispatch) {
      if (typeof maxLength === "number") {
        if (value.length <= maxLength) {
          value = e.target.value.substring(0, maxLength);
          e.target.value = value;
        }
      }

      dispatch((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

      if (nextSibling) {
        e.target.nextElementSibling.focus();
      }
    }
  };

  return floatLabel ? (
    <Container>
      <InputField
        name={name}
        style={{ ...style }}
        type={type}
        className={className}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChangeHandler(e);
        }}
        {...options}
      />

      <Label>{placeholder}</Label>
    </Container>
  ) : (
    <Container>
      <InputField
        name={name}
        style={{ ...style }}
        type={type === "password" ? (show ? "text" : "password") : type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChangeHandler(e);
        }}
        {...options}
      />

      {type === "password" &&
        (show ? (
          <Icon onClick={() => setShow(false)}></Icon>
        ) : (
          <Icon2 onClick={() => setShow(true)}></Icon2>
        ))}
    </Container>
  );
}
// fa-solid fa-eye
// fa-solid fa-eye-slash
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps?.options?.disabled === nextProps?.options?.disabled
  );
};

export default memo(Input, areEqual);
