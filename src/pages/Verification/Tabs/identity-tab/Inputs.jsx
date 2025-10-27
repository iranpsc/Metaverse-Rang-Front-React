import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

import DatePicker from "react-multi-date-picker";

import { FaRegCalendarAlt } from "react-icons/fa";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import EditInput from "../../../Feature/Tabs/enter-tab/EditInput";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import Dropdown from "../../../../components/Common/Dropdown";

const Birthday = styled.div`
  border-radius: 5px;
  border: 1px solid ${(props) => (props.identityError ? "red" : "#454545")};

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};

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
  border: 1px solid ${(props) => (props.identityError ? "red" : "#454545")};

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
      <Dropdown
        options={data[3].options.map(
          (option) => getFieldTranslationByNames(option.city) || option.city
        )}
        selected={inputValues[data[3].slug]}
        onSelect={(value) =>
          handleInputChange({
            target: { name: data[3].slug, value },
          })
        }
        placeholder={getFieldTranslationByNames("871")}
        searchable={true}
        disSelectOption={false}
      />

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
      <Dropdown
        disSelectOption={false}
        options={data[5].options.map((option) =>
          getFieldTranslationByNames(option.gender)
        )}
        placeholder={getFieldTranslationByNames("872")}
        selected={inputValues[data[5].slug]}
        onSelect={(selectedOption) =>
          handleInputChange({
            target: { name: data[5].slug, value: selectedOption },
          })
        }
        hasError={!!data[5]?.error}
      />
    </Container>
  );
};

export default Inputs;
