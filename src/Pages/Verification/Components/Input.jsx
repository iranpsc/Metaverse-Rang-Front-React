import { isPersian } from "@persian-tools/persian-tools";
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
  width: 100%;
  position: relative;
  margin-bottom: 24px;
`;

const TextInput = styled.input`
  margin-top: 12px;
  width: 100%;
  text-align: right;
  direction: rtl;
  padding: 8px;
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

  &.invalid {
    border: 1px solid red !important;
    box-shadow: 2px 2px 5px 0px #ef58589e;
  }
`;

export default function Input({ onChange, numberOnly,value, text, name, ignoreEn, error, disabled }) {
  const onChangeHandler = (e) => {
    if(numberOnly) {
        try {
            if(Number(e.target.value) || e.target.value === "" || parseInt(e.target.value) === 0) {
                onChange((data) => ({ ...data, [e.target.name]: e.target.value }));
            }  
        } catch {}
    } else {
        if (isPersian(e.target.value) || e.target.value === "" || ignoreEn) {
            onChange((data) => ({ ...data, [e.target.name]: e.target.value }));
        }
    }
  };

  return (
    <InputContainer>
      <TextInput
        name={name}
        type="text"
        value={value}
        className={`${error && 'invalid'}`}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <Label>{text}</Label>
    </InputContainer>
  );
}
