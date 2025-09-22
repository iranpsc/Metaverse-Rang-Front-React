import Dropdown from "./Dropdown";
import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { useEffect, useState } from "react";
import { getFieldTranslationByNames, getFieldsByTabName } from "../../../../services/Utility";
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
  justify-content: space-between;
  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const SelectContainer = styled.div`
  flex: 1;
  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;


const CountryCity = () => {
  const { state, dispatch } = useGlobalState();
  const [fields, setFields] = useState({
    cities: [],
    countries: [],
    languages: []
  });
  const [isFieldsLoaded, setIsFieldsLoaded] = useState(false);

  useEffect(() => {
    if (!isFieldsLoaded) {
      const loadFields = () => {
        setFields({
          cities: getFieldsByTabName("misc", "iranian-cities"),
          countries: getFieldsByTabName("misc", "countries"),
          languages: getFieldsByTabName("misc", "languages")
        });
        setIsFieldsLoaded(true);
      };
      loadFields();
    }
  }, [isFieldsLoaded]);

  const getTranslation = (fieldsType, stateValue) => {
    if (!isFieldsLoaded) return "";
    const selectedField = fields[fieldsType].find(
      (field) => field.name.trim().toLowerCase() === stateValue?.trim().toLowerCase()
    );
    return selectedField ? selectedField.translation : "";
  };

  const handleFieldChange = (fieldsType, translation, actionType) => {
    const selectedField = fields[fieldsType].find((field) => field.translation === translation);
    if (selectedField) {
      dispatch({ type: actionType, payload: selectedField.name });
    }
  };

  const options = [
    {
      type: "cities",
      translationId: "797",
      stateValue: state.loved_city,
      actionType: "SET_CITY"
    },
    {
      type: "countries",
      translationId: "798",
      stateValue: state.loved_country,
      actionType: "SET_COUNTRY"
    },
    {
      type: "languages",
      translationId: "799",
      stateValue: state.loved_language,
      actionType: "SET_LANGUAGE"
    }
  ];

  return (
    <Container>
      {options.map((option) => (
        <SelectContainer key={option.type}>
          <Label>{getFieldTranslationByNames(option.translationId)}</Label>
          <Dropdown
            options={fields[option.type].map((field) => field.translation)}
            value={getTranslation(option.type, option.stateValue)}
            label={getFieldTranslationByNames(option.translationId)}
            onChange={(translation) => handleFieldChange(option.type, translation, option.actionType)}
          />
        </SelectContainer>
      ))}
    </Container>
  );
};

export default CountryCity;
