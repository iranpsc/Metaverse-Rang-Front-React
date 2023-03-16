import React from "react";
import styled from "styled-components";

const Label = styled.label`
  color: #707070 !important;
  position: absolute;
  top: 45%;
  right: 16px;
  background-color: transparent !important;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const InputContainer = styled.div`
  width:65%;
  position: relative;
`;

const Input = styled.input`
  margin-top:12px;
  width: 100%;
  padding-left: 32px;
  font-size: 1rem !important;
  height: 50px !important;
  border-radius: 8px !important;
  border: 1px solid #c2c2c2 !important;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  &[value=""]:focus + ${Label} {
    top: -12px;
    right: 16px;
    background: white;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 16px;
  }

  &:not([value=""]) + ${Label} {
    top: -12px;
    right: 16px;
    background: white;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 16px;
  }
`;

const ErrorContainer = styled.p`
  margin-top: 8px;
  text-align: right;
  font-size: 12px;
  color: red;
`;

export default function PriceInput({ onChange, value, text, name, errors }) {
  return (
    <InputContainer>
      <Input
        name={name}
        type="number"
        value={value}
        className="invalid"
        onChange={(e) =>
          onChange((data) => ({ ...data, [e.target.name]: e.target.value }))
        }
      />
      <Label>{text}</Label>
      <ErrorContainer>{errors?.[name]}</ErrorContainer>
    </InputContainer>
  );
}
