import React, { useState } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ Checkmark {
    background-color: #fff;
    border: 2px solid orange;

    &:after {
      display: block;
      color: orange;
    }
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid ${props => props.borderColor ? props.borderColor : 'orange'};

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${({ checked }) =>
    checked &&
    `
      &:after {
        content: "";
        display: block;
        left: 7px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid orange;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        color: orange;
      }
  `}
`;

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);
console.log(checked)
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleChange} />
      <Checkmark checked={checked} borderColor={props.borderColor} />
      {props.label ? props.label : ""}
    </CheckboxContainer>
  );
};

export default Checkbox;