import styled from "styled-components";
import { useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Title from "../../../../Components/Title";
import Button from "../../../../Components/Button";

import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import { convertPersianNumbersToEnglish } from "../../../../Services/Utility";
import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// Wrapper Component
const Wrapper = styled.div`
  overflow-y: auto;
  height: 84%;
  padding-right: 15px;
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    height: ${(props) => (props.identityError ? "85%" : "auto")};
  }
`;

// Container Component
const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  direction: rtl;
  gap: 10px;
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
  }
`;

// EditInput Component
const InputContainer = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.hasError
        ? "red"
        : props.theme.colors.newColors.otherColors.inputBorder};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;

  input {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const EditInput = ({
  id,
  icon,
  title,
  type,
  onchange,
  value,
  name,
  identityError,
  error,
  slug,
}) => {
  // Function to handle input validation based on the input type
  const handleInputChange = (e) => {
    let regex;
    if (type === "text") {
      regex = /^[a-zA-Zآ-ی\s]*$/; // Allow only letters and spaces
      if (regex.test(e.target.value)) {
        onchange(e); // Call the parent's onChange handler
      }
    } else if (type === "number") {
      const numericValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      e.target.value = numericValue;
      onchange(e); // Call the parent's onChange handler
    }
  };
  return (
    <InputContainer hasError={identityError}>
      <input
        placeholder={title}
        value={value}
        onChange={handleInputChange} // Use the custom handler here
        type={type || "text"}
        name={name}
      />
      {slug === "psc" ? (
        <Psc color="#DEDEE9" />
      ) : (
        slug === "rial" && <Rial color="#DEDEE9" />
      )}
      {(id === 1) | (id === 2) ? (
        <img width={28} height={28} src={icon} alt={title} />
      ) : (
        ""
      )}
    </InputContainer>
  );
};

export default EditInput;
