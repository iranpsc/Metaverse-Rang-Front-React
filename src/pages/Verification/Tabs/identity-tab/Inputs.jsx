import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

import DatePicker from "react-multi-date-picker";

import { FaRegCalendarAlt } from "react-icons/fa";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useState } from "react";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Birthday = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.error
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
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
  input {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    &:focus {
      border: none;
      outline: none;
    }
    font-size: 16px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;
const Select = styled.select`
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.identityError
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
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
`;

const Inputs = ({ data, inputValues, handleInputChange }) => {
  return (
    <Container>
      {data.slice(0, 3).map((item) => (
        <EditInput
          title={getFieldTranslationByNames(item.label)}
          value={inputValues[item.slug]}
          onchange={handleInputChange}
          key={item.id}
          name={item.slug}
          identityError={item?.error}
          type={item.id === 1 || item.id === 2 ? "text" : "number"}
        />
      ))}
      <Select
        identityError={data[3]?.error}
        value={inputValues[data[3].slug]}
        onChange={handleInputChange}
        name={data[3].slug}
      >
        {data[3].options.map((option) => (
          <option key={option.id}>
            {getFieldTranslationByNames(option.city) || option.city}
          </option>
        ))}
      </Select>

      <Birthday error={data[4]?.error}>
        <DatePicker
          shadow="red"
          value={inputValues[data[4].slug]}
          onChange={(dateObject) => {
            handleInputChange({
              target: { name: data[4].slug, value: dateObject.format() },
            });
          }}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          zIndex={100}
        />
        <FaRegCalendarAlt size={20} />
      </Birthday>
      <Select
        value={inputValues[data[5].slug]}
        onChange={handleInputChange}
        name={data[5].slug}
        identityError={data[5]?.error}
      >
        {data[5].options.map((option) => (
          <option key={option.id}>
            {getFieldTranslationByNames(option.gender)}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default Inputs;
