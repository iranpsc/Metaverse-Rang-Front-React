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
  height: 40px;
  @media (min-width: 1024px) {
    height: 50px;
  }
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.validation
      ? props.theme.inputBgColorError
      : props.theme.inputBgColor};
  border: 1px solid
    ${(props) =>
      props.validation
        ? props.theme.inputBorderError
        : props.theme.inputBorder};
  outline: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) =>
    props.validation ? props.theme.inputTextError : props.theme.inputText};
  ::placeholder {
    color: ${(props) => props.theme.placeholder};
    font-size: 15px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    ${(props) => (document.body.dir === "ltr" ? "right: 12px;" : "left: 12px;")}
    top: 29%;
  }

  & svg:hover {
    cursor: pointer;
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
const ErrorMassage = styled.p`
  color: #f00;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  display: flex;
  width: 298px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
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
  validation,
  Error,
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
        autoComplete="off"
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
        autoComplete="off"
        validation={validation}
        {...options}
      />

      {type === "password" &&
        (show ? (
          <Icon onClick={() => setShow(false)}></Icon>
        ) : (
          <Icon2 onClick={() => setShow(true)}></Icon2>
        ))}
      {validation && Error && <ErrorMassage>{Error} </ErrorMassage>}
    </Container>
  );
}

export default Input;
